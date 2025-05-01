"use client";

import React from "react";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteUserAction } from "./action";

type Props = {
  id: string;
};

export const Delete = ({ id }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => {
      deleteUserAction(id);
      setOpen(false);
    });
  };

  return (
    <td data-action="delete" className="py-6 opacity-0 overflow-hidden">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative inset-0 flex items-center justify-center hover:*:text-red-700 cursor-pointer w-[30px] h-[30px] active:scale-90"
            aria-label={`Excluir usuário ${id}`}>
            <Trash size={18} />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
              <DialogDescription>
                Esta ação não pode ser desfeita. O usuário com ID{" "}
                <strong>{id}</strong> será permanentemente removido.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                type="submit"
                variant="destructive"
                disabled={isPending}
                className="px-3">
                {isPending ? (
                  "Excluindo..."
                ) : (
                  <>
                    <Trash className="mr-2 h-4 w-4" />
                    Confirmar Exclusão
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </td>
  );
};
