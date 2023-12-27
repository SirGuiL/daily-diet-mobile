import { isValid, set } from 'date-fns'

export class DateTimeUtils {
  static async isValidHour(hour: string) {
    if (Number(hour.substring(0, 2)) >= 24) {
      return false
    }

    if (Number(hour.substring(3, 5)) > 60) {
      return false
    }

    const currentDate = new Date()
    const dateWithHour = set(currentDate, {
      hours: Number(hour.substring(0, 2)),
      minutes: Number(hour.substring(3, 5)),
    })

    const result = isValid(dateWithHour)

    return result
  }
}
