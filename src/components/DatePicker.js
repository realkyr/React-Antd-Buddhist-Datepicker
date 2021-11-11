import { Dayjs } from 'dayjs'
import dayjsGenerateConfig from './thaiconfig'
import generatePicker from 'antd/es/date-picker/generatePicker'
import dayjs from 'dayjs'

import 'dayjs/locale/de'
import 'antd/es/date-picker/style/index'


export const DatePicker = generatePicker(dayjsGenerateConfig)