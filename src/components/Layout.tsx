export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-start items-center bg-main p-4 min-h-screen text-white">
            {children}
        </div>
    );
}
