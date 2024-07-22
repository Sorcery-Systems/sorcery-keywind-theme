import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbd4a7',          
          100: '#f9c489',          
          200: '#f8b46c',          
          300: '#f5a44f',          
          400: '#f39230',          
          500: '#F28300',          
          600: '#e27200',          
          700: '#d46300',          
          800: '#c55500',          
          900: '#b74800',          
          950: '#a83a00'          
        },
        secondary: {
          50: '#fbf0ff',
          100: '#e5d6e9',
          200: '#cfbcd4',
          300: '#b9a2bf',
          400: '#a48aaa',
          500: '#907195',
          600: '#7c5a81',
          700: '#69436d',
          800: '#562d59',
          900: '#411644',
          950: '#431646'
        },

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
