import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div
      class
      name="flex flex-col items-center justify-center min-h-screen bg-primary-950"
    >
      <Spinner />
      <h1 className="mb-10 text-xl font-normal tracking-tight text-center text-primary-200">
        Loading Cabins Data...
      </h1>
    </div>
  );
}
