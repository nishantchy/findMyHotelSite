"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ hotel }) => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-gray-100">
      <div className="max-w-[1240px] mx-auto w-full px-4">
        <h1 className="text-subtitle text-center text-primary my-[60px] font-semibold">
          Gallery
        </h1>
        <div className="flex justify-center flex-wrap items-center gap-4">
          {hotel.images.map((src, i) => (
            <div key={i} className="aspect-w-1 aspect-h-1 cursor-pointer">
              <Image
                src={`https://findmyhotelbackend-production.up.railway.app/${src}`}
                alt={`Gallery image ${i + 1}`}
                width={300}
                height={300}
                objectFit="cover"
                className="rounded-lg hover:opacity-75 transition-opacity"
                onClick={() => setIndex(i)}
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={hotel.images.map((src) => ({
          src: `https://findmyhotelbackend-production.up.railway.app/${src}`,
        }))}
      />
    </section>
  );
};

export default Gallery;
