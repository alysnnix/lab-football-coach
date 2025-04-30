import {Suspense} from "react";
import {StatusBar} from "./status-bar";
import {UserList} from "./user-list";
import {UserListSkeleton} from "./user-list/skeleton";

export default function Home() {
  return (
    <main className="bg-slate-200">
      <StatusBar />

      <Suspense fallback={<UserListSkeleton />}>
        <UserList />
      </Suspense>
    </main>
  );
}
