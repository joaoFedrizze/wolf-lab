import Link from "next/link";
import "./style.scss";

import { getPatch } from "@/app/services/patch";

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

import InlineCode from "../inlineCode/component";
import { useEffect, useState } from "react";

type PatchSectionProps = {
  isApresentation: boolean;
};

export type PatchListItem =
  | { text: string }
  | { code: string }
  | { link: string; url: string }
  | string;

export type PatchListGroup = PatchListItem[];

export interface PatchContent {
  title: string;
  icon: string;
  list: PatchListGroup[];
}

export interface PatchVersion {
  name: string;
  time: string;
  patch_id: number;
}

export interface PatchData {
  version: PatchVersion;
  content: PatchContent[];
}

export default function PatchSection({ isApresentation }: PatchSectionProps) {
  const [patchData, setPatchData] = useState<PatchData[] | []>([]);
  const renderContent = isApresentation
    ? [patchData[0], patchData[1]]
    : patchData;

  useEffect(() => {
    getPatch().then((data) => {
      setPatchData(data);
    });
  }, []);

  const DynamicIcon = ({ iconName }: { iconName: string }) => {
    const iconPacks = {
      Fa: FaIcons,
      Io: IoIcons,
      Si: SiIcons,
      Di: DiIcons,
    };

    const prefix = iconName.slice(0, 2);
    const pack = iconPacks[prefix as keyof typeof iconPacks];
    const IconComponent = pack ? (pack as any)[iconName] : null;

    if (!IconComponent) {
      return <span>Ícone não encontrado: {iconName}</span>;
    }

    return <IconComponent className="icon" />;
  };

  const DynamicText = ({ content }: { content: any }) => {
    if (content.text != undefined) {
      return <>{content.text}</>;
    } else if (content.code != undefined) {
      return <InlineCode> {content.code} </InlineCode>;
    } else if (content.link != undefined) {
      if (typeof content.url === "string" && content.url.trim() !== "") {
        return <Link href={content.url}>{content.link}</Link>;
      }
    }

    return <></>;
  };

  return (
    <section className="patch">
      <div className="title">
        <h2>Notas de atualização</h2>

        <p>Acompanhe o que foi feito no projeto</p>
      </div>

      <span className="line-container">
        <span className="line" />
        <FaIcons.FaCodeBranch className="line-image" />
        <span className="line" />
      </span>

      <div className="patch-notes">
        {patchData.length < 1 ? (
          <>
            {Array.from({ length: isApresentation ? 2 : 5 }).map((_, i) => (
              <span key={i} className="patch-skeleton" />
            ))}
          </>
        ) : (
          renderContent.map((item, index) => {
            return (
              <div key={`patch-` + index} className="patch-article">
                <div className="patch-title">
                  <h3>
                    {item.version.name} <time>{item.version.time}</time>
                  </h3>
                </div>
                {item.content.map((content, index) => {
                  return (
                    <div key={`listItem-` + index}>
                      <h4>
                        <DynamicIcon iconName={content.icon} /> {content.title}
                      </h4>

                      <ul>
                        {content.list.map((listItem, index) => {
                          return (
                            <li key={`listContent-` + index}>
                              <p>
                                {listItem.map((textItem, index) => {
                                  return (
                                    <DynamicText
                                      key={`textItem` + index}
                                      content={textItem}
                                    />
                                  );
                                })}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })
        )}
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
