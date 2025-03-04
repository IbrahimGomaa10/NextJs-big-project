"use client";
import SpinnerMini from "./SpinnerMini";
import { useFormStatus } from "react-dom";

export default function SubmittedButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 rounded"
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}
