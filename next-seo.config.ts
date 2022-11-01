import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Bens NextJS Starter',
  titleTemplate: '%s | bens-nextjs-starter',
  description: 'Lorem Ipsum',
  canonical: 'https://www.benjaminlutz.at',
  //   openGraph: {
  //     type: 'website',
  //     locale: 'en_IE',
  //     url: 'https://www.url.ie/',
  //     siteName: 'SiteName',
  //   },
  //   twitter: {
  //     handle: '@handle',
  //     site: '@site',
  //     cardType: 'summary_large_image',
  //   },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}

export default config
