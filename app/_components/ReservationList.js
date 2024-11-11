"use client";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";
import { deleteReservation } from "../_lib/actions";

export default function ReservationList({ bookings }) {
  const [bookingsOptimistic, deleteOptimistic] = useOptimistic(
    bookings,
    (state, bookingId) => {
      return state.filter((booking) => booking.id !== bookingId);
    }
  );

  const handleDelete = async (bookingId) => {
    deleteOptimistic(bookingId);
    await deleteReservation(bookingId);
  };
  return (
    <ul className="space-y-6">
      {bookingsOptimistic.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
