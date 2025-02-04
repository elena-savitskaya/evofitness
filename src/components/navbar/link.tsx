import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type NavbarLinkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled?: (value: boolean) => void;
};

export const NavbarLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: NavbarLinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);

        if (setIsMenuToggled) {
          setIsMenuToggled(false);
        }
      }}
    >
      {page}
    </AnchorLink>
  );
};
