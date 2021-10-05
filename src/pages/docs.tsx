import { getLayout } from "src/layouts/Layout";

const Contact = () => {
  return (
    <section className="py-12 font-sans bg-white dark:bg-almostblack">
      <div className="">
        <h2 className="mb-8 font-sans text-2xl font-bold text-left text-gray-700 dark:text-gray-200">
          Docs
        </h2>
        <p>Coming soon</p>

        <br />
      </div>
    </section>
  );
};

Contact.getLayout = getLayout;

export default Contact;
