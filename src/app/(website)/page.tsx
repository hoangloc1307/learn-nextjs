import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Website Home Page</h1>
      <Link href="/admin">Go to admin</Link>
    </div>
  );
}
