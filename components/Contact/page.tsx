export default function Contact() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-4xl font-bold p-4">Contact</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
        <div className="rounded-2xl bg-zinc-800 p-5">
          <h1 className="text-xl font-bold">Phone</h1>
          <p className="text-slate-400">+92-334-2105187</p>
        </div>
        <div className="rounded-2xl bg-zinc-800 p-5">
          <h1 className="text-xl font-bold">Email</h1>
          <p className="text-slate-400">tayyab.ali98@hotmail.com</p>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-800 rounded-2xl p-5 m-5">
        <h1 className="text-3xl text-slate-400 font-bold">
          I'm always open to discussing product
        </h1>
        <h1 className="text-2xl font-bold">design work or partnerships.</h1>
      </div>
    </div>
  );
}
