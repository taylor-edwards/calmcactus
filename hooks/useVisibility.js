import { useEffect, useState } from 'react'
import useID from 'hooks/useID'

const observeElement = (() => {
  let observer = null

  const handlers = {
    // [scopeID]: fn IntersectionObserverEntry -> void
  }

  const handleIntersection = entries => {
    entries.forEach(entry => {
      const scopeID = entry.target.dataset.visibilityScope
      if (scopeID in handlers) {
        handlers[scopeID](entry)
      }
    })
  }

  return (scopeID, handler, element) => {
    if (element) {
      element.dataset.visibilityScope = scopeID
      handlers[scopeID] = handler
      if (process.browser && !observer) {
        observer = new IntersectionObserver(handleIntersection, {
          rootMargin: '0px',
          threshold: 0,
        })
      }
      if (observer) {
        observer.observe(element)
      }
    }

    return () => {
      if (element) {
        if (observer) {
          observer.unobserve(element)
        }
        delete handlers[scopeID]
      }
    }
  }
})()

const useVisibility = (ref, initiallyVisible = false) => {
  const scopeID = useID([ref])

  const [visibility, setVisibility] = useState({
    boundingClientRect: null,
    intersectionRatio: null,
    intersectionRect: null,
    isVisible: initiallyVisible,
    rootBounds: null,
    time: null,
  })

  useEffect(() => {
    const destroyObserver = observeElement(
      scopeID,
      entry =>
        setVisibility({
          boundingClientRect: entry.boundingClientRect,
          intersectionRatio: entry.intersectionRatio,
          intersectionRect: entry.intersectionRect,
          isVisible: entry.isIntersecting,
          rootBounds: entry.rootBounds,
          time: entry.time,
        }),
      ref?.current,
    )

    return () => destroyObserver()
  }, [ref])

  return visibility
}

export default useVisibility
