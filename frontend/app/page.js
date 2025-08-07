"use client";
import { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

export default function Home() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmeEmail, setConfirmeEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  setMensagemErro("a");

  const verificaCampos = () => {
    if (nome === "") {
      setMensagemErro("Preencha o campo NOME");
    } else if (sobrenome === "") {
      setMensagemErro("Preencha o campo SOBRENOME");
    } else if (email === "") {
      setMensagemErro("Preencha o campo E-MAIL");
    } else if (confirmeEmail === "") {
      setMensagemErro("Preencha o campo CONFIRME E-MAIL");
    }
  };

  const enviaFormulario = (e) => {
    e.preventDefault();
    if (verificaCampos()) {
      alert("Enviado");
    } else {
      alert("Não enviado!\nEmails digitados não confere");
    }
  };

  return (
    <div className="p-4 bg-amber-400 w-90 md:w-100 rounded-md">
      <h1 className="text-xl font-medium md:text-2xl my-4 text-center text-blue-900 text-shadow-xs">
        Signup
      </h1>
      <form className=" flex flex-col gap-2" onSubmit={enviaFormulario}>
        <div className="flex flex-row gap-2">
          <div>
            <input
              type="text"
              placeholder="Nome"
              className="bg-emerald-50 rounded-sm w-full p-1 outline-none"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <small className="flex flex-row items-center gap-1 mt-1 ml-1 text-red-600">
              {mensagemErro && (
                <>
                  {mensagemErro} <IoWarningOutline />
                </>
              )}
            </small>
          </div>
          <div>
            <input
              type="text"
              placeholder="Sobrenome"
              className="bg-emerald-50 rounded-sm w-full p-1 outline-none"
              id="sobrenone"
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <small>erro</small>
          </div>
        </div>
        <input
          type="email"
          placeholder="E-mail"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <small>erro</small>
        <input
          type="email"
          placeholder="Confirme e-mail"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="confirmeEmail"
          onChange={(e) => setConfirmeEmail(e.target.value)}
        />
        <small>erro</small>
        <input
          type="password"
          placeholder="Senha"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <small>erro</small>
        <input
          type="password"
          placeholder="Confirme senha"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="confirmeSenha"
          onChange={(e) => setConfirmeSenha(e.target.value)}
        />
        <small>erro</small>
        <button
          type="submit"
          className="bg-indigo-950 text-white py-1.5 mt-2 mb-1 rounded-sm hover:bg-indigo-500 transition duration-300 ease-in-out cursor-pointer"
          id="enviar"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
