import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div>
      <Spinner />
      <h1 className="mb-10 text-xl font-normal tracking-tight text-primary-200">
        Loading Cabins Data...
      </h1>
    </div>
  );
}
