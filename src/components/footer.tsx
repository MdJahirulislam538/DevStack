

const Footer = () => {
    return (
        <footer id="contact" className="border-t border-slate-100">
            <div className="mx-auto max-w-[1080px] px-5 lg:px-0">
            <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
                <div>
                <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[11px] font-extrabold text-white">DS</span>
                    <span className="text-[17px] font-extrabold">Dev <span className="text-pink-600">Stack</span></span>
                </div>
                <p className="mt-4 max-w-xs text-xs leading-5 text-slate-400">Curated tools, technologies, and resources for developers building modern software.</p>
                <div className="mt-5 flex gap-4 text-xs font-medium text-slate-600"><a href="#">GitHub</a><a href="#">Twitter</a><a href="#">LinkedIn</a></div>
                </div>
                <div><h4 className="text-[11px] font-bold uppercase tracking-wider">Product</h4><div className="mt-4 space-y-3 text-xs text-slate-400"><a className="block hover:text-slate-700" href="#home">Home</a><a className="block hover:text-slate-700" href="#technologies">Technologies</a><a className="block hover:text-slate-700" href="#projects">Projects</a></div></div>
                <div><h4 className="text-[11px] font-bold uppercase tracking-wider">Company</h4><div className="mt-4 space-y-3 text-xs text-slate-400"><a className="block" href="#about">About</a><a className="block" href="#contact">Contact</a><a className="block" href="#">Careers</a></div></div>
                <div><h4 className="text-[11px] font-bold uppercase tracking-wider">Legal</h4><div className="mt-4 space-y-3 text-xs text-slate-400"><a className="block" href="#">Privacy Policy</a><a className="block" href="#">Terms of Service</a></div></div>
            </div>
            <div className="flex flex-col gap-3 border-t border-slate-100 py-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <span>© 2026 Dev Stack. All rights reserved.</span>
                <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;