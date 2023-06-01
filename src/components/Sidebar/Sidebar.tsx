import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 flex-shrink-0 bg-blue-500 flex flex-col justify-center items-center">
      <div>Sidebar</div>
      <ul className="mt-10">
        <li>
          <Link className="underline" href="/admin">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="underline" href="/admin/user">
            User
          </Link>
        </li>
        <li>
          <Link className="underline" href="/">
            Website
          </Link>
        </li>
      </ul>
    </aside>
  );
}
