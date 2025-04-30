import { Table } from "./table";
import { Search } from "./search";
import { Pagination } from "./pagination";
import { NotUserFound } from "./not-found";
import { GetUsersResponseDto } from "@/app/api/users/dto";
import { bff } from "@/service/bff";

interface UserListProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const Page = async ({ searchParams }: UserListProps) => {
  const search = (await searchParams).q;
  const page = (await searchParams).page || 1;

  const users = await bff
    .get<GetUsersResponseDto>(`/api/users`, {
      params: {
        q: search,
        page: page,
        limit: 5,
      },
    })
    .then((res) => res.data)
    .catch(() => null);

  if (!users) {
    return <NotUserFound />;
  }

  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Search />
      <Table users={users} />
      <Pagination pagination={users.pagination} />
    </div>
  );
};

export default Page;
