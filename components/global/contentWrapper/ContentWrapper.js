import style from "./contentwrapper.module.scss";

export default function ContentWrapper({ children }) {
  return <div className={style.wrapper}>{children}</div>;
}
