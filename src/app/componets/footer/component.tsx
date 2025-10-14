import "./style.scss";

import { projectVersion, lastUpdate } from "../../config";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function footerComponent() {
  return (
    <footer className="footer">
      <div>
        <h2>Contatos</h2>
        <ul>
          <li>
            <Link href="https://github.com/joaoFedrizze">
              <LuGithub className="socialIcon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-fedrizze/">
              <FaLinkedinIn className="socialIcon" />
            </Link>
          </li>
          <li>
            <Link href="mailto:joaofedrizzecomercial@hotmail.com">
              <MdOutlineEmail className="socialIcon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-version">
        Wolf lab - versão {projectVersion} - {lastUpdate}
      </div>
    </footer>
  );
}
