import { StatusBar } from "./status-bar";
import { DataTable } from "./user-list";

export default function Home() {
  return (
    <main className="bg-slate-200">
      <StatusBar />
      <DataTable data={[]} />
    </main>
  );
}
