import { useSearchParams } from "react-router-dom";

function Portfolio() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const image = searchParams.get("image");

  return (
    <main className="max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt="project" />
      <div className="mt-8 text-4xl font-bold">{title}</div>
      <div className="mt-8">{desc}</div>
    </main>
  );
}

export default Portfolio;
