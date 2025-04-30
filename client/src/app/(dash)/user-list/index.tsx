import { SearchIcon, Trash } from "lucide-react";

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

const DeleteBtn = () => {
  return (
    <button className="hover:*:text-red-900 active:scale-90 hover:scale-110">
      <Trash />
    </button>
  );
};

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full sm:text-left rounded-sm">
        <thead className="border-t border-b">
          <tr className="text-xs uppercase text-ui-gray-50 text-nowrap">
            <th className="py-3 font-bold">User</th>
            <th className="py-3 font-bold">Nome</th>
            <th className="py-3 font-bold">Email</th>
            <th className="py-3 font-bold">Cidade</th>
            <th className="py-3 font-bold">Dias da Semana</th>
            <th className="py-3 font-bold">Posts</th>
            <th className="py-3 font-bold">Albuns</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-ui-gray-medium-light">
            <td className="py-6">user_data</td>
            <td className="py-6">nome_data</td>
            <td className="py-6">email_data</td>
            <td className="py-6">cidade_data</td>
            <td className="py-6">dias_data</td>
            <td className="py-6">posts_data</td>
            <td className="py-6">albuns_data</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const UserList = () => {
  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Search />
      <Table />
      <DeleteBtn />
    </div>
  );
};
