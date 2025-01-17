// components/Navbar.js
const Navbar = () => {
    return (
      <nav className="bg-jgc sticky top-0 z-50" style={{ backgroundColor: '#4D915D' }}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/img/jgc-logo.png" alt="" className="w-[115px] h-[115px] top-[-11px] left-[108px]" />
          </div>
          <div className="flex">
            <a href=""><img src="/img/fb.png" alt="" className="w-[21.11px] h-[21.11px] mr-8" /></a>
            <a href=""><img src="/img/ig.png" alt="" className="w-[21.11px] h-[21.11px] mr-8" /></a>
            <a href=""><img src="/img/yt.png" alt="" className="w-[21.11px] h-[21.11px] mr-8" /></a>
            <a href=""><img src="/img/tiktok.png" alt="" className="w-[21.11px] h-[21.11px]" /></a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;