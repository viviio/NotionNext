const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        }
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      },
      backgroundImage:{
        'radial-gradient':'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06),transparent 40%)',
      },

      animation:{
        scrollLoop:'scrollLoop 18000ms linear infinite',
      },
      
      keyframes:{
        scrollLoop:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(-50%)'},
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
