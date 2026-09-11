

const Header = () => {
    return (
        <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-50">
            <div className="mx-auto flex h-[68px] max-w-[1080px] items-center justify-between px-5 lg:px-0">
            <a href="#" className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[11px] font-extrabold text-white shadow-sm">DS</span>
                <span className="text-[17px] font-extrabold tracking-tight">Dev <span className="text-pink-600">Stack</span></span>
            </a>

            <nav className="hidden items-center gap-8 text-[13px] font-medium text-slate-500 md:flex">
                <a className="text-pink-600" href="#home">Home</a>
                <a className="hover:text-slate-900" href="#technologies">Technologies</a>
                <a className="hover:text-slate-900" href="#projects">Projects</a>
                <a className="hover:text-slate-900" href="#about">About</a>
                <a className="hover:text-slate-900" href="#contact">Contact</a>
            </nav>

            <div className="hidden items-center gap-5 text-[13px] font-medium md:flex">
                <a href="#" className="text-slate-500 hover:text-slate-900">Sign In</a>
                <a href="#" className="rounded-full bg-pink-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-pink-700">Sign Up</a>
            </div>

            <button id="menuBtn" className="rounded-lg p-2 text-slate-700 md:hidden" aria-label="Open menu">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
            </div>
            <div id="mobileMenu" className="hidden border-t border-slate-100 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                <a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#projects">Projects</a>
                <a href="#about">About</a><a href="#contact">Contact</a>
                <div className="flex gap-3 pt-1"><a href="#">Sign In</a><a href="#" className="font-semibold text-pink-600">Sign Up</a></div>
            </div>
            </div>
        </header>
    );
};

export default Header;