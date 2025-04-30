"use client";

import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { SearchIcon } from "lucide-react";
import { Spinner } from "@/components/shared/spinner";
import { useRouter, useSearchParams } from "next/navigation";

export const Search = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  function searchAction(formData: FormData) {
    if (isPending) return;

    const value = formData.get("q") as string;
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", value);
    startTransition(() => {
      router.replace(`/?${params.toString()}`);
    });
  }

  return (
    <form
      action={searchAction}
      className={cn(
        "h-[40px] flex items-center px-3 bg-ui-accent rounded-t-sm border-b border-ui-gray-medium-light",
        isPending && "opacity-50"
      )}>
      <input
        name="q"
        type="text"
        placeholder="Buscar"
        defaultValue={search}
        className="h-full text-md w-full border-none outline-none"
      />
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer relative">
        {isPending ? (
          <Spinner />
        ) : (
          <SearchIcon className="text-[#919191] w-[18px] h-[18px]" />
        )}
      </button>
    </form>
  );
};
