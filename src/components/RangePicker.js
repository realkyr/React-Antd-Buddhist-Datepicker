import moment from 'moment'
import generatePicker from 'antd/es/date-picker/generatePicker/generateRangePicker'
import momentConfig from 'rc-picker/lib/generate/moment'

moment.locale('en')

const oldFormat = moment.prototype.format

moment.prototype.format = function (format) {
  const result = format.replace('BBBB', this._d.getFullYear() + 543)

  return oldFormat.bind(this)(result)
}

moment.prototype.year = function (input) {
  console.log(moment.locale())
  const yearBias = moment.locale() === 'th' ? 543 : 0
  const annoYear = this._d.getFullYear()

  const bdyear = annoYear + yearBias

  if (!input) return bdyear

  const diff = -(bdyear - input)

  return this.add(diff, 'year')
}

export const RangePicker = generatePicker(momentConfig)
