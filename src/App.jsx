import { useState } from "react";

// Componentes
import Header from "./components/Header";
import StoryBar from "./components/StoryBar";
import EventFeed from "./components/EventFeed";
import Sidebar from "./components/Sidebar";
import TopCosplayers from "./components/TopCosplayers";
import ForumSection from "./components/ForumSection";
import CosplayerGrid from "./components/CosplayerGrid";
import Footer from "./components/Footer";

function App() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="max-w-7xl mx-auto pb-8 px-4">
        <StoryBar />

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Feed Principal */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold mb-4 text-[#C44E93]">
              EVENTOS DESTACADOS
            </h2>
            <EventFeed />

            <TopCosplayers />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>

        <div className="w-full h-64 overflow-hidden rounded-xl mb-5">
          <img
            src="src\assets\images\Banner.jpg" // Reemplaza con la ruta correcta
            alt="Gato astronauta"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }} // Ajusta según la altura de los ojos
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <ForumSection />
          <CosplayerGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
