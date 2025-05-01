import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from "react";
import { generatePaginationRange, DOTS } from "../utils";

type ChangePageProps = {
  currentPage: number;
  totalPages: number;
  generatePageUrl: (page: number) => string;
};

export const ChangePage = ({
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
    <PaginationContainer className="hidden md:flex">
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
