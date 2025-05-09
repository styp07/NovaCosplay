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
            <h2 className="text-xl font-bold mb-4 text-purple-600">
              EVENTOS DESTACADOS
            </h2>
            <EventFeed />

            <TopCosplayers />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>

        <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl py-6 px-6 mb-8 text-white font-extrabold text-xl text-center shadow-lg">
          🎉 PRÓXIMO EVENTO ESPECIAL
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
