import Link from "next/link";

export const FooterLinks = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-semibold text-2xl">{title}</p>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li className="font-light" key={item + i}>
            <Link href={"/"}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
