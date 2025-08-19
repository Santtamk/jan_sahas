import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    id: 1,
    image: "/media/gallery/1/IMG_20221209_121911.webp",
    title: "Gallery 1",
  },
  {
    id: 2,
    image: "/media/gallery/2/Awareness Camp with LD Department.webp",
    title: "Gallery 2",
  },
  {
    id: 3,
    image: "/media/gallery/3/Anganwadi session.webp",
    title: "Gallery 3",
  },
];

const Gallery = () => {
  return (
    <div className="py-10 bg-white max-w-[1440px] mx-auto" id="photoGallery">
      <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center py-5">
        Photo Gallery
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {images.map((img, i) => (
          <Link key={img.id} href={`/media/gallery/${img.id}`}>
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={img.image}
                alt={img.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Title overlay */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
