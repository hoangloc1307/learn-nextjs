import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <>
      <Link className="underline" href="/blog">
        Quay lại
      </Link>
      <h1 className="mt-10">My Post #{id}</h1>
    </>
  );
}
