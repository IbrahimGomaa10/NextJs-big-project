"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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

  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
