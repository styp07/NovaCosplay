import { Users } from "lucide-react";

const CosplayerGrid = () => {
  const cosplayers = [
    { id: 1, name: "StarCosplay", avatar: "SC" },
    { id: 2, name: "AnimeGirl", avatar: "AG" },
    { id: 3, name: "HeroFan", avatar: "HF" },
    { id: 4, name: "MangaBoy", avatar: "MB" },
    { id: 5, name: "CosArtist", avatar: "CA" },
    { id: 6, name: "CharacterPro", avatar: "CP" },
    { id: 7, name: "CosDesigner", avatar: "CD" },
    { id: 8, name: "AnimeFan", avatar: "AF" },
  ];

  return (
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 bg-gray-900 p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <Users size={20} className="text-purple-400 mr-2" />
        <h2 className="text-lg font-bold text-purple-400">NOVA COSPLAYERS</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cosplayers.map((cosplayer) => (
          <div key={cosplayer.id} className="group">
            <div className="aspect-square rounded-md bg-gray-800 overflow-hidden relative group-hover:ring-2 group-hover:ring-purple-400 transition-all">
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-300">
                {cosplayer.avatar}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                <span className="text-white text-xs font-medium">
                  Ver perfil
                </span>
              </div>
            </div>
            <div className="mt-1 text-center">
              <p className="text-xs font-medium text-gray-300">
                {cosplayer.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="px-4 py-2 text-sm font-medium text-purple-400 border border-purple-400 rounded-md hover:bg-purple-900/50 transition">
          Ver todos los cosplayers
        </button>
      </div>
    </div>
  );
};

export default CosplayerGrid;
