// components/Header.js
import Image from 'next/image';

const HeaderWeb = () => {
  return (
    <nav className="bg-[#4D915D] sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/img/jgc-logo.png"
            alt="JGC Logo"
            width={115}
            height={115}
            className="top-[-11px] left-[108px]"
          />
        </div>
        <div className="flex">
          <a href="">
            <Image src="/img/fb.png" alt="Facebook" width={21.11} height={21.11} className="mr-8" />
          </a>
          <a href="">
            <Image src="/img/ig.png" alt="Instagram" width={21.11} height={21.11} className="mr-8" />
          </a>
          <a href="">
            <Image src="/img/yt.png" alt="YouTube" width={21.11} height={21.11} className="mr-8" />
          </a>
          <a href="">
            <Image src="/img/tiktok.png" alt="TikTok" width={21.11} height={21.11} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderWeb;
