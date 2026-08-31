import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Contact from './Contact'

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
      <Contact/>

      
    
    </main>
  );
}

export default Page;
