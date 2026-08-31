import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <main className="overflow-hidden bg-background relative z-2">
      <nav
        id="Nav"
        className="z-300 relative w-full  overflow-visible h-16 text-white mix-blend-difference "
      >
        <Nav />
        <MobileNav />
      </nav>
      <section id="hero-about" className="min-h-screen w-full  ">
        <div className="w-full mb-20">
          <p className="text-title md:text-hero font-semibold w-full px-4 sm:px-10 pt-30 sm:pt-60 leading-none whitespace-pre-wrap wrap-break-word ">
            {"                  "}I’m a designer and art director with over 3
            years of experience turning ideas into brands and products. I work
            closely with founders, marketing teams, and developers to create
            visual systems that scale — from brand strategy to launch-ready
            interfaces.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row  justify-around items-end w-full text-white/50 mb-40 gap-5 px-4 sm:px-10">
          <p className="text-body w-100 h-60">
            I got my start in 2018, freelancing for early-stage startups while
            finishing design school. My first big break came working with Dapper
            Labs during the early Web3 wave — helping shape the look and feel of
            their product launches. Since then, I’ve collaborated with teams at
            Polygon, Showtime, and smaller venture-backed startups across LA,
            London, and Tel Aviv.
          </p>
          <p className="text-body w-100 h-60">
            Most of my work sits at the intersection of branding and product.
            Whether it’s designing pitch decks that raise funding or interfaces
            that ship, I partner closely with founders and developers to bring
            bold ideas to life — fast and with intention.
          </p>
          <Link
            href="/contacts"
            className="w-40 h-12 p-4 rounded-2xl border text-center hover:text-orange-600"
          >
            {" "}
            Lets Talk
          </Link>
        </div>
      </section>

      
    
    </main>
  );
}

export default Page;
