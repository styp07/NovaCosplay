import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventSection() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  const eventos = [
    {
      id: 1,
      image: "https://picsum.photos/id/1011/800/400",
      description: "¡No te pierdas el evento de cosplay del mes!",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1015/800/400",
      description: "Competencia de trajes originales",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1025/800/400",
      description: "Festival de anime y cultura pop",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/1035/800/400",
      description: "Show en vivo de artistas invitados",
    },
    {
      id: 5,
      image: "https://picsum.photos/id/1045/800/400",
      description: "Premiación a los mejores cosplayers",
    },
  ];

  const cardWidth = 600; // ancho fijo en px

  const scrollToIndex = (newIndex) => {
    const container = carouselRef.current;
    const clampedIndex = Math.max(0, Math.min(eventos.length - 1, newIndex));
    setIndex(clampedIndex);

    container.scrollTo({
      left: clampedIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white px-6 py-4 relative">
      <h2 className="text-orange-500 text-xl font-extrabold mb-3">EVENTOS</h2>

      {/* Flechas */}
      <button
        onClick={() => scrollToIndex(index - 1)}
        className="absolute left-2 top-[50%] -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
        disabled={index === 0}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scrollToIndex(index + 1)}
        className="absolute right-2 top-[50%] -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
        disabled={index >= eventos.length - 1}
      >
        <ChevronRight />
      </button>

      {/* Carrusel */}
      <div ref={carouselRef} className="overflow-x-hidden">
        <div className="flex transition-all duration-500 ease-in-out">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="w-[600px] h-[350px] rounded-xl overflow-hidden relative flex-shrink-0 shadow-lg mx-2"
            >
              <img
                src={evento.image}
                alt="Evento"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">
                  {evento.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
