import type { NextPage } from "next/types";
import Link from "next/link";
import { ExternalLinkIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { getLayout } from "src/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="text-base leading-relaxed sm:leading-relaxed divide-dashed divide-y divide-radix-gray7 text-gray-600 dark:text-gray-300">
        <h5 className="text-bluegray-900 dark:text-bluegray-100 mb-8 sm:mb-12 text-4xl sm:text-5xl tracking-tight font-black">
          A Next.js Starter
        </h5>
        <p className="py-8 italic text-radix-gray12 px-2 text-center sm:text-left sm:px-0 text-xl tracking-tight leading-relaxed sm:text-4xl sm:leading-relaxed">
          Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum
          nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel
          pharetra vel turpis nunc. Malesuada nunc vel risus commodo.
        </p>
        <div>
          <div className="mx-auto sm:space-x-4 text-2xl flex flex-col sm:flex-row justify-between py-6">
            <p className="p-4  sm:w-1/2 mb-3 sm:mb-0 text-center rounded-md border-2 border-radix-gray5 shadow-sm">
              <Link href="/docs">
                <a className="font-bold text-radix-gray12 hover:text-radix-gray11 transition-colors duration-100">
                  Get Started
                </a>
              </Link>
              <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
            </p>
            <p className="p-4 sm:w-1/2  text-center rounded-md border-2 border-radix-gray6 shadow-sm">
              <Link href="https://github.com/nonissue/consequent">
                <a className="font-bold text-radix-gray12 hover:text-radix-gray11 transition-colors duration-100">
                  View on Github
                </a>
              </Link>
              <ExternalLinkIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
            </p>
          </div>
        </div>
        {/* <br /> */}
        <p className="py-8">
          Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at
          elementum eu. Urna duis convallis convallis tellus. Urna molestie at
          elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
        </p>
        <div className="sm:flex sm:flex-row py-8 space-y-8 sm:space-y-0 sm:space-x-6">
          <p className="sm:w-1/2">
            Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
            suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
            risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
            urna molestie at elementum eu. Urna duis convallis convallis tellus.
            Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra.
          </p>
          <p className="sm:w-1/2">
            Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
            suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
            risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
            urna molestie at elementum eu. Urna duis convallis convallis tellus.
            Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra. Nisi vitae suscipit tellus mauris.
            Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
            convallis tellus. Urna molestie at elementum eu. Nunc sed blandit
            libero volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <p></p>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
