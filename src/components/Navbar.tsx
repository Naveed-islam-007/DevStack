import Logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Technologies</a></li>
        <li><a>Projects</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl gap-2 normal-case">
      <img src={Logo}></img>
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
      <li><a className="text-pink-600 font-medium">Home</a></li>
      <li><a>Technologies</a></li>
      <li><a>Projects</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>

  <div className="navbar-end gap-2">
    <a className="btn btn-ghost">Sign In</a>
    <a className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-6">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;