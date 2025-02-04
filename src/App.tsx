import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Navbar } from "./components/navbar/navbar";
import { HomePage } from "./components/home/home";
import { BenefitsPage } from "./components/benefits/benefits";
import { OurClassesPage } from "./components/our-classes/our-classes";
import { ContactUsPage } from "./components/contact-us/contact-us";
import { Footer } from "./components/footer/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomePage setSelectedPage={setSelectedPage} />
      <BenefitsPage setSelectedPage={setSelectedPage} />
      <OurClassesPage setSelectedPage={setSelectedPage} />
      <ContactUsPage setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
