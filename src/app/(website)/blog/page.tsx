import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Blog Page</h1>
      <ul className="mt-5">
        <li>
          <Link href="/blog/1">Blog #1</Link>
        </li>
        <li>
          <Link href="/blog/2">Blog #2</Link>
        </li>
        <li>
          <Link href="/blog/3">Blog #3</Link>
        </li>
      </ul>
      <Link className="underline mt-10 inline-block" href="/">
        Trang chủ
      </Link>
    </>
  );
}
