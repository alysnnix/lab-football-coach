import { cn } from "@/lib/utils";
import { Delete } from "./delete";

const users = [
  {
    id: 1,
    user: "Sonya64",
    nome: "Mildred Turner",
    email: "Loraine25@hotmail.com",
    cidade: "Abraham",
    dias: "Todos",
    posts: "3",
    albuns: "2",
  },
  {
    id: 2,
    user: "selena89",
    nome: "Troy Boehm",
    email: "Agnes_Lang@hotmail.com",
    cidade: "Bahringerbury",
    dias: "Fim de semana",
    posts: "3",
    albuns: "2",
  },
  {
    id: 3,
    user: "Sonya64",
    nome: "Mildred Turner",
    email: "Loraine25@hotmail.com",
    cidade: "Abraham",
    dias: "Todos",
    posts: "3",
    albuns: "2",
  },
];

export const Table = () => {
  return (
    <div className={cn("dash-table overflow-x-auto overflow-y-hidden")}>
      <table className="w-full sm:text-left rounded-sm">
        <thead className="border-t border-b">
          <tr className="text-xs uppercase text-ui-gray-50 text-nowrap">
            <th className="py-3 px-2 font-bold">User</th>
            <th className="py-3 px-2 font-bold">Nome</th>
            <th className="py-3 px-2 font-bold">Email</th>
            <th className="py-3 px-2 font-bold">Cidade</th>
            <th className="py-3 px-2 font-bold">Dias da Semana</th>
            <th className="py-3 px-2 font-bold">Posts</th>
            <th className="py-3 px-2 font-bold">Albuns</th>
            <th className="py-3 px-2 font-bold w-[30px]" />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="mb-4 border-b hover:bg-ui-accent text-nowrap">
              <td className="py-6 px-2 ">{user.user}</td>
              <td className="py-6 px-2">{user.nome}</td>
              <td className="py-6 px-2">{user.email}</td>
              <td className="py-6 px-2">{user.cidade}</td>
              <td className="py-6 px-2">{user.dias}</td>
              <td className="py-6 px-2">{user.posts}</td>
              <td className="py-6 px-2">{user.albuns}</td>
              <td data-action="delete" className="py-6 ">
                <Delete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
