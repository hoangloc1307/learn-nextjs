import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <h2>Team Setting Page</h2>
      <Link className="mt-5" href="/admin">
        Go back
      </Link>
    </div>
  );
}
