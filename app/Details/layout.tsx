import SearchUser from "@/component/SearchUser";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
         <main>{children}</main>
    )
}