import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, GetUsersResponseDto } from "./dto";

const mock = {
  cities: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ],
  daysOfWeek: [
    "Todos",
    "Fim de semana",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
};

const getValue = (length: number) => {
  const randomValue = Math.floor(Math.random() * length);
  return randomValue;
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const search = searchParams.get("q")?.toLowerCase() || "";

  const response = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: "GET",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch users: ${response.statusText}` },
      { status: response.status }
    );
  }

  const usersFromApi: ApiResponse = await response.json();
  let modifiedUsers: GetUsersResponseDto["data"] = usersFromApi?.users.map(
    (user) => {
      const randomCity = mock.cities[getValue(mock.cities.length)];
      const randomDaysOfWeek =
        mock.daysOfWeek[getValue(mock.daysOfWeek.length)];

      return {
        ...user,
        city: randomCity,
        days_of_week: randomDaysOfWeek,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        albums: Math.floor(Math.random() * 50),
        posts: Math.floor(Math.random() * 100),
      };
    }
  );

  if (search) {
    modifiedUsers = modifiedUsers.filter(
      (user) =>
        user.id.toLowerCase().includes(search) ||
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
    );
  }

  const totalItems = modifiedUsers.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = modifiedUsers.slice(startIndex, endIndex);

  const result: GetUsersResponseDto = {
    data: paginatedUsers,
    pagination: {
      totalItems,
      totalPages,
      currentPage: page,
      pageSize: limit,
    },
  };

  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "User ID is required" }, { status: 400 });
  }

  const response = await fetch(`${process.env.API_URL}/api/v1/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to delete user: ${response.statusText}` },
      { status: response.status }
    );
  }

  const deletedUser = await response.json();

  return NextResponse.json(
    { message: "User deleted successfully", user: deletedUser },
    { status: 200 }
  );
}
