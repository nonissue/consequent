import { NextPage } from "next/types";
import Link from "next/link";
import { ExternalLinkIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { getLayout } from "@/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="leading-relaxed text-base text-gray-800 dark:text-gray-200">
        <h5 className="text-center text-6xl font-bold mt-4">
          A Next.js Starter
        </h5>

        <br />

        <p className="max-w-sm mx-auto border p-2 sm:p-3 mt-10 shadow-sm rounded-sm border-radix-gray5 text-center ">
          <Link href="/docs">
            <a className="font-bold text-radix-gray12 text-base sm:text-lg hover:text-radix-red10 transition-colors duration-200">
              Start with Docs
            </a>
          </Link>
          <ArrowRightIcon className="w-4 h-4 inline-block -mt-1 ml-1" />
        </p>
        <p className="max-w-sm mx-auto border p-2 sm:p-3 mt-2 mb-8 shadow-sm rounded-sm border-radix-gray5 text-center ">
          <Link href="https://github.com/nonissue/consequent">
            <a className="font-bold text-base sm:text-lg hover:text-radix-red10 transition-colors duration-200">
              View on Github
            </a>
          </Link>
          <ExternalLinkIcon className="w-4 h-4 inline-block -mt-1 ml-1" />
        </p>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
