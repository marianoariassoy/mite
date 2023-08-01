import Link from "next/link";

const data = [
  {
    title: "FELIPE ALVAREZ PARISI",
    id: 1,
  },
  {
    title: "PAULA CASTRO",
    id: 1,
  },
  {
    title: "LAURA CÓDEGA",
    id: 1,
  },
  {
    title: "HOCO HUOC",
    id: 1,
  },
  {
    title: "FELIPE ALVAREZ PARISI",
    id: 1,
  },
  {
    title: "PAULA CASTRO",
    id: 1,
  },
  {
    title: "LAURA CÓDEGA",
    id: 1,
  },
  {
    title: "HOCO HUOC",
    id: 1,
  },
];

const pages = () => {
  return (
    <section className="flex flex-col items-start font-medium gap-y-2 lg:gap-y-4 text-5xl" id="artists">
      {data.map((item, index) => (
        <Link href={`/artists/${item.id}/images`} className="hover-underline-animation hover-border-2" key={index}>
          {item.title}
        </Link>
      ))}
    </section>
  );
};

export default pages;
