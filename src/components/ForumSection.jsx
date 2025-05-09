import { MessageSquare } from "lucide-react";

const ForumSection = () => {
  const forumMessages = [
    {
      id: 1,
      user: "CosplayExpert",
      avatar: "CE",
      topic: "Materiales y Técnicas",
      message: "¿Alguien conoce un buen material para hacer armaduras ligeras?",
      timeAgo: "10 min",
      replies: 7,
    },
    {
      id: 2,
      user: "AnimeFan22",
      avatar: "AF",
      topic: "Eventos",
      message: "Busco grupo para asistir al NovaCon, ¡contactadme!",
      timeAgo: "45 min",
      replies: 3,
    },
    {
      id: 3,
      user: "PropsDesigner",
      avatar: "PD",
      topic: "Tutoriales",
      message: "Acabo de subir un tutorial sobre maquillaje para cosplay.",
      timeAgo: "2 horas",
      replies: 12,
    },
    {
      id: 4,
      user: "MangaLover",
      avatar: "ML",
      topic: "General",
      message:
        "¿Qué personaje pensáis que será tendencia en los próximos meses?",
      timeAgo: "4 horas",
      replies: 21,
    },
    {
      id: 5,
      user: "CostumeCreator",
      avatar: "CC",
      topic: "Ayuda",
      message: "Necesito consejos para mi primer concurso de cosplay.",
      timeAgo: "6 horas",
      replies: 9,
    },
  ];

  return (
    <div className="w-full lg:w-1/2 bg-white border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-purple-600 p-3 text-white flex items-center">
        <MessageSquare size={20} className="mr-2" />
        <h3 className="font-bold">ÚLTIMOS MENSAJES DEL FORO</h3>
      </div>

      <div className="divide-y divide-gray-200">
        {forumMessages.map((message) => (
          <div key={message.id} className="p-3 hover:bg-gray-50">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">
                {message.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{message.user}</span>
                  <span className="text-xs text-gray-500">
                    {message.timeAgo}
                  </span>
                </div>

                <div className="inline-block text-xs px-2 py-1 bg-gray-100 rounded mb-1">
                  {message.topic}
                </div>

                <p className="text-sm text-gray-700 line-clamp-2">
                  {message.message}
                </p>

                <div className="mt-1 text-xs text-purple-600">
                  {message.replies} respuestas
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-3 border-t border-gray-200 text-center">
        <button className="text-sm font-semibold text-purple-600">
          Ver todos los temas
        </button>
      </div>
    </div>
  );
};

export default ForumSection;
