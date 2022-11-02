import config from "./cookie-consent.config";
import Cookies from "js-cookie";
import { Consent, CookieId } from "./types";

export const getConsentCookie = () => {
  const consentCookie = Cookies.get(config.consentCookieName);
  if (consentCookie) return JSON.parse(consentCookie);
};

export const setConsentCookie = (consent: Consent) => {
  consent.consentGivenAt = new Date();
  Cookies.set(config.consentCookieName, JSON.stringify(consent), {
    path: config.consentCookiePath,
    expires: config.consentCookieExpiresIn,
  });
};

export const removeConsentCookie = () => {
  Cookies.remove(config.consentCookieName);
};

export const hasConsentCookie = () => {
  if (getConsentCookie()) return true;
  else return false;
};

export const fireCallbacks = () => {
  if (!hasConsentCookie()) return;

  config.cookies?.map((cookie) => {
    if (getConsentCookie().cookies.includes(cookie.id)) cookie.callback?.();
  });
};

export const hasConsentFor = (cookieId: CookieId) => {
  return getConsentCookie()?.cookies?.includes(cookieId);
};
