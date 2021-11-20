import { getLayout } from "src/layouts/Layout";

const Contact = () => {
  return (
    <section className="text-base leading-relaxed font-normal text-gray-800 dark:text-gray-300">
      <div className="">
        <h5 className="text-gray-700 dark:text-gray-200 mb-8 sm:mb-12 text-4xl sm:text-5xl tracking-tight font-black">
          Documentation
        </h5>
        <p>
          Coming soonnn Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Turpis.
        </p>

        <br />

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

        <br />
      </div>
    </section>
  );
};

Contact.getLayout = getLayout;

export default Contact;
