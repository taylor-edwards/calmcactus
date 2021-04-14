export const cn = (...args) =>
  args
    .reduce((classString, classData) => {
      switch (true) {
        case typeof classData === 'string':
          return `${classString} ${classData}`

        case Array.isArray(classData):
          return `${classString}${cn(...classData)}`

        case typeof classData === 'object': {
          const names = Object.entries(classData)
            .filter(([, condition]) => {
              switch (typeof condition) {
                case 'boolean':
                  return condition
                case 'function':
                  return condition()
                default:
                  return !!condition
              }
            })
            .map(([name]) => name)
          return [classString, ...names].join(' ')
        }

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
