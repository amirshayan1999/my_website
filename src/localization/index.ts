import en_us from './en'
import fa_ir from './fa'

type langType = 'fa' | 'en'
type directionType = 'rtl' | 'ltr'
const lang = (
  localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
) as langType

export { lang }

const direction = {
  fa: 'rtl',
  en: 'ltr'
}
const getDirection = () => {
  return direction[lang] as directionType
}
export { getDirection }

const fonts = {
  fa: 'IRANSans',
  en: 'Ubuntu'
}

const getFonts = () => {
  return fonts[lang]
}

export { getFonts }

const translate = {
  fa: fa_ir,
  en: en_us
}
const getTranslate = () => {
  return translate[lang]
}
export { getTranslate }

const changeLang = (lang: string) => {
  localStorage.setItem('lang', lang)
  window.location.reload()
}
export { changeLang }
