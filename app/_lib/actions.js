"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  console.log(formData);
  const session = await auth();
  if (!session?.user) throw new Error("You need to be logged in");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  //? Check if nationalID is valid
  const nationalId = formData.get("nationalId");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId))
    throw new Error("Please provide a valid national ID");

  const updatedFields = { nationality, countryFlag, nationalId };
  let id = session?.user?.guestId;

  const { error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session?.user) throw new Error("You need to be logged in");

  const bookings = await getBookings(session?.user?.guestId);
  const bookingsIds = bookings.map((booking) => booking.id);
  if (!bookingsIds.includes(bookingId))
    throw new Error("Not allowed to delete this reservation");
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  console.log(formData);

  const bookingId = Number(formData.get("bookingId"));

  const session = await auth();
  if (!session?.user) throw new Error("You need to be logged in");

  const bookings = await getBookings(session?.user?.guestId);
  const bookingsIds = bookings.map((booking) => booking.id);
  if (!bookingsIds.includes(bookingId))
    throw new Error("Not allowed to Update this reservation");
  const updatedFields = {
    numOfGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) throw new Error("Booking could not be updated");

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
