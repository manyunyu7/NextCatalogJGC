// pages/index.js

import Slider from "@/components/Carousel";
import ContentSection from "@/components/Content";
import Footer from "@/components/Footer";
import HeaderWeb from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";


export default function Home() {

  const properties = [
    {
      "category": "Apartemen",
      "price": 1200000000,
      "harga": 1200000000,
      "luas": 23,
      "promo_image": "img/promo.png",
      "images": [
        "img/cleon/Cleon2.png",
        "img/cleon/Cleon1.png"
      ],
      "title": "Cleon Park - Studio",
      "link": "page1.html",
      "details": [
        {
          "label": "Apartemen"
        },
        {
          "label": "LB: 23 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/surface 4.png",
          "value": "0"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "1"
        },
        {
          "icon": "img/stair 2.png",
          "value": "1-10"
        },
        {
          "icon": "img/sofa_svgrepo.com.png",
          "value": "1"
        },
        {
          "icon": "img/refrigerator_svgrepo.com.png",
          "value": "1"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 1.200.000.000"
    },
    {
      "category": "Perumahan",
      "price": 2100000000,
      "harga": 2100000000,
      "luas": 63,
      "promo_image": "img/promo.png",
      "images": [
        "img/shinano/Shinano1.png",
        "img/shinano/Shinano2.png",
        "img/shinano/Shinano3.png"
      ],
      "title": "Shinano - L6 Mezanine",
      "link": "page1.html",
      "details": [
        {
          "label": "Perumahan"
        },
        {
          "label": "LT: 90 m²"
        },
        {
          "label": "LB: 63 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/surface 4.png",
          "value": "3 + 1"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "3 + 1"
        },
        {
          "icon": "img/stair 2.png",
          "value": "2"
        },
        {
          "icon": "img/sofa_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/refrigerator_svgrepo.com.png",
          "value": "1"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 2.100.000.000"
    },
    {
      "category": "Komersil",
      "price": 8000000000,
      "harga": 8000000000,
      "luas": 426,
      "promo_image": "img/promo.png",
      "images": [
        "img/new_east/neweast1.jpg",
        "img/new_east/neweast2.jpg",
        "img/new_east/neweast3.jpg"
      ],
      "title": "New East - L6",
      "link": "page1.html",
      "details": [
        {
          "label": "Komersil"
        },
        {
          "label": "LT: 118 m²"
        },
        {
          "label": "LB: 426 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/door-open_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/stair 2.png",
          "value": "3"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 8.000.000.000"
    },
    {
      "category": "Apartemen",
      "price": 1200000000,
      "harga": 1200000000,
      "luas": 23,
      "promo_image": "img/promo.png",
      "images": [
        "img/cleon/Cleon2.png",
        "img/cleon/Cleon1.png"
      ],
      "title": "Cleon Park - Studio",
      "link": "page1.html",
      "details": [
        {
          "label": "Apartemen"
        },
        {
          "label": "LB: 23 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/surface 4.png",
          "value": "0"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "1"
        },
        {
          "icon": "img/stair 2.png",
          "value": "1-10"
        },
        {
          "icon": "img/sofa_svgrepo.com.png",
          "value": "1"
        },
        {
          "icon": "img/refrigerator_svgrepo.com.png",
          "value": "1"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 1.200.000.000"
    },
    {
      "category": "Perumahan",
      "price": 2100000000,
      "harga": 2100000000,
      "luas": 63,
      "promo_image": "img/promo.png",
      "images": [
        "img/shinano/Shinano1.png",
        "img/shinano/Shinano2.png",
        "img/shinano/Shinano3.png"
      ],
      "title": "Shinano - L6 Mezanine",
      "link": "page1.html",
      "details": [
        {
          "label": "Perumahan"
        },
        {
          "label": "LT: 90 m²"
        },
        {
          "label": "LB: 63 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/surface 4.png",
          "value": "3 + 1"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "3 + 1"
        },
        {
          "icon": "img/stair 2.png",
          "value": "2"
        },
        {
          "icon": "img/sofa_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/refrigerator_svgrepo.com.png",
          "value": "1"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 2.100.000.000"
    },
    {
      "category": "Komersil",
      "price": 8000000000,
      "harga": 8000000000,
      "luas": 426,
      "promo_image": "img/promo.png",
      "images": [
        "img/new_east/neweast1.jpg",
        "img/new_east/neweast2.jpg",
        "img/new_east/neweast3.jpg"
      ],
      "title": "New East - L6",
      "link": "page1.html",
      "details": [
        {
          "label": "Komersil"
        },
        {
          "label": "LT: 118 m²"
        },
        {
          "label": "LB: 426 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/door-open_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/stair 2.png",
          "value": "3"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 8.000.000.000"
    },
    {
      "category": "Komersil",
      "price": 1500000000,
      "harga": 1500000000,
      "luas": 91,
      "promo_image": "img/promo.png",
      "images": [
        "img/boulevard/boulevard1.jpg",
        "img/boulevard/boulevard2.jpg"
      ],
      "title": "The Boulevard",
      "link": "page1.html",
      "details": [
        {
          "label": "Komersil"
        },
        {
          "label": "LT: 75 m²"
        },
        {
          "label": "LB: 91 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/door-open_svgrepo.com.png",
          "value": "1"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "1"
        },
        {
          "icon": "img/stair 2.png",
          "value": "2"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 1.500.000.000"
    },
    {
      "category": "Perumahan",
      "price": 1800000000,
      "harga": 1800000000,
      "luas": 63,
      "promo_image": "img/promo.png",
      "images": [
        "img/la_seine/laseine1.png",
        "img/la_seine/laseine2.png",
        "img/la_seine/laseine3.png"
      ],
      "title": "La Seine - L6",
      "link": "page1.html",
      "details": [
        {
          "label": "Perumahan"
        },
        {
          "label": "LT: 90 m²"
        },
        {
          "label": "LB: 63 m²"
        }
      ],
      "property_details": [
        {
          "icon": "img/surface 4.png",
          "value": "2 + 1"
        },
        {
          "icon": "img/bath_svgrepo.com.png",
          "value": "2 + 1"
        },
        {
          "icon": "img/stair 2.png",
          "value": "2"
        },
        {
          "icon": "img/sofa_svgrepo.com.png",
          "value": "2"
        },
        {
          "icon": "img/refrigerator_svgrepo.com.png",
          "value": "1"
        }
      ],
      "price_label": "Mulai dari",
      "price_value": "Rp 1.800.000.000"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeaderWeb />
      <Slider />
      <ContentSection />

      
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
