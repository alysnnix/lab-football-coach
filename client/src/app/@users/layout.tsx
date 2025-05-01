import { Pagination } from "./pagination";
import { GetUsersResponseDto } from "../api/users/dto";
import { Search } from "./search";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
  children: React.ReactNode;
};

export default async function UsersLayout({ children, searchParams }: Props) {
  const search = searchParams?.q;
  const page = searchParams?.page || 1;
  const limit = 5;

  const queryParams = new URLSearchParams();
  if (search) {
    queryParams.set("q", Array.isArray(search) ? search[0] : search);
  }

  queryParams.set("page", String(page));
  queryParams.set("limit", String(limit));

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL
    }/api/users?${queryParams.toString()}`;

  let users: GetUsersResponseDto | null = null;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["users-list"] },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
    } else {
      users = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }

  if (!users) {
    return (
      <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
        <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
        <p className="text-ui-gray-200">No se encontraron usuarios.</p>
      </div>
    );
  }

  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Search />
      {children}
      <Pagination pagination={users.pagination} />
    </div>
  );
}
