"use server";

import { redirect } from "next/navigation";

export async function submit(formData: FormData) {
  const search = formData.get("q") as string;
  // Redirects to the current path with the added query parameter
  redirect(`?q=queijo`);
}