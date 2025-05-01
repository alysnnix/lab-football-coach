"use client"; // Add this directive if using Next.js App Router

import { GetUsersResponseDto } from "@/app/api/users/dto"; // Assuming this path is correct
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useMemo, useTransition } from "react";

const DOTS = "...";

const generatePaginationRange = (
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): (number | string)[] => {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);

    return [...leftRange, DOTS, totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1);
};

type PageSelectorProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PageSelector = ({
  totalPages,
  currentPage,
  onPageChange,
}: PageSelectorProps) => {
  const handleValueChange = (value: string) => {
    const page = parseInt(value, 10);
    if (!isNaN(page)) {
      onPageChange(page);
    }
  };

  return (
    <Select value={String(currentPage)} onValueChange={handleValueChange}>
      <SelectTrigger className="shadow-none border-b-2 border-ui-gray-medium-light rounded-none w-[60px]">
        <SelectValue placeholder={String(currentPage)} />
      </SelectTrigger>
      <SelectContent position="item-aligned">
        <SelectGroup>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <SelectItem key={page} value={String(page)}>
              {page}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

type ChangePageProps = {
  currentPage: number;
  totalPages: number;
  generatePageUrl: (page: number) => string;
};

const ChangePage = ({
  currentPage,
  totalPages,
  generatePageUrl,
}: ChangePageProps) => {
  const paginationRange = useMemo(
    () => generatePaginationRange(currentPage, totalPages),
    [currentPage, totalPages]
  );

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={generatePageUrl(currentPage - 1)}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <PaginationEllipsis key={DOTS + index} />;
          }

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={generatePageUrl(pageNumber as number)}
                isActive={currentPage === pageNumber}
                firstItem={pageNumber === 1}
                lastItem={pageNumber === totalPages}
                preActive={pageNumber === currentPage - 1}
                afterActive={pageNumber === currentPage + 1}
                aria-current={currentPage === pageNumber ? "page" : undefined}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={generatePageUrl(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
};

type TotalInfoProps = {
  total: number;
};
const TotalInfo = ({ total }: TotalInfoProps) => {
  return (
    <span className="text-xs uppercase text-nowrap text-ui-gray-medium font-medium">
      Total: {total}
    </span>
  );
};

type GoToNextPageProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
const GoToNextPage = ({
  totalPages,
  currentPage,
  onPageChange,
}: GoToNextPageProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="grid grid-cols-[auto_min-content] gap-2 items-center">
      <span className="text-xs uppercase text-ui-gray-medium font-medium text-right">
        Ir para a página
      </span>
      <PageSelector
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

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
