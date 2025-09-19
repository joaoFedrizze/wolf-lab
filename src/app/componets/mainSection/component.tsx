import { useState, useEffect, useRef } from "react";
import "./style.scss";

export default function MainSection() {
  const [textData, setTextData] = useState({
    content: [
      "React",
      "HTML",
      "CSS3",
      "Java_Script",
      "Laboratory",
      "GIT",
      "SCSS",
      "NodeJS",
    ],
    currentText: "Laboratory",
    writing: false,
    selector: 0,
    pause: false,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loopStep = () => {
      setTextData((prev) => {
        let { content, currentText, writing, selector, pause } = prev;

        if (pause) return prev;

        if (!writing) {
          if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
          } else {
            writing = true;
          }
        } else {
          const targetText = content[selector];
          if (currentText !== targetText) {
            currentText += targetText[currentText.length];
          } else {
            writing = false;
            selector = (selector + 1) % content.length;
            pause = true;

            setTimeout(() => {
              setTextData((p) => ({ ...p, pause: false }));
            }, 3000);
          }
        }

        return { content, currentText, writing, selector, pause };
      });
    };

    intervalRef.current = setInterval(loopStep, 120);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="main-content">
      <div className="main-content-text">
        <h1>Sejam bem vindos</h1>

        <p>
          Esse é o Wolf Lab, um projeto de estudo para desenvolvimento web, o
          que vocês estão vendo aqui foi desenvolvido com Nodejs
        </p>

        <h2>O que é exatamente esse projeto?</h2>

        <p>
          Ele é um ambiente de estudo de programação, mas gosto de dizer que é
          um grande quebra cabeça para mim ou um jogo eletrônico onde eu posso
          estar resolvendo desafios e apresentando o que posso estar fazendo
        </p>

        <p>
          Seja muito bem vindo e divirta-se explorando esse laboratório virtual
        </p>
      </div>

      <div className="main-content-banner">
        <span>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={`banner-line${i + 1}`}></span>
          ))}
        </span>

        <div className="banner-text">
          <h2>WOLF</h2>
          <p>{textData.currentText}</p>
        </div>
      </div>
    </section>
  );
}
