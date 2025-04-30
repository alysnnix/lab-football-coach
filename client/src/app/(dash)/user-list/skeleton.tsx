import { Skeleton } from "@/components/ui/skeleton";

export const UserListSkeleton = () => {
  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">Usuarios</h2>
      <Skeleton className="h-[40px]" />
      <Skeleton className="h-[300px]" />
      <div className="flex w-full justify-between items-center">
        <Skeleton className="w-[100px] h-[40px]" />
        <Skeleton className="w-[400px] h-[40px]" />
        <Skeleton className="w-[100px] h-[40px]" />
      </div>
    </div>
  );
};
