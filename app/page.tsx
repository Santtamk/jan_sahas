import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-gradient text-[#F6F6F6] bg-white overflow-hidden px-2 lg:px-7 tracking-[-0.7px]">
      <NavBar />
      <div
        className="
        max-w-[1440px] mx-auto 
       pb-2   h-full lg:flex lg:justify-center lg:items-center
       lg:h-[calc(100vh-theme(spacing.20))] 
       "
      >
        <Hero />
      </div>
    </div>
  );
}
