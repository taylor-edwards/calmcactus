import { forwardRef } from 'react'
import { compose, map, slice, when } from 'ramda'
import { cn } from 'utils'
import styles from './text.module.scss'

const h1 = ({ children, ...props }, ref) => <h1 ref={ref} {...props}>{children}</h1>
const h2 = ({ children, ...props }, ref) => <h2 ref={ref} {...props}>{children}</h2>
const h3 = ({ children, ...props }, ref) => <h3 ref={ref} {...props}>{children}</h3>
const h4 = ({ children, ...props }, ref) => <h4 ref={ref} {...props}>{children}</h4>
const h5 = ({ children, ...props }, ref) => <h5 ref={ref} {...props}>{children}</h5>
const h6 = ({ children, ...props }, ref) => <h6 ref={ref} {...props}>{children}</h6>
const p = ({ children, ...props }, ref) => <p ref={ref} {...props}>{children}</p>
const span = ({ children, ...props }, ref) => <span ref={ref} {...props}>{children}</span>
const strong = ({ children, ...props }, ref) => <strong ref={ref} {...props}>{children}</strong>
const em = ({ children, ...props }, ref) => <em ref={ref} {...props}>{children}</em>
const mark = ({ children, ...props }, ref) => <mark ref={ref} {...props}>{children}</mark>

const ELEMENTS = map(forwardRef, { h1, h2, h3, h4, h5, h6, p, span, strong, em, mark })

// mitigate typographic widows by inserting a nonbreaking space between
// the last two words when the last word is relatively short
const insertNBSP = str =>
  str.replace(/(\s+)(\S+)$/, (match, p1, p2) =>
    p2.length < 12 ? `\u00A0${p2}` : match,
  )

const insertEllipsis = str => `${str.replace(/[.,;:\-!?\s\u2026]+$/, '')}\u2026`

const treatText = (maxLength, text) =>
  compose(
    insertNBSP,
    when(truncatedText => truncatedText.length < text.length, insertEllipsis),
    slice(0, maxLength),
  )(text)

const renderChildren = (items, maxLength) => {
  let printedCount = 0
  return items.reduce((content, nextChild) => {
    if (printedCount < maxLength) {
      switch (typeof nextChild) {
        case 'string': {
          const count = Math.min(maxLength - printedCount, nextChild.length)
          printedCount += count
          return (
            <>
              {content}
              {treatText(count, nextChild)}
            </>
          )
        }

        default:
          return (
            <>
              {content}
              {nextChild}
            </>
          )
      }
    }
    return content
  }, '')
}

const Text = (
  {
    allCaps = false,
    children = [],
    className,
    element,
    inline = false,
    maxLength = Infinity,
    mode = HookedText.MODES.inherit,
    noWrap = false,
    ...props
  },
  ref,
) => {
  const items = Array.isArray(children) ? children : [children]
  const Element = ELEMENTS[element] ?? ELEMENTS.p
  return (
    <Element
      className={cn(
        mode,
        {
          [styles.inline]: inline,
          [styles.block]: !inline,
          [styles.uppercase]: allCaps,
          [styles.noWrap]: noWrap,
        },
        className,
      )}
      ref={ref}
      {...props}
    >
      {renderChildren(items, maxLength)}
    </Element>
  )
}

const HookedText = forwardRef(Text)

HookedText.MODES = {
  body: styles.body,
  caption: styles.caption,
  heading: styles.heading,
  inherit: '',
  subheading: styles.subheading,
}

HookedText.ELEMENTS = Object.keys(ELEMENTS).reduce(
  (dict, key) => ({ ...dict, [key]: key }),
  {},
)

export default HookedText
