export default function Header() {
    return (
        <header className="top-0 z-50 sticky flex justify-between items-center bg-gray-900/70 shadow-sm backdrop-blur-sm mb-4 px-8 rounded-xl w-full h-16">
            <h1 className="flex justify-center items-center font-logo text-white text-3xl">
                {"dc:ode{}"}
            </h1>

            <nav>
                <ul className="flex gap-8">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Portfolio</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
