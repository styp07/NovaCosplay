import { Users } from "lucide-react";

const CosplayerGrid = () => {
  const cosplayers = [
    { id: 1, name: "StarCosplay", avatar: "src\\assets\\images\\C1.jpg" },
    { id: 2, name: "AnimeGirl", avatar: "src\\assets\\images\\C2.jpg" },
    { id: 3, name: "HeroFan", avatar: "src\\assets\\images\\C3.jpg" },
    { id: 4, name: "MangaBoy", avatar: "src\\assets\\images\\C4.png" },
    { id: 5, name: "CosArtist", avatar: "CA" },
    { id: 6, name: "CharacterPro", avatar: "CP" },
    { id: 7, name: "CosDesigner", avatar: "CD" },
    { id: 8, name: "AnimeFan", avatar: "AF" },
    { id: 9, name: "CosArtist", avatar: "CA" },
    { id: 10, name: "CharacterPro", avatar: "CP" },
    { id: 11, name: "CosDesigner", avatar: "CD" },
    { id: 12, name: "AnimeFan", avatar: "AF" },
    { id: 13, name: "CosArtist", avatar: "CA" },
    { id: 14, name: "CharacterPro", avatar: "CP" },
    { id: 15, name: "CosDesigner", avatar: "CD" },
    { id: 16, name: "AnimeFan", avatar: "AF" },
  ];

  return (
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 bg-white p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <Users size={20} className="text-[#C44E93] mr-2" />
        <h2 className="text-lg font-bold text-[#C44E93]">NOVA COSPLAYERS</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cosplayers.map((cosplayer) => (
          <div key={cosplayer.id} className="group">
            <div className="aspect-square rounded-md bg-gray-800 overflow-hidden relative group-hover:ring-2 group-hover:ring-purple-400 transition-all">
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img
                  src={cosplayer.avatar}
                  alt="Evento"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none"; // Oculta la imagen si falla
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center text-xl font-bold text-gray-300 bg-gray-100">
                  {cosplayer.avatar}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                <span className="text-white text-xs font-medium">
                  Ver perfil
                </span>
              </div>
            </div>
            <div className="mt-1 text-center">
              <p className="text-xs font-bold text-[#C44E93]">
                {cosplayer.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="px-4 py-2 text-sm font-medium text-[#C44E93] border border-[#C44E93] rounded-md hover:bg-purple-900/50 transition">
          Ver todos los cosplayers
        </button>
      </div>
    </div>
  );
};

export default CosplayerGrid;
