"use client";

import React from "react";
import { TotalInfo } from "./total-page";
import { ChangePage } from "./change-page";
import { GoToNextPage } from "./next-page";
import { GetUsersResponseDto } from "@/app/api/users/dto";
import { useSearchParams, usePathname } from "next/navigation";

type Props = {
  pagination: GetUsersResponseDto["pagination"];
};

export const Pagination = ({ pagination }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const { totalPages } = pagination;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));

    return `${pathname}?${params.toString()}`;
  };

  const validatedCurrentPage = Math.max(
    1,
    Math.min(currentPage, totalPages || 1)
  );

  return (
    <div className="flex gap-4 relative justify-between items-center">
      <TotalInfo total={pagination.totalItems} />
      <ChangePage
        totalPages={totalPages}
        generatePageUrl={createPageURL}
        currentPage={validatedCurrentPage}
      />
      <GoToNextPage
        totalPages={totalPages}
        generatePageUrl={createPageURL}
        currentPage={validatedCurrentPage}
      />
    </div>
  );
};
