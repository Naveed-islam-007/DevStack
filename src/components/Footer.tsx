import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
       <div className="flex justify-evenly container mx-auto pt-4">
    {/* Brand */}
    <div className="max-w-xs">
        <img src={Logo} />
        <p className="mt-3 text-gray-500">
            Curated tools, technologies, and resources for developers building modern software.
        </p>
        <div className="mt-4 flex gap-4 text-gray-600 font-medium">
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
        </div>
    </div>  
        <nav>
            <h6 className="font-semibold text-xs tracking-wide text-gray-900 mb-3">PRODUCT</h6>
            <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Home</a></li>
                <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
                <li><a href="#" className="hover:text-gray-900">Projects</a></li>
            </ul>
        </nav>
        <nav>
            <h6 className="font-semibold text-xs tracking-wide text-gray-900 mb-3">COMPANY</h6>
            <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
        </nav>
        <nav>
            <h6 className="font-semibold text-xs tracking-wide text-gray-900 mb-3">LEGAL</h6>
            <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
        </nav>
    
</div>
    );
};

export default Footer;