import "./style.scss";

type InlineCodeProps = {
  children: string;
};

export default function inlineCode({ children }: inlineCodeProps) {
  return <b className="inlineCode">{children}</b>;
}
