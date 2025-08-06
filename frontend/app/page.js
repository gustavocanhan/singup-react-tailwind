export default function Home() {
  return (
    <div className="p-4 bg-amber-400 w-90 md:w-100 rounded-md">
      <h1 className="text-xl font-medium md:text-2xl my-4 text-center text-blue-900 text-shadow-xs">
        Signup
      </h1>
      <form className=" flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="Nome"
            className="bg-emerald-50 rounded-sm w-full p-1 outline-none"
            id="nome"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="bg-emerald-50 rounded-sm w-full p-1 outline-none"
            id="sobrenone"
          />
        </div>
        <input
          type="email"
          placeholder="E-mail"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="email"
        />
        <input
          type="email"
          placeholder="Confirme e-mail"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="confirmeEmail"
        />
        <input
          type="password"
          placeholder="Senha"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="senha"
        />
        <input
          type="password"
          placeholder="Confirme senha"
          className="bg-emerald-50 rounded-sm p-1 outline-none"
          id="confirmeSenha"
        />
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
