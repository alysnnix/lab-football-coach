export async function GET(req: Request) {
  console.log(req)
  const response = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const users = await response.json();
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}
