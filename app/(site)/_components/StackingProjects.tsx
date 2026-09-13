import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsStack() {
  return (
    <section
      id="projects"
      className="w-screen border-b border-white/18 relative px-4 sm:px-8 py-5"
    >
      <h2 className="text-orange-700 sticky top-0 text-lead h-fit z-91 whitespace-nowrap">
        {"// projects"}
      </h2>
      <div className="w-full">
        {projects.map((p, i) => (
          <Link
            href={`/projects/${p.slug}`}
            key={p.slug}
            className="slide sticky top-0 flex h-screen w-full overflow-hidden flex-col gap-2 py-12 rounded-2xl  md:flex-row "
          >
            <div className="h-full overflow-hidden rounded-2xl border border-white/10  md:w-[70%]">
              <Image
                src={p.coverImage}
                width={1920}
                height={1080}
                quality={75}
                
                alt={`${p.title} project by Ahmed Adel`}
                className="h-full w-full object-cover object-[0%_30%]"
              />
            </div>

            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 p-6 md:w-[30%] bg-background">
              <div className="flex flex-col gap-5">
                <span className="font-mono">({p.year})</span>
                <h3 className="text-3xl font-bold">{p.title}</h3>
                <p className="text-sm">{p.overview}</p>
              </div>
              <ul>
                {p.keywords.map((key, i) => (
                  <li key={i} className="sm:py-2 border-b border-white/20">
                    {key}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
