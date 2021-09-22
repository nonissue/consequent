import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const WIPPage = () => (
  <section className="py-12">
    <h3 className="text-8xl text-radix-red10 font-black mb-3">WIP</h3>
    <article className="prose-2xl">
      This section isn&apos;t finished yet! <br />
      Return{" "}
      <Link href="/">
        <a className="font-bold">Home</a>
      </Link>
      .
    </article>
  </section>
);

WIPPage.getLayout = getLayout;

export default WIPPage;
