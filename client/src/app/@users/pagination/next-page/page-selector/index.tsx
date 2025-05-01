import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

export type PageSelectorProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const PageSelector = ({
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
