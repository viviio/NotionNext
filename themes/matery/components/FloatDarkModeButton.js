import { useGlobal } from '@/lib/global'
import { saveDarkModeToCookies } from '@/lib/theme'
import CONFIG_MATERY from '../config_matery'

export default function FloatDarkModeButton() {
  const { isDarkMode, updateDarkMode } = useGlobal()

  if (!CONFIG_MATERY.WIDGET_DARK_MODE) {
    return <></>
  }

  // 用户手动设置主题
  const handleChangeDarkMode = () => {
    const newStatus = !isDarkMode
    saveDarkModeToCookies(newStatus)
    updateDarkMode(newStatus)
    const htmlElement = document.getElementsByTagName('html')[0]
    htmlElement.classList?.remove(newStatus ? 'light' : 'dark')
    htmlElement.classList?.add(newStatus ? 'dark' : 'light')
  }

  return (
        <div className={'flex  w-8 h-8 rounded-full transform hover:scale-80 duration-500 bg-indigo-100 dark:bg-night-card-hover' } onClick={handleChangeDarkMode}>
            <i id="darkModeButton"
                className={`m-auto ${isDarkMode ? 'fa-sun' : 'fa-moon'} fas 
                 text-white cursor-pointer`} />
        </div>
  )
}
