"use client"
import { usePathname } from "next/navigation";
import DesktopNav from "./DesktopNav";
import MobileNav from "./mobileNav";
import { projects } from "../data/projects";

function Navbar() {
     const pathname = usePathname();

  const projectSlugs = new Set(
    projects.map((project) => project.slug)
  );

  const isProjectPage =
    pathname.startsWith("/projects/") &&
    pathname !== "/projects";

  const slug = pathname.split("/")[2];

  const isValidProject = projectSlugs.has(slug);

  
  if (isValidProject && !isProjectPage) {
    return null;
  }

  return (
    <nav
      id="Nav"
      className="z-50 relative w-full  overflow-visible h-fit text-white mix-blend-difference"
    >
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}

export default Navbar;
