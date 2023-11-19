const Navbar = () => {
    return (
        <nav className="bg-black bg-opacity-80 sticky top-0 z-50 shadow-lg py-2">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
                <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tracks</a>
                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Prizes</a>
                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Timeline</a>
                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sponsors</a>
                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQs</a>
                </div>
                <div className="mlh-badge">
                    <img src="/mlhbadge.svg" alt="MLH Badge" className="h-28 w-20" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;