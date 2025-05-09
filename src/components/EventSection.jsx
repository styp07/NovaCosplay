import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const amount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-6 py-4">
      <h2 className="text-orange-500 text-xl font-extrabold mb-2">EVENTOS</h2>

      {/* Flechas */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-12 z-10 bg-white shadow-md rounded-full p-2"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-12 z-10 bg-white shadow-md rounded-full p-2"
      >
        <ChevronRight size={20} />
      </button>

      {/* Carrusel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-4 pr-8">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="min-w-[250px] h-[150px] bg-red-500 rounded-lg flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
