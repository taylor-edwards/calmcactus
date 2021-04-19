export const noop = () => {}

export const cn = (...inputs) =>
  inputs
    .reduce((classString, classData) => {
      switch (true) {
        case typeof classData === 'string':
          return `${classString} ${classData}`

        case Array.isArray(classData):
          return `${classString} ${cn(...classData)}`

        case typeof classData === 'object':
          return [classString]
            .concat(
              Object.entries(classData)
                .filter(([, condition]) => !!condition)
                .map(([className]) => className),
            )
            .join(' ')

        default:
          return classString
      }
    }, '')
    .replace(/(^\s+|\s+$)/g, '')

export const range = (m, n) => {
  const list = []
  const delta = Math.sign(n - m)
  let i = m
  while (delta > 0 ? i < n : i > n) {
    list.push(i)
    i += delta
  }
  return list
}
