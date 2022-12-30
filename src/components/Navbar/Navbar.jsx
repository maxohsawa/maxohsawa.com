import Logo from '../Logo/Logo';
import './Navbar.css';

const listItemClasses =
  'nav-item w-1/6 justify-self-auto px-4 py-4 shadow-sm hover:shadow-lg rounded-lg';

function Navbar() {
  return (
    <div class='navbar-div flex shadow-md space-x-8 pl-10 py-8'>
      <Logo />
      <ul class='inline-flex justify-evenly w-full pr-24 ml-8 space-x-8 ml-8'>
        <li class={listItemClasses}>Skills</li>
        <li class={listItemClasses}>Projects</li>
        <li class={listItemClasses}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
