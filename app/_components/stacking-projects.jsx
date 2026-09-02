import Image from "next/image";
import Link from "next/link";

const STICKY_OFFSET_PX = 10; 

export default function ProjectsStack({ projects }) {
  return (
    <section
      id="projects"
      className="w-screen border-b border-white/18 relative "
    >
      <div className="mx-auto w-screen  pb-40 pt-10">
        {projects.map((p, i) => (
          <Link
            href={`/projects/${p.slug}`}
            key={p.slug}
            style={{
              top: STICKY_OFFSET_PX + i * STICKY_OFFSET_PX,
              zIndex: i + 1,
            }}
            className="slide sticky px-4 sm:px-8 py-5 flex  h-[80vh] w-screen overflow-hidden flex-col gap-2 rounded-2xl  md:flex-row bg-background"
          >
            <div className="h-full overflow-hidden rounded-2xl border border-white/10 md:w-[70%]">
              <Image
                src={p.coverImage}
                width={1920}
                height={1080}
                quality={75}
                sizes="(max-width: 768px) 100vw, 70vw"
                priority={i === 0}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 p-6 md:w-[30%] ">
              <div className="flex flex-col gap-5">
                <span>( 2030 )</span>
                <h2 className="text-3xl font-bold">{p.title}</h2>
                <p className="text-sm">{p.overview}</p>
              </div>
              <div>
                <h3 className="border-b border-white/20 py-2">
                  Landing Page
                </h3>
                <h3 className="border-b border-white/20 py-2">Responsive</h3>
                <h3 className="border-b border-white/20 py-2">Motions</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
