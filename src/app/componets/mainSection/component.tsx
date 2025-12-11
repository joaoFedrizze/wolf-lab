import { useState, useEffect } from "react";
import { getSplashtexts } from "@/app/services/splashText";
import "./style.scss";

import SplashTextComponent from "../splashText/component";

export default function MainSection() {
  const [splashText, setSplashText] = useState<string[]>([]);

  useEffect(() => {
    getSplashtexts().then((data) => {
      setSplashText(data);
    });
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
            <span key={i} className={`banner-line${i + 1}`} />
          ))}
        </span>
        <div className="banner-text">
          <h2>WOLF</h2>
          {splashText.length < 0 || splashText == undefined ? (
            ""
          ) : (
            <SplashTextComponent splashTextContent={splashText} />
          )}
        </div>
      </div>
    </section>
  );
}
