import {
  RiPantoneFill,
  RiPaletteFill,
  RiMailSendFill,
  RiWhatsappFill,
  RiRulerFill,
  RiBarChart2Fill,
} from "react-icons/ri";

export default function Orcamento() {
  return (
    <section className="py-8 px-5 xl:px-14 mt-20">
      <div
        className="flex flex-col gap-2 md:gap-0 md:justify-center md:items-center"
        id="orcamento"
      >
        <h2 className="text-4xl md:text-[52px] font-bold text-gray-800  leading-snug mt-8 md:text-center">
          Como obter um orçamento
        </h2>
        <p className="font-normal font-body text-neutral-600 text-lg md:text-xl">
          Nos envie uma mensagem via WhatsApp ou e-mail contendo:{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-7 mt-14 md:mt-20">
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="p-4 md:p-5 rounded-full bg-neutral-100 shadow-md">
            <RiPantoneFill className="w-7 h-7 md:w-9 md:h-9 text-neutral-700" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-title text-2xl font-bold text-neutral-700 text-center">
              Tipo de peça
            </h3>
            <p className="font-body text-base text-neutral-500 text-center">
              Nos informe o tipo de peça que <br /> deseja (Chaveiro, pin,
              abridor e etc)
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="p-4 md:p-5 rounded-full bg-neutral-100 shadow-md">
            <RiPaletteFill className="w-7 h-7 md:w-9 md:h-9 text-neutral-700" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-title text-2xl font-bold text-neutral-700 text-center">
              Arquivo da logo/arte
            </h3>
            <p className="font-body text-base text-neutral-500 text-center">
              Nos envie a arte/logo/desenho que <br /> deseja para sua peça
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="p-4 md:p-5 rounded-full bg-neutral-100 shadow-md">
            <RiRulerFill className="w-7 h-7 md:w-9 md:h-9 text-neutral-700" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-title text-2xl font-bold text-neutral-700 text-center">
              Medida da peça
            </h3>
            <p className="font-body text-base text-neutral-500 text-center">
              Informe as medidas desejadas para <br /> personalizarmos a sua
              peça.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="p-4 md:p-5 rounded-full bg-neutral-100 shadow-md">
            <RiBarChart2Fill className="w-7 h-7 md:w-9 md:h-9 text-neutral-700" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-title text-2xl font-bold text-neutral-700 text-center">
              Quantidade de peças
            </h3>
            <p className="font-body text-base text-neutral-500 text-center">
              Pedido mínimo de 100 unidades <br /> por modelo
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 mt-14 sm:mt-20">
        <a href="#contato">
          <button className="font-title font-medium text-base 2xl:text-lg text-neutral-50 bg-neutral-800 px-5 py-3 hover:opacity-70 transition-opacity duration-200 inline-flex items-center gap-2">
            <RiMailSendFill className="w-5 h-5 md:w-6 md:h-6" />
            Orçamento via e-mail
          </button>
        </a>
        <a href="https://wa.me/5511934456142" target="_blank" rel="noreferrer">
          <button className="font-title font-medium text-base 2xl:text-lg text-neutral-700 bg-white border-2 border-neutral-600 px-5 py-3 hover:opacity-70 transition-opacity duration-200 inline-flex items-center gap-2">
            <RiWhatsappFill className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            Orçamento via WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
}
