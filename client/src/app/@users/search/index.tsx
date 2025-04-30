"use client";

import {SearchIcon} from "lucide-react";
import {useQueryState} from "nuqs";

export const Search = () => {
  const [search, setSearch] = useQueryState("q", {defaultValue: ""});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search") as string;
    setSearch(searchValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[40px] flex items-center px-3 bg-ui-accent rounded-t-sm border-b border-ui-gray-medium-light">
      <input
        type="text"
        name="search"
        placeholder="Buscar"
        defaultValue={search}
        className="h-full text-md w-full border-none outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <SearchIcon className="text-[#919191] w-[18px] h-[18px]" />
      </button>
    </form>
  );
};
