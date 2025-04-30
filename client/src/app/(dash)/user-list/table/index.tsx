import { cn } from "@/lib/utils";
import { Delete } from "./delete";
import { GetUsersResponseDto } from "@/app/api/users/dto";

type Props = {
  data: GetUsersResponseDto[];
}
export const Table = ({ data }: Props) => {
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
            <th className="py-3 px-2 font-bold w-[30px]" />
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr
              key={user.id}
              className="mb-4 border-b hover:bg-ui-accent text-nowrap">
              <td className="py-6 px-2 ">{user.id.split('-')[0]}</td>
              <td className="py-6 px-2 truncate max-w-[150px]" title={user.name}>
                {user.name}
              </td>
              <td className="py-6 px-2 truncate max-w-[200px]">{user.email}</td>
              <td className="py-6 px-2 truncate max-w-[150px]" title={user.city}>
                {user.city}
              </td>
              <td className="py-6 px-2 truncate max-w-[150px]" title={user.days_of_week}>
                {user.days_of_week}
              </td>
              <td className="py-6 px-2">{user.posts}</td>
              <td className="py-6 px-2">{user.albums}</td>
              <Delete />
              <td className="py-6 px-2" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
