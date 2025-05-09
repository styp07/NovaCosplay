const StoryBar = () => {
  const stories = [
    { id: 1, username: "EventosNova", isEvent: true },
    { id: 2, username: "Cosplay_Master", avatar: "M" },
    { id: 3, username: "AnimeGirl", avatar: "A" },
    { id: 4, username: "SuperHero", avatar: "S" },
    { id: 5, username: "MangaFan", avatar: "M" },
    { id: 6, username: "ArtisticCosplay", avatar: "A" },
    { id: 7, username: "CreativeCostumes", avatar: "C" },
    { id: 8, username: "OtakuDesigner", avatar: "O" },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mt-6">
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-1 
                  ${
                    story.isEvent
                      ? "bg-gradient-to-br from-purple-500 to-pink-500"
                      : "bg-gradient-to-br from-yellow-500 to-orange-500"
                  }`}
            >
              <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-gray-100">
                {story.isEvent ? (
                  <span className="text-sm font-bold text-purple-700">EVT</span>
                ) : (
                  <span className="text-sm font-bold text-orange-600">
                    {story.avatar}
                  </span>
                )}
              </div>
            </div>

            <span
              className="text-sm font-semibold text-gray-700 text-center max-w-[80px] truncate"
              title={story.username}
            >
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBar;
