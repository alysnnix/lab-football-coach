import { Table } from "./table";
import { Search } from "./search";
import { Pagination } from "./pagination";
import { NotUserFound } from "./not-found";
import { GetUsersResponseDto } from "@/app/api/users/dto";

interface UserListProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const Page = async ({ searchParams }: UserListProps) => {
  const limit = (await searchParams).limit;
  const page = (await searchParams).page;

  const data: GetUsersResponseDto = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/users?page=${page}&limit=${limit}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error fetching users:", err);
    });


  if (!data) {
    return <NotUserFound />;
  }

  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Search />
      <Table data={data} />
      <Pagination />
    </div>
  );
};

export default Page;
