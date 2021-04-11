export const cn = (...args) =>
  args
    .reduce((acc, next) => {
      switch (typeof next) {
        case 'string':
          return `${acc} ${next}`

        case 'object': {
          if (Array.isArray(next)) {
            return `${acc}${cn(...next)}`
          }
          const names = Object.entries(next)
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
          return [acc, ...names].join(' ')
        }

        default:
          return acc
      }
    }, '')
    .replace(/(^\s+|\s+$)/g, '')

export const range = (m, n) => {
  const a = []
  if (typeof n === 'number') {
    const delta = Math.sign(n - m)
    for (let i = m; delta > 0 ? i <= n : i >= n; i += delta) {
      a.push(i)
    }
  } else {
    for (let i = 0; i < m; i++) {
      a.push(i)
    }
  }
  return a
}
