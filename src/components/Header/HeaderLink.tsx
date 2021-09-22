import Link from "next/link";

type HeaderLinkProps = {
  href: string;
  title: string;
};

const HeaderLink = ({ title, href }: HeaderLinkProps) => {
  return (
    <div
      className="text-xs sm:text-base font-sans
    hover:text-radix-crimson10"
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};

export { HeaderLink };
