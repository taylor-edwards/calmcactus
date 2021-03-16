export const cn = (...args) =>
  args
    .reduce((acc, next) => {
      switch (typeof next) {
        case 'string':
          return `${acc} ${next}`
        case 'object':
          if (Array.isArray(next)) {
            return `${acc}${cn(...next)}`
          }
          const names = Object.entries(next)
            .filter(([name, condition]) => {
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
        default:
          return acc
      }
    }, '')
    .replace(/(^\s+|\s+$)/g, '')
