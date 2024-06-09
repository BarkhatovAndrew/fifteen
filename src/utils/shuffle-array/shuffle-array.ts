/* eslint-disable */
// @ts-nocheck
import { getRandomNumber } from '@/utils/get-random-number'

function shuffleSelf<T>(array: T[], size?: number): T[] {
  var index = -1,
    length = array.length,
    lastIndex = length - 1

  size = size === undefined ? length : size
  while (++index < size) {
    var rand = getRandomNumber(index, lastIndex),
      value = array[rand]

    array[rand] = array[index]
    array[index] = value
  }
  array.length = size
  return array
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = array.slice()
  return shuffleSelf(newArray)
}
