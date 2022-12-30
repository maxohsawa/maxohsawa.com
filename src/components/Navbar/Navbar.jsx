import Logo from '../Logo/Logo';

const listItemClasses =
  'nav-item font-normal text-inherit justify-self-auto p-4 shadow-md hover:shadow-lg rounded-lg';

function Navbar() {
  return (
    <div class='navbar-div sticky bg-slate-700 flex space-x-8 pl-10 py-8'>
      <Logo />
      <ul class='inline-flex justify-evenly w-full pr-24 ml-8 space-x-8 ml-8'>
        <li class={listItemClasses}>
          <button>Skills</button>
        </li>
        <li class={listItemClasses}>
          <button>Projects</button>
        </li>
        <li class={listItemClasses}>
          <button>Contact</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
