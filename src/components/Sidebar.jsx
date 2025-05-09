import { Search } from "lucide-react";

const Sidebar = () => {
  const suggestions = [
    { id: 1, name: "MegaCosplay", avatar: "MC", followers: 12453 },
    { id: 2, name: "ArtisticProps", avatar: "AP", followers: 8721 },
    { id: 3, name: "CostumeCreator", avatar: "CC", followers: 6542 },
    { id: 4, name: "CharacterMaster", avatar: "CM", followers: 5321 },
  ];

  const trending = [
    "#NovaCosplayContest",
    "#AnimeExpo2025",
    "#CharacterDesign",
    "#CosplayTutorial",
    "#MangaInspiration",
  ];

  return (
    <div className="hidden md:block w-1/3 space-y-6">
      {/* Usuario */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold mr-3">
            NC
          </div>
          <div>
            <div className="font-bold">nova_user</div>
            <div className="text-gray-500 text-sm">Nova Cosplayer</div>
          </div>
        </div>
      </div>

      {/* Sugerencias */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 font-semibold text-sm">
            Sugerencias para ti
          </span>
          <button className="text-xs font-bold">Ver todo</button>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xs mr-2">
                  {suggestion.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{suggestion.name}</div>
                  <div className="text-xs text-gray-500">
                    {suggestion.followers.toLocaleString()} seguidores
                  </div>
                </div>
              </div>
              <button className="text-xs font-bold text-purple-600">
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tendencias */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-gray-800">Tendencias</h3>
        <div className="space-y-2">
          {trending.map((tag, index) => (
            <div
              key={index}
              className="text-sm text-purple-600 hover:underline cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Enlaces de pie */}
      <div className="text-xs text-gray-500 px-2">
        <div className="mb-4">
          <span className="hover:underline cursor-pointer mr-2">Acerca de</span>
          <span className="hover:underline cursor-pointer mr-2">Ayuda</span>
          <span className="hover:underline cursor-pointer mr-2">
            Privacidad
          </span>
          <span className="hover:underline cursor-pointer">Términos</span>
        </div>
        <div>© 2025 NOVA COSPLAY</div>
      </div>
    </div>
  );
};

export default Sidebar;
