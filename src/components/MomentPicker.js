import moment from 'moment'
import generatePicker from 'antd/es/date-picker/generatePicker'
import momentConfig from 'rc-picker/lib/generate/moment'

moment.prototype.year = function (input) {
  // console.log(moment.locale())
  const yearBias = moment.locale() === 'th' ? 543 : 0
  const annoYear = this._d.getFullYear()

  const bdyear = annoYear + yearBias

  if (!input) return bdyear

  const diff = -(bdyear - input)

  return this.add(diff, 'year')
}

export const MomentPicker = generatePicker(momentConfig)
