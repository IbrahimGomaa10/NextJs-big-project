"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  //? to Create it =>  /cabins?capacity=medium
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activeButton = searchParams.get("capacity");
  const handlerFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className=" mb-3 flex justify-end">
      <FilteredButton
        filter="all"
        handlerFilter={() => handlerFilter("all")}
        activeButton={activeButton}
      >
        All Cabins
      </FilteredButton>
      <FilteredButton
        filter="small"
        handlerFilter={() => handlerFilter("small")}
        activeButton={activeButton}
      >
        1-3 guests
      </FilteredButton>
      <FilteredButton
        filter="medium"
        handlerFilter={() => handlerFilter("medium")}
        activeButton={activeButton}
      >
        4-7 guests
      </FilteredButton>
      <FilteredButton
        filter="large"
        handlerFilter={() => handlerFilter("large")}
        activeButton={activeButton}
      >
        8+ guests
      </FilteredButton>
    </div>
  );
}

function FilteredButton({ filter, handlerFilter, activeButton, children }) {
  return (
    <button
      className={`border border-primary-800 py-3 px-5  transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
        activeButton === filter ? "bg-primary-900 text-primary-100" : ""
      }`}
      onClick={handlerFilter}
    >
      {children}
    </button>
  );
}
