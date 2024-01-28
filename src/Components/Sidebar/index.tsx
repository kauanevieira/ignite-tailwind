import Logo from './Logo'
import InputSearch from './InputSearch'
import MainNavigation from './MainNavigation'

export default function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <InputSearch />
      <MainNavigation />
    </aside>
  )
}
