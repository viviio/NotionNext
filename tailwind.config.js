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
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff',
          'card-normal':'#f5f7f7',
          'card-hover':'#e7eaee',
          'item-normal':'#8d8d8e',
          'item-hover':'#7d8aa8',
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#151922',
          'card-normal':'#1f2532',
          'card-hover':'#303d56',
          'item-normal':'#7d8aa8',
          'item-hover':'#5e6c8d',
          'text-normal':'#c5c5c5',
        },
        hexo: {
          'background-gray': '#f5f7f7',
          'black-gray': '#1f2532',
          'light-gray': '#e5e5e5',
        },
        t:{
          'p':'#686873',
          'pn':'#9493A0',
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
        '50':'0.5',
        '80': '0.8',
        '102': '1.02',
        '105': '1.05',
        '110': '1.10',
        '120': '1.20',
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


