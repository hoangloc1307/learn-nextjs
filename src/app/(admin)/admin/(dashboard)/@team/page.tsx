import Link from "next/link";

async function getData() {
  const res = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Team Page");
    }, 3000);
  });

  return res;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="bg-green-500 h-full flex flex-col justify-center items-center">
      <h2>{data}</h2>
      <Link href="/admin/setting">Go to team setting</Link>
    </div>
  );
}
