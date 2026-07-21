import SearchUser from "@/component/SearchUser";

export default function DashboardLayout({ children }:any) {
    return (
        <main>
            <SearchUser/>
            {children}
        </main>
    )
}