import { Table } from "./table";
import { Search } from "./search";
import { Pagination } from "./pagination";

export const UserList = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users")
    .then((res) => res.json());

  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Search />
      <Table />
      <Pagination />
    </div>
  );
};
