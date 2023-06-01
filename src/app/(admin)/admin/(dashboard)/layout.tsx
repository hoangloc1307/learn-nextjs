export default function WebsiteLayout({
  analytics,
  team,
}: {
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-2 h-full">
      <section>{analytics}</section>
      <section>{team}</section>
    </div>
  );
}
