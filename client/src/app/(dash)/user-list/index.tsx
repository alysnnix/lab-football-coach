import { Table } from "./table";
import { SearchIcon } from "lucide-react";

const Search = () => {
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

export const UserList = () => {
  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Search />
      <Table />
    </div>
  );
};
