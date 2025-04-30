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

type ApiResponse = {
  users: ResponseDto[];
};

type ResponseDto = {
  id: string;
  name: string;
  email: string;
  city: string;
  days_of_week: string;
  posts: number;
  albums: number;
  created_at: string;
  updated_at: string;
};

const getValue = (length: number) => {
  const randomValue = Math.floor(Math.random() * length);
  return randomValue;
};

export async function GET() {
  const response = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const usersFromApi: ApiResponse = await response.json();
  const users: ResponseDto[] = usersFromApi?.users.map((user: ResponseDto) => {
    const randomCity = mock.cities[getValue(mock.cities.length)];
    const randomDaysOfWeek = mock.daysOfWeek[getValue(mock.daysOfWeek.length)];

    return {
      ...user,
      city: randomCity,
      days_of_week: randomDaysOfWeek,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      albums: Math.floor(Math.random() * 50),
      posts: Math.floor(Math.random() * 100),
    };
  });

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
