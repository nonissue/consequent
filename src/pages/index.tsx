import { NextPage } from "next/types";
import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="leading-relaxed text-base text-gray-800 dark:text-gray-200">
        <h3 className="text-2xl font-bold pb-4 text-gray-900 dark:text-gray-50">
          Consequent: A Next.js starter
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </p>
        <p className="pt-4">
          <Link href="https://github.com/nonissue/consequent">
            <a className="font-bold hover:text-radix-red10 transition-colors duration-200">
              Github
            </a>
          </Link>
        </p>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
