import createMiddleware from "next-intl/middleware";
import { defaultLocale } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ja"],

  // Used when no locale matches
  defaultLocale: defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ja|en)/:path*"],
};
