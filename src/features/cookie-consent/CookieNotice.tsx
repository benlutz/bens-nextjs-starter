"use client";
import config from "./cookie-consent.config";
import React from "react";
import {
  fireCallbacks,
  hasConsentCookie,
  removeConsentCookie,
  setConsentCookie,
} from "./helpers";
import { Consent, CookieId } from "./types";

const initialConsent = {
  cookies: [],
};

export const CookieNotice = () => {
  const [consent, setConsent] = React.useState<Consent>(initialConsent);
  const [showNotice, setShowNotice] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!hasConsentCookie()) {
      setShowNotice(true);
    } else {
      fireCallbacks();
    }
  }, []);

  const saveConsent = () => {
    console.log("Saving Consent to cookie", consent);
    setConsentCookie(consent);
    setShowNotice(false);
    fireCallbacks();
  };

  const resetConsentCookie = () => {
    console.log("Resetting Consent");
    setConsent(initialConsent);
    removeConsentCookie();
    location.reload();
  };

  const addToConsent = (cookieId: CookieId) => {
    const newConsent = consent;
    if (!newConsent?.cookies.includes(cookieId))
      newConsent?.cookies.push(cookieId);
    setConsent(newConsent);
  };

  const acceptEssential = () => {
    setConsent(initialConsent);

    config.cookies?.map((cookie) => {
      if (cookie.type === "essential") addToConsent(cookie.id);
    });
    saveConsent();
  };

  const acceptAll = () => {
    config.cookies?.map((cookie) => {
      addToConsent(cookie.id);
    });
    saveConsent();
  };

  if (!showNotice)
    return <p onClick={() => setShowNotice(true)}>Open Notice</p>;

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        position: "sticky",
        bottom: 0,
        margin: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}
    >
      <div>
        <h2>{config.texts.title}</h2>
        <p>{config.texts.description}</p>
        {config.links.cookiePolicy && (
          <p>
            &rarr;{" "}
            <a href={config.links.cookiePolicy.link}>
              {config.links.cookiePolicy.label}
            </a>
          </p>
        )}

        {config.links.privacyPolicy && (
          <p>
            &rarr;{" "}
            <a href={config.links.privacyPolicy.link}>
              {config.links.privacyPolicy.label}
            </a>
          </p>
        )}
      </div>

      <div style={{ display: "flex", textAlign: "right", gap: 15 }}>
        {hasConsentCookie() ? (
          <button onClick={resetConsentCookie}>
            {config.texts.resetButtonLabel}
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                acceptEssential();
              }}
            >
              {config.texts.acceptEssentialButtonLabel}
            </button>
            <button
              onClick={() => {
                acceptAll();
              }}
            >
              {config.texts.acceptAllButtonLabel}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
