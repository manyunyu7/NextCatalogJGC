import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full mt-12 bg-white">
      {/* Wrapper for background */}
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/img/Background.jpg"
          alt="Background Image"
          layout="fill"
        />
        <Image
          className="absolute w-full h-[96.50px] bottom-[75px] mt-6"
          src="/img/Pita.png"
          alt="Bottom Overlay"
          width={1920}
          height={96.5}
        />
      </div>

      {/* Footer content */}
      <div className="relative z-10 w-full bg-transparent">
        <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <Image
              src="/img/jgc.png"
              alt="Logo Jakarta Garden City"
              width={220}
              height={136}
            />
          </div>

          {/* Hubungi Kami */}
          <div>
            <h3 className="font-poppins text-[#05864d] text-[21.11px] leading-[29.56px] font-semibold mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/hubungi/alamat.png"
                  alt="alamat"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-normal text-[14.08px] leading-[22.52px]">
                  Jl. Raya Cakung Clincing Km 0.5
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/hubungi/call.png"
                  alt="call"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-normal text-[14.08px] leading-[22.52px]">
                  (021) 4683 8888
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/hubungi/whatsapp.png"
                  alt="whatsapp"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-normal text-[14.08px] leading-[22.52px]">
                  0813 8888 4446
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/hubungi/mail.png"
                  alt="mail"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-normal text-[14.08px] leading-[22.52px]">
                  Sales.jgc@modernland.co.id
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-poppins text-[#05864d] text-[21.11px] leading-[29.56px] font-semibold mb-4">
              Social Media
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/socmed/facebook_footer.png"
                  alt="fb"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-poppins font-normal text-[14.08px] leading-[22.52px]">
                  Jakarta Garden City
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/socmed/ig_footer.png"
                  alt="ig"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-poppins font-normal text-[14.08px] leading-[22.52px]">
                  @jakartagardencity
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/socmed/tk_footer.png"
                  alt="tk"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-poppins font-normal text-[14.08px] leading-[22.52px]">
                  @official_jgc
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/img/socmed/yt_footer.png"
                  alt="yt"
                  width={20}
                  height={20}
                />
                <span className="text-[#545454] font-poppins font-normal text-[14.08px] leading-[22.52px]">
                  jakartagardencityofficial
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 mx-20">
          <div className="text-center text-[14.08px] leading-[22.52px] font-poppins font-normal text-[#8a8a8a]">
            <p>&copy; Jakarta Garden City 2025 | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
