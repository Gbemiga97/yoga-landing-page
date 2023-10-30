import { navigation } from "../data"


const Nav = () => {
  return (
    <nav className="ml-[70px]">

      <ul className="flex gap-x-[2.8rem]">
        {
          navigation.map(({name, href}, i) => (
            <li key={i}>
              <a
              href={href}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav