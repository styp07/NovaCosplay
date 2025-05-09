import { Trophy } from "lucide-react";

const TopCosplayers = () => {
  const topCosplayers = [
    {
      id: 1,
      name: "AnimeQueen",
      avatar: "AQ",
      character: "Sailor Moon",
      likes: 3452,
    },
    {
      id: 2,
      name: "HeroMaster",
      avatar: "HM",
      character: "Iron Man",
      likes: 3127,
    },
    { id: 3, name: "CosplayPro", avatar: "CP", character: "Goku", likes: 2894 },
    {
      id: 4,
      name: "CharacterArt",
      avatar: "CA",
      character: "Harley Quinn",
      likes: 2541,
    },
  ];

  return (
    <div className="mt-8 mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
        <div className="mx-4 text-xl font-bold text-purple-600 flex items-center">
          <Trophy size={24} className="mr-2 text-yellow-500" />
          TOP COSPLAYERS SEMANAL
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
      </div>

      <p className="text-center text-gray-600 mb-6">
        Vota por tus cosplayers favoritos y ayúdales a subir en el ranking
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topCosplayers.map((cosplayer, index) => (
          <div
            key={cosplayer.id}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden relative"
          >
            {/* Ranking Badge */}
            <div
              className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white 
              ${
                index === 0
                  ? "bg-yellow-500"
                  : index === 1
                  ? "bg-gray-400"
                  : index === 2
                  ? "bg-amber-700"
                  : "bg-purple-500"
              }`}
            >
              {index + 1}
            </div>

            {/* Image Placeholder */}
            <div className="aspect-square bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-400">
                {cosplayer.avatar}
              </div>
            </div>

            {/* Info */}
            <div className="p-2 text-center">
              <div className="font-semibold text-sm truncate">
                {cosplayer.name}
              </div>
              <div className="text-xs text-gray-500 truncate">
                as {cosplayer.character}
              </div>
              <div className="mt-1 text-xs font-medium text-purple-600">
                {cosplayer.likes.toLocaleString()} Me gusta
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCosplayers;
