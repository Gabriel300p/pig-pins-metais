export default function Navbar() {
  return (
    <>
      <nav className="pt-6 mb-4 px-5 xl:px-14 flex justify-between items-center !z-50 sticky">
        <a href="/">
          <img
            src="/logo/logo-pig-pins.png"
            alt="Logo Pig Pins Metais"
            className="w-36 sm:w-44"
          />
        </a>
        <a href="#contato">
          <button className="uppercase font-title font-medium text-xs sm:text-sm text-neutral-50 bg-neutral-800 px-2 sm:px-5 py-3 hover:opacity-70 transition-opacity duration-200">
            Entre me contato
          </button>
        </a>
      </nav>
    </>
  );
}
