import { cn } from "../lib/utils";
import MagicMarquee from "./magicui/MagicMarquee";

const stocks = [
  {
    name: "Apple",
    id: 1,
    imgSrc: "./apple--big.svg",
    price: "$123",
    change: "3.56%",
    changeColor: "text-green-600",
  },
  {
    name: "Alphabet Inc",
    id: 2,
    imgSrc: "./alphabet--big.svg",
    price: "$2345",
    change: "1.23%",
    changeColor: "text-green-600",
  },
  {
    name: "NVIDIA",
    id: 3,
    imgSrc: "./nvidia--big.svg",
    price: "$567",
    change: "-2.34%",
    changeColor: "text-red-600",
  },
  {
    name: "Tesla",
    id: 4,
    imgSrc: "./tesla--big.svg",
    price: "$678",
    change: "0.45%",
    changeColor: "text-green-600",
  },
];

const StockCard = ({ name, imgSrc, price, change, changeColor }) => {
  return (
    <div
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-200 hover:bg-gray-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={imgSrc}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">
        <div className="flex justify-between">
          <div className="text-gray-900">{price}</div>
          <div className={cn(changeColor)}>{change}</div>
        </div>
      </blockquote>
    </div>
  );
};

const StockMarquee = () => {
  return (
    <div className="relative w-full py-5">
      <MagicMarquee pauseOnHover className="[--duration:20s]">
        {stocks.map((stock) => (
          <StockCard key={stock.id} {...stock} />
        ))}
      </MagicMarquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  );
};

export default StockMarquee;
