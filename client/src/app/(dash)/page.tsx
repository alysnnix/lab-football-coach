import { Suspense } from "react";
import { StatusBar } from "./status-bar";
import { UserList } from "./user-list";

export default function Home() {
  return (
    <main className="bg-slate-200">
      <StatusBar />
      <Suspense fallback={<p>Loading ...</p>}>
        <UserList />
      </Suspense>
    </main>
  );
}
