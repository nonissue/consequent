import { getLayout } from "src/layouts/Layout";

const Contact = () => {
  return (
    <section className="text-base leading-relaxed font-normal text-gray-800 dark:text-gray-300">
      <div className="">
        <h2 className="mt-4 mb-8 font-sans text-2xl uppercase tracking-wider font-bold text-left text-gray-700 dark:text-gray-200">
          Docs
        </h2>
        <p>
          Coming soonnn Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Turpis.
        </p>

        <br />
      </div>
    </section>
  );
};

Contact.getLayout = getLayout;

export default Contact;
