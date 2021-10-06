import { Header, Footer } from "src/components";

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="flex flex-col font-sans text-gray-700 min-h-screen dark:text-gray-100">
      <Header />
      <div className="padded-container max-w-3xl flex-grow flex-shrink relative z-10">
        <div className="min-w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
