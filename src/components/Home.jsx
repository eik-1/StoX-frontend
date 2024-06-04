import Hero from "../components/Hero";
import StockMarquee from "../components/Marquee";
import { BorderBeam } from "../components/magicui/BorderBeam";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-[100%] mt-12 ml-auto mr-auto">
      <Hero />
      <StockMarquee />
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative flex flex-col items-center justify-center w-11/12 max-w-6xl p-10 bg-white rounded-2xl shadow-2xl h-5/6 overflow-hidden">
          <BorderBeam size={250} duration={12} delay={9} />
          <h1 className="z-10 mb-6 text-5xl font-bold text-center text-black">
            View The Market
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
