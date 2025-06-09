export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center fixed top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur">
        <a href="#home" className="nav-item hover:bg-white/70 hover:text-gray-900">Home</a>
        <a href="#projects" className="nav-item hover:bg-white/70 hover:text-gray-900">Projects</a>
        <a href="#about" className="nav-item hover:bg-white/70 hover:text-gray-900">About</a>
        <a href="#contact" className="nav-item hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
