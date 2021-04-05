import { useEffect, useRef } from 'react'

const useDebounce = (fn: Function, ms: number = 30, deps: string[] = []) => {
  const timeout = useRef<number | null>()

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      fn()
    }, ms)
  }, deps)

  const cancel = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = null
  }

  return [cancel]
}

export default useDebounce
