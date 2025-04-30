import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="h-[40px] flex items-center px-3 bg-ui-accent rounded-t-sm border-b border-ui-gray-medium-light">
      <input
        type="text"
        placeholder="Buscar"
        className="h-full text-md w-full border-none outline-none"
      />
      <SearchIcon className="text-[#919191] w-[18px] h-[18px]" />
    </div>
  );
};
