import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10">
      <h2>NotFound Page</h2>
      <Link href="/" className="border border-white px-2 py-1 rounded-full">
        Back to home page
      </Link>
    </div>
  );
}
