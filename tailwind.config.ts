import type { Config } from 'tailwindcss';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    fontFamily: {
      main: 'var(--fontName), sans-serif'
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primaryVeryLight: 'rgb(var(--color-primaryVeryLight) / <alpha-value>)',
        primaryDarker: 'rgb(var(--color-primaryDarker) / <alpha-value>)',
        primaryLighter: 'rgb(var(--color-primaryLighter) / <alpha-value>)', 
        
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        secondaryVeryLight: 'rgb(var(--color-secondaryVeryLight) / <alpha-value>)',
        secondaryDarker: 'rgb(var(--color-secondaryDarker) / <alpha-value>)',
        secondaryLighter: 'rgb(var(--color-secondaryLighter) / <alpha-value>)',

        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
} satisfies Config;
