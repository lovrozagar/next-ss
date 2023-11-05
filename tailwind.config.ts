import { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'tone-mode': 'hsl(var(--tone-mode))',
        'tone-mode-contrast': 'hsl(var(--tone-mode-contrast))',
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        'extra-larger': 'calc(var(--radius) + 6px)',
        'large': 'calc(var(--radius) + 4px)',
        'larger': 'calc(var(--radius) + 2px)',
        'DEFAULT': 'var(--radius)',
        'smaller': 'calc(var(--radius) - 2px)',
        'small': 'calc(var(--radius) - 4px)',
        'extra-small': 'calc(var(--radius) - 6px)',
      },
      boxShadow: {
        'button-medium-primary':
          '0px 2px 20px -2px hsla(var(--primary)), 0px 0px 10px -4px hsla(var(--primary))',
        'button-medium-destructive':
          '0px 2px 20px -2px hsla(var(--destructive)), 0px 0px 10px -4px hsla(var(--destructive))',
        'button-small-primary':
          '0px 2px 10px -2px hsla(var(--primary)), 0px 0px 5px -4px hsla(var(--primary))',
        'button-extra-small-destructive':
          '0px 1px 5px -2px hsla(var(--destructive)), 0px 0px 2px -4px hsla(var(--destructive))',
      },
      ringWidth: {
        'ring-width': 'var(--ring-width)',
      },
      ringOffsetWidth: {
        offset: 'var(--ring-offset)',
      },
      scale: {
        'active-button-scale': 'var(--active-button-scale)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'ripple-animation': {
          from: {
            transform: 'scale(0)',
          },
          to: {
            transform: 'scale(1)',
            opacity: '0',
          },
        },
        'ripple-fill-and-hold-animation': {
          to: {
            transform: 'scale(4)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ripple-animation': 'ripple-animation 0.5s linear forwards',
        'ripple-fill-and-hold-animation': 'ripple-fill-and-hold-animation 0.5s linear forwards',
      },
    },
  },
}

export default config
