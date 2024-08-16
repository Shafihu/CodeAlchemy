import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
          pauseOnHover
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              {img && (
                <Image
                  src={img}
                  alt={name}
                  className="md:w-10 w-5"
                  width={40}
                  height={20}
                />
              )}
              <Image
                src={nameImg}
                alt={name}
                className="md:w-24 w-20"
                width={80}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
