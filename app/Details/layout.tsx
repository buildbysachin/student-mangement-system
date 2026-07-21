import SearchUser from "@/component/SearchUser";
import { Suspense } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchUser />
            </Suspense>
            {children}
        </main>
    )
}