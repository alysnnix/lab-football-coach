import { StatusBar } from "./status-bar";
import { UserList } from "./user-list";

export default function Home() {
  return (
    <main className="bg-slate-200">
      <StatusBar />
      <UserList />
    </main>
  );
}
