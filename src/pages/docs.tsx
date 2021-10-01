import { getLayout } from "src/layouts/Layout";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-almostblack font-sans py-12">
      <div className="">
        <h2 className=" text-2xl dark:text-gray-200 font-bold font-sans text-gray-700 text-left mb-8">
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
