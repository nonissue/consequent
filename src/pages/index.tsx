import type { NextPage } from "next/types";
import Link from "next/link";
import { ExternalLinkIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { getLayout } from "src/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="text-base leading-relaxed sm:leading-relaxed divide-dotted divide-y divide-radix-gray7 text-gray-600 dark:text-gray-300">
        {/* <div className="mb-2 font-mono text-xl sm:text-3xl tracking-widest font-normal not-italic uppercase  text-center">
          Consequent
        </div> */}
        <h5 className="text-gray-700 dark:text-gray-200 mb-8 sm:mb-12 text-4xl sm:text-5xl tracking-tight italic font-black">
          Next.js Starter
        </h5>
        <p className="py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo.
        </p>
        {/* <br /> */}
        <p className="py-8">
          Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at
          elementum eu. Urna duis convallis convallis tellus. Urna molestie at
          elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
        </p>
        <p className="py-8">
          Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
          suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
          risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
          urna molestie at elementum eu. Urna duis convallis convallis tellus.
          Urna molestie at elementum eu. Nunc sed blandit libero volutpat. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
          pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
          molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel
          turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </p>
        <p className="p-2 sm:p-3 mx-auto mt-10 max-w-sm text-center rounded-sm border border-radix-gray5 shadow-sm">
          <Link href="/docs">
            <a className="text-base sm:text-lg font-bold text-radix-gray12 hover:text-radix-red10 transition-colors duration-200">
              Start with Docs
            </a>
          </Link>
          <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
        </p>
        <p className="p-2 sm:p-3 mx-auto mt-2 mb-8 max-w-sm text-center rounded-sm border border-radix-gray5 shadow-sm">
          <Link href="https://github.com/nonissue/consequent">
            <a className="text-base sm:text-lg font-bold hover:text-radix-red10 transition-colors duration-200">
              View on Github
            </a>
          </Link>
          <ExternalLinkIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
        </p>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
