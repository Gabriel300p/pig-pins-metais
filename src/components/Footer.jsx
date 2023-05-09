import { RiInstagramLine, RiWhatsappLine } from "react-icons/ri";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-neutral-900 px-5 xl:px-[72px] py-12 ">
      <div className="flex flex-col gap-10 border-b border-neutral-700 pb-10">
        <a href="/">
          <img
            src="/logo/logo-pig-pins.png"
            alt="Logo Pig Pins Metais"
            className="w-36 sm:w-44"
          />
        </a>
        <ul className="flex flex-col md:flex-row md:items-center gap-10 text-xl font-medium text-neutral-200 font-body">
          <li className="hover:opacity-80">
            <a href="#home">Home</a>
          </li>
          <li className="hover:opacity-80">
            <a href="#produtos">Produtos</a>
          </li>
          <li className="hover:opacity-80">
            <a href="#orcamento">Orçamento</a>
          </li>
          <li className="hover:opacity-80">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between pt-10">
        <span className="text-base md:text-lg font-normal font-body text-neutral-300">
          &copy; {year} Pig Pins Metais | Todos os direitos reservados
        </span>
        <div className="flex items-center gap-3 md:gap-5 text-neutral-50">
          <a
            href="https://www.instagram.com/pig_pins/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine className="w-7 h-7 md:w-8 md:h-8 hover:opacity-75 transition-opacity duration-200" />
          </a>
          <a
            href="https://wa.me/5511934456142"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappLine className="w-7 h-7 md:w-8 md:h-8 hover:opacity-75 transition-opacity duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}
