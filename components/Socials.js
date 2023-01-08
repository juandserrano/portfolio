/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Socials() {
  return (
    <div
      className="h-screen w-full bg-[#00080b] flex px-3 md:px-40 items-center justify-around text-yellow-400 z-40"
      id="socials"
    >
      <a href="https://github.com/juandserrano">
        <FontAwesomeIcon
          className="hover:animate-pulse md:scale-150 cursor-pointer active:scale-95 active:text-yellow-500"
          size="4x"
          icon={faGithub}
        />
      </a>
      <a href="https://linkedin.com/in/juandserrano">
        <FontAwesomeIcon
          className="hover:animate-pulse md:scale-150 cursor-pointer active:scale-95 active:text-yellow-500"
          size="4x"
          icon={faLinkedin}
        />
      </a>
      <a href="mailto:juandserrano@gmail.com">
        <FontAwesomeIcon
          className="hover:animate-pulse md:scale-150 cursor-pointer active:scale-95 active:text-yellow-500"
          size="4x"
          icon={faEnvelope}
        />
      </a>
    </div>
  );
}

export default Socials;
