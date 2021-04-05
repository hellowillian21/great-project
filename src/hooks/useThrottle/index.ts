import { useEffect, useRef, useState } from 'react'

const useThrottle = (fn: Function, ms: number = 30, deps: string[] = []) => {
  const previous = useRef<number>(0)
  const [time, setTime] = useState<number>(ms)

  useEffect(() => {
    const now = Date.now()
    if (now - previous.current > time) {
      fn()
      previous.current = now
    }
  }, deps)

  const cancel = () => {
    setTime(0)
  }
  return [cancel]
}

export default useThrottle
