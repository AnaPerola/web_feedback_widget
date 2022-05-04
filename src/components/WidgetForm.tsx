export function WidgetForm() {
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu comentário</span>
      </header>
      <p>Hello word</p>
      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="https://github.com/AnaPerola">Ana</a>
      </footer>
    </div>
  )
}