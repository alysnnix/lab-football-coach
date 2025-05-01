"use server";

export async function deleteUser(id: string, formData: FormData) {
  console.log(`Tentando excluir usuário com ID: ${id}`);
  console.log("FormData:", formData);
}
