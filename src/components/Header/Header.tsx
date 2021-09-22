import Link from "next/link";
import { HeaderLink, ThemeChanger } from "@/components";

// import SiteConfig from "@/data/site.config.json";

const Header = () => {
  return (
    <div className="z-10 relative shadow-sm">
      <div className="relative z-20 inset-0">
        <div className="max-w-3xl mx-auto flex px-6 py-2 sm:px-6 lg:px-8 lg:py-2 inset-0 ">
          <div className="relative flex items-center space-between w-full">
            <div className="flex-grow font-display uppercase text-md sm:text-xl md:text-xl text-almostblack dark:text-gray-50">
              <Link href="/">
                <a className="tracking-normal">
                  <span className="font-bold">consequent</span>
                </a>
              </Link>
            </div>
            <HeaderLink href="#" title="Projects" />
            <span className="text-sm sm:text-lg font-light opacity-30">
              &nbsp;&nbsp;&nbsp;
            </span>
            {/* <HeaderLink href="/contact" title="Contact" /> */}
            <HeaderLink href="/about" title="About" /> &nbsp;
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
