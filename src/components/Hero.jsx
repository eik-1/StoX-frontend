import RadialGradient from "./magicui/Gradient";
import BlurIn from "./magicui/Blur";

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center justify-between w-11/12 max-w-6xl p-10 rounded-lg bg-white shadow-2xl h-5/6 overflow-hidden">
        <RadialGradient />
        <BlurIn
          word="Stocks, Tokenized"
          className="text-3xl font-semibold text-white dark:text-black"
        />
        <div className="z-10 flex flex-col md:flex-row items-center justify-center w-full flex-grow">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-lg text-black font-semibold max-w-prose leading-relaxed">
              Dive into the world of limitless possibilities with our synthetic
              tokens. Backed by ETH, these tokens reflect the value of top
              global stocks, allowing you to invest securely and effortlessly.
              Break free from borders and explore a new era of decentralized
              finance.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-center pl-4">
            <img
              src="/hero2.jpg"
              alt="Hero"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
