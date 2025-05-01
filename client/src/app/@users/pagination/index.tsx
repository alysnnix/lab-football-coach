"use client";

import { GetUsersResponseDto } from "@/app/api/users/dto";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useTransition } from "react";
import { GoToNextPage } from "./next-page";
import { TotalInfo } from "./total-page";
import { ChangePage } from "./change-page";

type Props = {
  pagination: GetUsersResponseDto["pagination"];
};

export const Pagination = ({ pagination }: Props) => {
  const isMobile = useIsMobile();
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const { totalPages } = pagination;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));

    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const url = createPageURL(page);
      startTransition(() => {
        router.push(url, {
          scroll: false,
        });
      });
    }
  };

  const validatedCurrentPage = Math.max(
    1,
    Math.min(currentPage, totalPages || 1)
  );

  if (isMobile) {
    return (
      <div className="flex gap-4 relative justify-between items-center">
        <TotalInfo total={pagination.totalItems} />
        <GoToNextPage
          totalPages={totalPages}
          currentPage={validatedCurrentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-4 relative justify-between items-center",
        isPending && "opacity-50 pointer-none"
      )}>
      <TotalInfo total={pagination.totalItems} />
      <ChangePage
        currentPage={validatedCurrentPage}
        totalPages={totalPages}
        generatePageUrl={createPageURL}
      />
      <GoToNextPage
        totalPages={totalPages}
        currentPage={validatedCurrentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
