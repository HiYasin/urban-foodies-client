import Loading from "./components/Loading"
import ThemeController from "./components/ThemeController"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <>
      <div className="flex justify-center gap-4 dark:bg-zinc-800 items-center ">
        <div className="text-orange-500 text-center font-bold text-3xl">Primary & Info</div>
        <div className="text-orange-300 text-center font-bold text-3xl">Secondary & Success</div>
        <div className="text-orange-400 text-center font-bold text-3xl">Accent & Warning</div>
        <div className="text-neutral text-center font-bold text-3xl dark:text-base-100">Neutral</div>
        <div className="text-slate-950 text-center font-bold text-3xl">Base</div>
        <ThemeController></ThemeController>
      </div>
      <Loading></Loading>
      <PageNotFound></PageNotFound>
    </>

  )
}

export default App
