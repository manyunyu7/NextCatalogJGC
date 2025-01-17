// pages/index.js

import Slider from "@/components/Carousel";
import ContentSection from "@/components/Content";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeaderWeb from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeaderWeb />
      <div className="w-full max-h-[20%] sm:max-h-[30%] lg:max-h-[30%]">
        <Slider />
      </div>
      <ContentSection />

      <Gallery></Gallery>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div className="flex justify-center" key={index}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div> */}

      <Footer />
    </div>
  )
}
