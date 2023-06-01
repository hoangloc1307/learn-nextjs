async function getData() {
  const res = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Analytics Page");
    }, 1000);
  });

  return res;
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="bg-red-500 h-full flex justify-center items-center">
      {data}
    </div>
  );
}
