import { CookieConsentConfig } from './types'

const config: CookieConsentConfig = {
  consentCookieName: 'cookie-notice',
  consentCookiePath: '/',
  consentCookieExpiresIn: 7,
  texts: {
    title: 'Wir verwenden Cookies',
    description:
      'Im Interesse der Benutzerfreundlichkeit verwenden wir auf unseren Seiten Cookies.',
    acceptEssentialButtonLabel: 'Nur notwendige Cookies akzeptieren',
    acceptAllButtonLabel: 'Alle Cookies akzeptieren',
    resetButtonLabel: 'Einstellungen zurücksetzen',
  },
  links: {
    privacyPolicy: {
      link: '#',
      label: 'Datenschutzerklärung',
    },
    cookiePolicy: {
      link: '#',
      label: 'Cookie-Richtlinie',
    },
  },
  cookies: [
    {
      type: 'essential',
      id: 'consent-cookie',
      name: 'Cookie Consent',
      description: '',
      cookies: 'consent-cookie',
      expiry: '',
      policy: '',
    },
    {
      type: 'statistic',
      id: 'google-analytics',
      name: 'Google Analytics',
      description: '',
      cookies: '_ga',
      expiry: '',
      policy: '',
      callback: () => console.log('GA Initialized'),
    },
    {
      type: 'marketing',
      id: 'facebook-pixel',
      name: 'Facebook',
      description: '',
      cookies: '_fb',
      expiry: '',
      policy: '',
      callback: () => console.log('FB Ads Initialized'),
    },
  ],
}

export default config
