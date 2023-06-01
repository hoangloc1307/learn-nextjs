import Sidebar from "@/components/Sidebar/Sidebar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen overflow-auto">
      <Sidebar />
      <div className="flex-grow overflow-auto">{children}</div>
    </main>
  );
}
