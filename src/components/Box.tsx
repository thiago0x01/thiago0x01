import { useState } from 'react';

export default function Box() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }

  return isOpen ? (
    <div
      onClick={handleSetIsOpen}
      className="w-[255px] rounded-[4px] border-box border-[3px] flex justify-end items-end p-[18px] hover:cursor-pointer bg-title duration-700"
    >
      <p className="">
        Thiago é um desenvolvedor full stack focado no ecossistema JavaScript e
        desenvolvimento de aplicações para web, buscando estar em constante
        evolução de seus conhecimentos dentro do assunto, focando em tecnologias
        modernas para a web2, e estudando sobre tecnologias web3.
      </p>
    </div>
  ) : (
    <div
      onClick={handleSetIsOpen}
      className="w-[255px] h-[255px] rounded-[4px] border-box border-[3px] flex justify-end items-end p-[18px] hover:cursor-pointer hover:bg-title duration-700"
    >
      <p className="text-2xl">about me</p>
    </div>
  );
}
