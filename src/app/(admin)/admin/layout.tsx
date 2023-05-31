import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/globals.css";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex items-stretch">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
