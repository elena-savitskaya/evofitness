import { useMediaQuery } from "@/hooks/use-media-query";
import { SelectedPage } from "@/shared/types";
import { ActionButton } from "@/shared/action-button";
import HOME_PAGE_URL from "@/assets/home-page-text.png";
import HOME_PAGE_GRAPHIC_URL from "@/assets/home-page.png";
import SPONSOR_REDBULL_URL from "@/assets/sponsor-red-bull.png";
import SPONSOR_FORBES_URL from "@/assets/sponsor-forbes.png";
import SPONSOR_FORTUNE_URL from "@/assets/sponsor-fortune.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type HomePageProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const HomePage = ({ setSelectedPage }: HomePageProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="bg-gray-20 py-16">
      <motion.div
        className="mx-auto w-5/6 flex flex-col gap-4 items-center justify-center md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 md:basis-3/5 flex flex-col gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HOME_PAGE_URL} />
              </div>
            </div>
            <p className="pt-4 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className="flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:justify-items-end">
          <img alt="home-pageGraphic" src={HOME_PAGE_GRAPHIC_URL} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  alt="redbull-sponsor"
                  src={SPONSOR_REDBULL_URL}
                  className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  alt="forbes-sponsor"
                  src={SPONSOR_FORBES_URL}
                  className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  alt="fortune-sponsor"
                  src={SPONSOR_FORTUNE_URL}
                  className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
