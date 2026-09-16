import { useEffect, useState } from 'react'

export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
    setFine(mql.matches)
    const handler = (e) => setFine(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return fine
}
