/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-from-top': 'slide-in-from-top 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'in': 'fadeIn 0.5s ease-out',
        // MagicUI animations
        'shiny-text': 'shiny-text 8s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'ripple': 'ripple var(--duration,2s) ease-out infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'line-shadow': 'line-shadow 2s ease-in-out infinite',
        'aurora': 'aurora 60s ease infinite',
      },
      keyframes: {
        'slide-in-from-top': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // MagicUI keyframes
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0',
          },
        },
        'gradient': {
          to: {
            'background-position': 'var(--bg-size) 0',
          },
        },
        'ripple': {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'line-shadow': {
          '0%': {
            'background-position': '0% 50%',
          },
          '100%': {
            'background-position': '100% 50%',
          },
        },
        'aurora': {
          '0%': {
            'background-position': '50% 50%, 50% 50%',
          },
          '100%': {
            'background-position': '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
}
