import RevealFooter from "../../_components/RevealFooter";
import SmoothScroll from "../../_components/Lenis";
import Navbar from "../../_components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SmoothScroll />

      {/* <Navbar /> */}
      {children}
      {/* <RevealFooter /> */}
    </>
  );
}
