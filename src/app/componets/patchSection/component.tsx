import Link from "next/link";
import "./style.scss";

import {
  FaNodeJs,
  FaSass,
  FaCodeBranch,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function PatchSection({ isApresentation }) {
  const content = [
    {
      version: { name: "Versão 1.3.1", time: "11/10/2025" },
      content: [
        {
          title: "React",
          icon: <FaReact className="icon" />,
          list: [
            "+ Projeto foi separado em componentes permitindo uma melhor organização",
            "+ Um novo componente patch section foi adicionado, esse componente permite ter um modo de apresentação para a home do projeto",
            "+ Loops foram adicionados para simplificar o código em main section",
            "+ Frases foram adicionadas na splash text do site: GIT, SCSS, NodeJS, Docker",
            "+ Página de patch note foi implementado onde mostra todas as notas para um resumo de como está a evolução do projeto",
          ],
        },
        {
          title: "Node JS",
          icon: <FaNodeJs className="icon" />,
          list: ["+ Adicionado a biblioteca de React icons"],
        },
        {
          title: "Docker",
          icon: <FaDocker className="icon" />,
          list: ["+ Arquivos Dockerfile e .dockerignore"],
        },
      ],
    },
    {
      version: { name: "Versão 1.2.2", time: "02/09/2025" },
      content: [
        {
          title: "SCSS",
          icon: <FaSass className="icon" />,
          list: [
            "+ Foram adicionados uma folha de estilo para o Header e para main section na página inicial",
            "+ Uma pequena diversão foi adicionada na main section ao passar o mouse nos banners",
            "- Classe alpha que era utilizada para testes foi removida do código",
          ],
        },
        {
          title: "JavaScript",
          icon: <IoLogoJavascript className="icon" />,
          list: [
            "+ Uma animação de simulando um texto digitando na main section foi adicionado",
          ],
        },
      ],
    },
    {
      version: { name: "Versão 1.0.0", time: "02/09/2025" },
      content: [
        {
          title: "React",
          icon: <FaReact className="icon" />,
          list: ["+ Início do projeto, alguns quadrados azuis sem sentido"],
        },
      ],
    },
  ];

  const renderContent = isApresentation ? [content[0], content[1]] : content;

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
        {renderContent.map((item, index) => {
          return (
            <div key={`patch-` + index} className="patch-article">
              <div className="patch-title">
                <h3>
                  {item.version.name} <time>{item.version.time}</time>
                </h3>
              </div>

              {item.content.map((item, index) => {
                return (
                  <div key={`listItem-` + index}>
                    <h4>
                      {item.icon} {item.title}
                    </h4>

                    <ul>
                      {item.list.map((item, index) => {
                        return <li key={`listContent-` + index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
        {isApresentation ? (
          <div className="shadow-line">
            <Link href="/patchNote">Continue lendo aqui</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
