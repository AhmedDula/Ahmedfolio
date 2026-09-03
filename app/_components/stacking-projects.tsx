import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  overview: string;
  coverImage: string;
  year: number;
  galleryImages?: string[];
};

type ProjectsStackProps = {
  projects: Project[];
};

const STICKY_OFFSET_PX = 10;

export default function ProjectsStack({ projects }: ProjectsStackProps) {
  return (
    <section
      id="projects"
      className="w-screen border-b border-white/18 relative px-4 sm:px-8 py-5"
    >
      <h2 className="sticky top-0 py-1 h-fit z-10 text-orange-700 font-semibold mix-blend-difference">
        {"// projects"}
      </h2>
      <div className="w-full">
        {projects.map((p, i) => (
          <Link
            href={`/projects/${p.slug}`}
            key={p.slug}
            style={{
              top: STICKY_OFFSET_PX + i * STICKY_OFFSET_PX,
              zIndex: i + 1,
            }}
            className="slide sticky flex h-[80vh] w-full overflow-hidden flex-col gap-2 rounded-2xl my-6 md:flex-row bg-background"
          >
            <div className="h-full overflow-hidden rounded-2xl border border-white/10  md:w-[70%]">
              <Image
                src={p.coverImage}
                width={1200}
                height={1080}
                quality={75}
                sizes="(max-width: 768px) 100vw, 70vw"
                priority={i === 0}
                alt={ `${p.title} project by Ahmed Adel`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 p-6 md:w-[30%] ">
              <div className="flex flex-col gap-5">
                <span>( {p.year} )</span>
                <h3 className="text-3xl font-bold">{p.title}</h3>
                <p className="text-sm">{p.overview}</p>
              </div>
              <div>
                <span className="block border-b border-white/20 py-2">Landing Page</span>
                <span className="block border-b border-white/20 py-2">Responsive</span>
                <span className="block border-b border-white/20 py-2">Motions</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
