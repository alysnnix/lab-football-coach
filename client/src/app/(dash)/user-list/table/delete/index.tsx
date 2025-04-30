"use client";

import React from "react";
import styles from "./delete.module.css";

import {cn} from "@/lib/utils";
import {Trash} from "lucide-react";

export const Delete = () => {
  const [, setOpen] = React.useState(false);

  const handleDelete = () => {
    setOpen(false);
  };

  return (
    <div
      className={cn(styles.app, "relative overflow-hidden w-[30px] h-[30px]")}>
      <button
        onClick={handleDelete}
        className="absolute hover:*:text-red-900 cursor-pointer w-fit active:scale-90 hover:scale-110">
        <Trash />
      </button>
    </div>
  );
};
