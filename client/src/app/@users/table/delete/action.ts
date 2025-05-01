"use server";

import { revalidateTag } from "next/cache";

export async function deleteUserAction(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/v1/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete user: ${response.statusText}`);
  }

  const deletedUser = await response.json();
  revalidateTag('users-list')
  return deletedUser;
}
