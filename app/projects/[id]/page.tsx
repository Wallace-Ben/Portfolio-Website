"use client";
import { usePathname } from "next/navigation";

export default function Project() {
  const pathname = usePathname().slice(10);
  return (
    <div className="flex justify-center m-auto max-w-7xl border">
      <h1 className="xl:text-4xl text-2xl font-semibold text-emerald-500 xl:mb-0 mb-2 mt-5">
        Project {pathname}
      </h1>
    </div>
  );
}
