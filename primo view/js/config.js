import { _replace } from '../../gerador/primoReplace.js'
// import { _replace } from '../../gerador/courseReplace.js'
import { rawScript, teach } from '../../script/primo/doing-a.js'

export const config = {
  alternateLanguagePercent: 0,
  percentAnswerShow: 1,
}

export const myReplace = _replace
export const _myScript = { rawScript, teach }
