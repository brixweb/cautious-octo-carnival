import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../components/LocaleSwitcher";
import { locales } from "../../config";

export default function Home() {
  const idx = useTranslations("Index");
  const lsw = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <>
      <h1>{idx("title")}</h1>
      <LocaleSwitcher defaultValue={locale} label={lsw("label")}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {lsw("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcher>
    </>
  );
}
