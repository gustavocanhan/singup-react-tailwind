export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 md:p-6 bg-amber-400 rounded-md">
      <h1 className="font-bold text-2xl text-amber-50 mb-4">Signup</h1>
      <form className=" flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="Nome"
            className="bg-emerald-50 rounded-sm p-1"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="bg-emerald-50 rounded-sm p-1"
          />
        </div>
        <input
          type="email"
          placeholder="E-mail"
          className="bg-emerald-50 rounded-sm p-1"
        />
        <input
          type="email"
          placeholder="Confirme e-mail"
          className="bg-emerald-50 rounded-sm p-1"
        />
        <input
          type="password"
          placeholder="Senha"
          className="bg-emerald-50 rounded-sm p-1"
        />
        <input
          type="password"
          placeholder="Confirme senha"
          className="bg-emerald-50 rounded-sm p-1"
        />
        <button type="submit">Enviar</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
