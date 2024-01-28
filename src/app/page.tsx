export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-black sm:text-5xl lg:text-6xl">
          Hello Word
        </h1>
        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60">
          Sign In
        </button>
      </div>
    </div>
  )
}
