export default {
  content: ['./src/**/*.{html,js,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
      keyframes: {
        error: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        error: 'error 150ms linear infinite',
      },
    },
    fontFamily: {
      nabla: 'Nabla',
    },
  },
  plugins: [],
}
