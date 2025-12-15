import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="sm:w-xl p-4 m-auto">
      <Outlet />
    </main>
  );
}
