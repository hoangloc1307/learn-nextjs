import Link from "next/link";

async function getData() {
  const res = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Website Home Page");
    }, 1000);
  });

  return res;
}

export default async function Page() {
  const data = getData();
  return (
    <section>
      <h1>{data}</h1>
      <div className="flex gap-5 flex-wrap">
        <Link href="/admin">Go to admin</Link>
        <Link href="/blog">Go to blog</Link>
      </div>
    </section>
  );
}
