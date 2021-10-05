import type { NextPage } from "next/types";
import Link from "next/link";
import { ExternalLinkIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { getLayout } from "src/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
        <h5 className="mt-4 text-6xl font-bold text-center">
          A Next.js Starter
        </h5>

        <br />

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
