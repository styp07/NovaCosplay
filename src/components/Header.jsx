const Header = () => {
  return (
    <header className="bg-white border-b-2 border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
        {/* Logo + Marca */}
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/images/Logo.png"
            alt="Logo Nova Cosplay"
            className="h-14 w-auto"
          />
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="text-[#F5C23A]">NOVA</span>{" "}
            <span className="text-[#C44E93]">COSPLAY</span>
          </h1>
        </div>

        {/* Navegación - Visible solo en pantallas medianas hacia arriba */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="bg-yellow-200 hover:bg-yellow-500 text-black text-xs font-extrabold px-7 py-2 rounded">
            COSPLAYERS
          </button>
          <button className="bg-orange-400 hover:bg-orange-500 text-white text-xs font-extrabold px-3 py-2 rounded">
            DISEÑADORES
          </button>
          <button className="text-gray-950 px-6 py-2 rounded text-xs font-bold hover:bg-gray-200 transition">
            EVENTOS
          </button>
        </div>

        {/* Foro - Visible solo en pantallas medianas hacia arriba */}
        <div className="hidden md:block">
          <button className="border-2 border-black px-4 py-2 rounded text-xs font-bold hover:bg-black hover:text-white transition">
            FORO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
