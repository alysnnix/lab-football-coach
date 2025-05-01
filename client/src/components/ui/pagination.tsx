import * as React from "react";
import { MoreHorizontalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Link, { useLinkStatus } from "next/link";
import { Spinner } from "../shared/spinner";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  preActive?: boolean;
  afterActive?: boolean;
  firstItem?: boolean;
  lastItem?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  preActive,
  afterActive,
  size = "icon",
  firstItem,
  lastItem,
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      href={props.href ?? "#"}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size,
        }),
        "active:scale-90 rounded-full border border-ui-gray-medium-light ml-2",
        isActive &&
        "border hover:bg-ui-gray-medium-light/90 hover:text-white border-ui-gray-medium-light bg-ui-gray-medium-light text-white rounded-none",
        preActive && "border border-ui-gray-medium-light rounded-r-none -mr-2",
        afterActive && "border border-ui-gray-medium-light rounded-l-none ml-0",
        firstItem && "rounded-l-full",
        lastItem && "rounded-r-full",
        className
      )}
      {...props}
    >
      {props.children}
      <PendingLink />
    </Link>
  );
}

const PendingLink = () => {
  const { pending } = useLinkStatus();
  if (!pending) return null;

  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-background/50">
      <Spinner className="relative w-5 h-5 *:m-0 *:p-0" />
    </div>
  );
};

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn(
        "gap-1 p-[11px] sm:pl-2.5 rounded-full border active:scale-90 relative",
        className
      )}
      {...props}>
      <span className="hidden sm:block">Anterior</span>
      <PendingLink />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}>
      <span className="hidden sm:block">Próximo</span>
      <PendingLink />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}>
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
