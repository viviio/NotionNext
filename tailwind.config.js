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
        '1/10':'10%',
        '2/10':'20%',
        '3/10':'30%',
        '4/10':'40%',
        '5/10': '50%',
        '6/10':'60%',
        '7/10':'70%',
        '8/10': '80%',
        '9/10': '90%'
      }
    },
      scale:{
        '102': '1.02',
      },
      maxHeight: {
        '128':'56rem',
        '1/4':'25%',
        '1/2':'50%',
        '3/4':'75%',
      }

  },
  variants: {
    extend: {}
  },
  plugins: []
}
