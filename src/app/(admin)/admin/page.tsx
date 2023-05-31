async function getData() {
  const res = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Admin Page");
    }, 1000);
  });

  return res;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="bg-green-500 flex items-center justify-center flex-grow">
      {data}
    </div>
  );
}
