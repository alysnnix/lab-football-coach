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
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PageSelector = () => {
  return (
    <Select>
      <SelectTrigger className="shadow-none border-b-2 border-ui-gray-medium-light rounded-none">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent position="item-aligned">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const ChangePage = () => {
  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
};

const TotalInfo = () => {
  return (
    <span className="text-xs uppercase text-nowrap text-ui-gray-medium font-medium">
      Total: 100
    </span>
  );
};

const GoToNextPage = () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center">
      <span className="text-xs uppercase text-ui-gray-medium font-medium">
        Ir para a página
      </span>
      <PageSelector />
    </div>
  );
};

export const Pagination = () => {
  return (
    <div className="flex relative justify-between items-center">
      <TotalInfo />
      <ChangePage />
      <GoToNextPage />
    </div>
  );
};
