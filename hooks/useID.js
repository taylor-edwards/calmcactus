import { useMemo } from 'react'
import { range } from 'utils'

const useID = (deps = []) => {
  const chars = 'ABCDEFGHKMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz0123456789'
  return useMemo(
    () =>
      range(16)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join(''),
    deps,
  )
}

export default useID
