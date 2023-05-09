import { useState } from "react";

export default function Contato() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3"); // Formata para (99) 99999-9999
    setPhone(value);
  };

  return (
    <>
      <section
        className="bg-[#F8F9F9] pb-40 px-5 lg:px-14 2xl:px-52 mt-10 md:mt-20 pt-10"
        id="contato"
      >
        <div className="flex md:justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800  leading-snug mt-8 md:text-center">
            Entre em contato
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:justify-items-center pt-8 md:pt-12  px-0 md:px-20">
          <a
            href="https://wa.me/5511934456142"
            target="_blank"
            rel="noreferrer"
            className="text-base font-bold text-gray-600 "
          >
            <div className="flex md:flex-col justify-start items-center md:justify-center gap-3 p-2 md:p-5 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <img src="/logo/whatsapp-logo.svg" alt="WhatsApp Logo" />
              <div className="flex flex-col gap-1 md:gap-1.5 md:items-center">
                <p className="text-base font-normal text-gray-500">
                  Conversa pelo Whatsapp
                </p>

                <span>+55 (11) 93445-6142</span>
              </div>
            </div>
          </a>
          <a
            href="mailto:contato@pigpinsmetais.com.br"
            className="text-base font-bold text-gray-600 "
          >
            <div className="flex md:flex-col justify-start items-center md:justify-center gap-3 p-2 md:p-5 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <img src="/logo/gmail-logo.svg" alt="Gmail logo" />
              <div className="flex flex-col gap-1 md:gap-1.5 md:items-center">
                <p className="text-base font-normal text-gray-500">
                  E-mail personalizado
                </p>

                <span>contato@pigpinsmetais.com.br</span>
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/pig_pins/"
            target="_blank"
            rel="noreferrer"
            className="text-base font-bold text-gray-600 "
          >
            <div className="flex md:flex-col justify-start items-center md:justify-center gap-3 p-2 md:p-5 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <img src="/logo/instagram-logo.svg" alt="Instagram" />
              <div className="flex flex-col gap-1 md:gap-1.5 md:items-center">
                <p className="text-base font-normal text-gray-500">
                  Veja nosso perfil
                </p>

                <span>instagram.com/pig_pins</span>
              </div>
            </div>
          </a>
        </div>
        <div className="pb-8 mx-0 md:mx-20 border-b border-gray-300" />
        <div className="grid grid-cols-1 gap-5 px-0 md:px-40 mt-10">
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-base font-medium">Nome</label>
            <input
              type="text"
              placeholder="Seu nome aqui"
              className="w-full border bg-white border-gray-300  px-4 py-3 text-gray-700 font-medium font-body placeholder-gray-400 placeholder:font-normal focus:border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-base font-medium">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu.email@email.com"
              className="w-full border bg-white border-gray-300  px-4 py-3 text-gray-700 font-medium font-body placeholder-gray-400 placeholder:font-normal focus:border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-base font-medium">
              Telefone
            </label>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(99) 99999-9999"
              className="w-full border bg-white border-gray-300  px-4 py-3 text-gray-700 font-medium font-body placeholder-gray-400 placeholder:font-normal focus:border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-base font-medium">
              Mensagem{" "}
              <span className="font-normal text-neutral-400">(Opcional)</span>
            </label>
            <textarea
              rows="5"
              placeholder="Escreva uma mensagem para gente..."
              className="w-full border bg-white border-gray-300  px-4 py-3 text-gray-700 font-medium font-body placeholder-gray-400 placeholder:font-normal focus:border-gray-500 focus:outline-none"
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="w-fit font-title font-medium text-base 2xl:text-lg text-neutral-50 bg-neutral-800 px-5 py-3 hover:opacity-70 transition-opacity duration-200  items-center gap-2">
              Enviar contato
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
