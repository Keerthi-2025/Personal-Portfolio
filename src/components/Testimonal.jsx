import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";

const Testimonal = () => {
  return (
    <section className="bg-(--primary-color)" id="testimonials">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <span className="uppercase text-(--main-color) text-xl tracking-[5px] mb-3 inline-block">
            testimonials
          </span>
          <h2 className="text-(--secondary-color) md:text-5xl text-4xl font-medium">
            What People Say
          </h2>
        </div>
        <div className="flex flex-wrap mt-20">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-(--section-bg) p-8 rounded">
              <FaQuoteRight className="block w-5 h-5 text-(--text-color) mb-4" />
              <p className="leading-relaxed mb-6 text-lg text-(--text-color)">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="user-1"
                  src={user1}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="font-medium text-(--secondary-color)">
                    Holden Caulfield
                  </span>
                  <span className="text-(--text-color) text-sm">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-(--section-bg) p-8 rounded">
              <FaQuoteRight className="block w-5 h-5 text-(--text-color) mb-4" />
              <p className="leading-relaxed mb-6 text-lg text-(--text-color)">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="user-2"
                  src={user2}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-(--secondary-color)">
                    Alper Kamu
                  </span>
                  <span className="text-(--text-color) text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
