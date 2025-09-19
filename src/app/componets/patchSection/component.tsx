import Link from "next/link";
import "./style.scss";

import { FaNodeJs, FaSass, FaCodeBranch, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function PatchSection() {
  return (
    <section className="patch">
      <div className="title">
        <h2>Notas de atualização</h2>

        <p>Acompanhe o que foi feito no projeto</p>
      </div>

      <span className="line-container">
        <span className="line" />
        <FaCodeBranch className="line-image" />
        <span className="line" />
      </span>

      <div className="patch-notes">
        <div className="patch-article">
          <div className="patch-title">
            <h3>
              Versão 1.3.1 <time>00/09/2025</time>
            </h3>
          </div>

          <h4>
            <FaReact className="icon" /> React
          </h4>
          <ul>
            <li>
              + Projeto foi separado em componentes permitindo uma melhor
              organização
            </li>
            <li>
              + Um novo componente patch section foi adicionado, ele é utilizado
              como uma pequena preview para a página de patch note
            </li>
            <li>
              + Loops foram adicionados para simplificar o código em main
              section
            </li>
            <li>
              + Frases foram adicionadas na splash text do site: GIT, SCSS,
              NodeJS
            </li>
            <li>
              + Página de patch note foi implementado onde mostra todas as notas
              para um resumo de como está a evolução do projeto
            </li>
          </ul>

          <h4>
            <FaNodeJs className="icon" /> Node JS
          </h4>
          <ul>
            <li>+ Adicionado a biblioteca de React icons</li>
          </ul>
        </div>

        <div className="patch-article">
          <div className="patch-title">
            <h3>
              Versão 1.2.2 <time>02/09/2025</time>
            </h3>
          </div>

          <h4>
            <FaSass className="icon" /> SCSS
          </h4>
          <ul>
            <li>
              + Foram adicionados uma folha de estilo para o Header e para main
              section na página inicial
            </li>
            <li>
              + Uma pequena diversão foi adicionada na main section ao passar o
              mouse nos banners
            </li>
            <li>
              - Classe alpha que era utilizada para testes foi removida do
              código
            </li>
          </ul>
          <h4>
            <IoLogoJavascript className="icon" />
            JavaScript
          </h4>
          <ul>
            <li>
              + Uma animação de simulando um texto digitando na main section foi
              adicionado
            </li>
          </ul>
        </div>

        <div className="patch-article">
          <div className="patch-title">
            <h3>
              Versão 1.0.0 <time>02/09/2025</time>
            </h3>
          </div>

          <h4>
            <FaReact className="icon" /> React
          </h4>
          <ul>
            <li>+ Início do projeto, alguns quadrados azuis sem sentido</li>
          </ul>
        </div>
        <div className="shadow-line">
          <Link href="/patchNote">Continue lendo aqui</Link>
        </div>
      </div>
    </section>
  );
}
