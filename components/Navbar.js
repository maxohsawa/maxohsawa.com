import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className={'navbar'}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>Skills</Link></li>
        <li><Link href='/'>Projects</Link></li>
        <li><Link href='/'>Experience</Link></li>
        <li><Link href='/'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar