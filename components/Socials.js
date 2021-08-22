/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Socials() {
  return (
    <div
      className="h-screen w-full bg-[rgb(11,22,40)] flex items-center justify-center space-x-40 pl-20 text-yellow-400 z-40"
      id="socials"
    >
      <a href="https://github.com/juandserrano">
        <FontAwesomeIcon
          className="hover:animate-pulse cursor-pointer active:scale-95 active:text-yellow-500"
          height="80"
          icon={faGithub}
        />
      </a>
      <a href="https://linkedin.com/in/juandserrano">
        <FontAwesomeIcon
          className="hover:animate-pulse cursor-pointer active:scale-95 active:text-yellow-500"
          height="80"
          icon={faLinkedin}
        />
      </a>
      <a href="mailto:juandserrano@gmail.com">
        <FontAwesomeIcon
          className="hover:animate-pulse cursor-pointer active:scale-95 active:text-yellow-500"
          height="80"
          icon={faEnvelope}
        />
      </a>
    </div>
  );
}

export default Socials;
