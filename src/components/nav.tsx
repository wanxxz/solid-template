import { Link } from 'solid-app-router'

function Nav() {
  return (
    <header $ServerOnly>
      <nav>
        <Link href="/"></Link>
      </nav>
    </header>
  )
}

export default Nav
