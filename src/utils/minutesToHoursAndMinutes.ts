export const minutesToHoursAndMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const minutesLeft = minutes % 60
  return `${hours}h${minutesLeft}m`
}