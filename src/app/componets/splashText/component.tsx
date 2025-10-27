import { useEffect, useRef, useState } from "react";
import "./style.scss";

type SplashTextProps = {
  splashTextContent: string[];
};

export default function SplashText({ splashTextContent }: SplashTextProps) {
  const [textData, setTextData] = useState({
    currentText: "Laboratory",
    writing: false,
    selector: 0,
    pause: false,
  });

  const [splashText, setSplashText] = useState<string[]>([]);
  const [splashTextApresentation, setSplashTextApresentation] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSplashText(splashTextContent);
  }, [splashTextContent]);

  useEffect(() => {
    if (splashText.length === 0) return;

    const loopStep = () => {
      setTextData((prev) => {
        let { currentText, writing, selector, pause } = prev;
        if (pause) return prev;

        if (!writing) {
          if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            setSplashTextApresentation(currentText);
          } else {
            writing = true;
          }
        } else {
          const targetText = splashText[selector];
          if (currentText !== targetText) {
            currentText += targetText[currentText.length];
            setSplashTextApresentation(currentText);
          } else {
            writing = false;
            selector = (selector + 1) % splashText.length;
            pause = true;
            setTimeout(() => {
              setTextData((p) => ({ ...p, pause: false }));
            }, 3000);
          }
        }

        return { currentText, writing, selector, pause };
      });
    };

    intervalRef.current = setInterval(loopStep, 120);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [splashText]);

  return (
    <>
      <p className={`splash-caret ${textData.writing ? "writing" : ""}`}>
        {splashTextApresentation}
      </p>
    </>
  );
}
