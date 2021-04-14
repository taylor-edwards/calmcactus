import { useMemo } from 'react'
import { range } from 'utils'

const useID = (deps = []) => {
  const chars = 'ABCDEFGHKMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz0123456789'
  const id = useMemo(
    () =>
      range(0, 16)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join(''),
    deps,
  )
  return id
}

export default useID
