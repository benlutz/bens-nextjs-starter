export type CookieConsentConfig = {
  consentCookieName: string
  consentCookiePath: string
  consentCookieExpiresIn: number
  cookies?: Array<CookieOption>
  texts: CookieConsentTexts
  links: CookieConsentLinks
}

type CookieConsentTexts = {
  title: string
  description: string
  acceptEssentialButtonLabel: string
  acceptAllButtonLabel: string
  resetButtonLabel: string
}

type CookieConsentLinks = {
  privacyPolicy: Link
  cookiePolicy: Link
}

type Link = {
  link: string
  label: string
}

export type Consent = {
  consentGivenAt?: Date
  cookies: Array<CookieId>
}

export type CookieId = string

export type CookieOption = {
  type: 'essential' | 'statistic' | 'marketing'
  id: CookieId
  name: string
  description: string
  expiry: string
  cookies: string
  policy: string
  callback?: Function
}
