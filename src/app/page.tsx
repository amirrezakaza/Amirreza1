import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  DEFAULT_LOCALE,
  isValidLocale,
  LOCALE_COOKIE_NAME,
} from "@/i18n/config";

export default async function RootRedirectPage() {
  const cookieStore = await cookies();
  const saved = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  const target = isValidLocale(saved) ? saved : DEFAULT_LOCALE;
  redirect(`/${target}`);
}
