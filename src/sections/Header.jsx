import { RiMailSendFill, RiWhatsappFill } from "react-icons/ri";

export default function Header() {
  return (
    <>
      <header
        className="py-6 px-5 xl:px-14 flex flex-col lg:flex-row items-center justify-between "
        id="home"
      >
        <div className="md:max-w-full lg:max-w-2xl xl:max-w-3xl 3xl:max-w-5xl mt-6 md:mt-10 md:flex md:flex-col 2xl:items-center 2xl:justify-center xl:block z-20">
          <h1 className="uppercase font-title font-bold text-[28px] lg:text-4xl xl:text-[52px] text-neutral-900 !leading-tight ">
            CHAVEIROS, PINS (BROCHES), <br className="hidden xl:block" />{" "}
            ABRIDORES, MOEDAS, MEDALHAS, PINGENTES, ETIQUETAS{" "}
            <br className=" hidden md:block xl:hidden" /> DE METAL
          </h1>
          <p className="font-body text-xl 2xl:text-2xl font-normal text-neutral-600 mt-3 ">
            Desenvolvemos e produzimos a partir de sua{" "}
            <br className="hidden lg:block" />
            logomarca, arte, desenho e etc.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-5 mt-7 sm:mt-10">
            <a href="#contato">
              <button className="font-title font-medium text-base 2xl:text-lg text-neutral-50 bg-neutral-800 px-5 py-3 hover:opacity-70 transition-opacity duration-200 inline-flex items-center gap-2">
                <RiMailSendFill className="w-5 h-5 md:w-6 md:h-6" />
                Orçamento via e-mail
              </button>
            </a>
            <a
              href="https://wa.me/5511934456142"
              target="_blank"
              rel="noreferrer"
            >
              <button className="font-title font-medium text-base 2xl:text-lg text-neutral-700 bg-white border-2 border-neutral-600 px-5 py-3 hover:opacity-70 transition-opacity duration-200 inline-flex items-center gap-2">
                <RiWhatsappFill className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                Orçamento via WhatsApp
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src="/header-home.svg"
            alt="Imagem dos pins vendidos"
            className="-right-10 lg:right-[0%] xl:-right-0 md:top-[80%] lg:top-10 xl:top-8 2xl:-top-0 lg:absolute max-w-[370px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[620px] 2xl:max-w-[700px] -mt-6 sm:-mt-0  !z-0"
          />
        </div>
      </header>
    </>
  );
}
