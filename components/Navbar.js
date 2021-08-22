/* eslint-disable react/react-in-jsx-scope */
import {
  InformationCircleIcon,
  CodeIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Navbar({ activeTab, setActiveTab }) {
  const switchToText = (tag) => {
    tag.children[0].style.opacity = 1;
    tag.children[1].style.opacity = 0;
  };

  const switchToIcon = (tag) => {
    tag.children[0].style.opacity = 0;
    tag.children[1].style.opacity = 1;
  };

  const handleClick = (tag, section) => {
    setActiveTab(tag);
    window.location.replace(section);
  };

  return (
    <nav className="bg-[rgb(11,22,40)] w-20 h-screen fixed flex flex-col items-center space-y-12 justify-center z-50 text-yellow-400">
      <div
        id='iAbout'
        onMouseEnter={(event) => switchToText(event.currentTarget)}
        onMouseLeave={(event) => switchToIcon(event.currentTarget)}
        onClick={(e) => handleClick(e.currentTarget, "/#main")}
        className="text-xs flex flex-col items-center justify-center relative h-10 w-full transition-opacity duration-500 cursor-pointer"
      >
        <p className="h-full flex items-center absolute transition-opacity duration-500 opacity-0">
          About
        </p>
        <UserIcon className="h-full w-full z-50 absolute" />
      </div>

      <div
      id='iStacks'
        onMouseEnter={(event) => switchToText(event.currentTarget)}
        onMouseLeave={(event) => switchToIcon(event.currentTarget)}
        onClick={(e) => handleClick(e.currentTarget, "/#experience")}
        className="text-xs flex flex-col items-center justify-center relative h-10 w-full transition-opacity duration-500 cursor-pointer"
      >
        <p className="h-full flex items-center absolute transition-opacity duration-500 opacity-0">
          Stacks
        </p>
        <InformationCircleIcon className="h-full w-full z-50 absolute" />
      </div>

      <div id='iProjects'
        onMouseEnter={(event) => switchToText(event.currentTarget)}
        onMouseLeave={(event) => switchToIcon(event.currentTarget)}
        onClick={(e) => handleClick(e.currentTarget, "/#projects")}
        className="text-xs flex flex-col items-center justify-center relative h-10 w-full transition-opacity duration-500 cursor-pointer"
      >
        <p className="h-full flex items-center absolute transition-opacity duration-500 opacity-0">
          Projects
        </p>
        <CodeIcon className="h-full w-full z-50 absolute" />
      </div>

      <div id='iContact'
        onMouseEnter={(event) => switchToText(event.currentTarget)}
        onMouseLeave={(event) => switchToIcon(event.currentTarget)}
        onClick={(e) => handleClick(e.currentTarget, "/#socials")}
        className="text-xs flex flex-col items-center justify-center relative h-10 w-full transition-opacity duration-500 cursor-pointer"
      >
        <p className="h-full flex items-center absolute transition-opacity duration-500 opacity-0">
          Contact
        </p>
        <MailIcon className="h-full w-full z-50 absolute" />
      </div>
    </nav>
  );
}

export default Navbar;
