import { compose, length, lt, slice, when } from 'ramda'
import { cn } from 'utils'
import styles from './text.module.scss'

const h1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>
const h2 = ({ children, ...props }) => <h2 {...props}>{children}</h2>
const h3 = ({ children, ...props }) => <h3 {...props}>{children}</h3>
const h4 = ({ children, ...props }) => <h4 {...props}>{children}</h4>
const h5 = ({ children, ...props }) => <h5 {...props}>{children}</h5>
const h6 = ({ children, ...props }) => <h6 {...props}>{children}</h6>
const p = ({ children, ...props }) => <p {...props}>{children}</p>
const span = ({ children, ...props }) => <span {...props}>{children}</span>
const strong = ({ children, ...props }) => <strong {...props}>{children}</strong>
const em = ({ children, ...props }) => <em {...props}>{children}</em>
const mark = ({ children, ...props }) => <mark {...props}>{children}</mark>

const ELEMENTS = { h1, h2, h3, h4, h5, h6, p, span, strong, em, mark }

// mitigate typographic widows by inserting a nonbreaking space between
// the last two words, if the last word is less than 16 characters long
const insertNBSP = str =>
  str.replace(/(\s+)(\S+)$/, (match, p1, p2) =>
    p2.length < 16 ? `\u00A0${p2}` : match,
  )

const insertEllipsis = str => `${str.replace(/[.,;:\-!?\s\u2026]+$/, '')}\u2026`

const treatText = ({ count }) =>
  compose(
    insertNBSP,
    when(compose(lt(count), length), insertEllipsis),
    slice(0, count),
  )

const renderChildren = (items, maxLength) => {
  let printedCharCount = 0
  return items.reduce((content, nextChild) => {
    if (printedCharCount < maxLength) {
      switch (typeof nextChild) {
        case 'string': {
          const count = Math.min(maxLength - printedCharCount, nextChild.length)
          printedCharCount += count
          return (
            <>
              {content}
              {treatText({ count })(nextChild)}
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

const Text = ({
  allCaps = false,
  children = [],
  className,
  element,
  inline = false,
  maxLength = Infinity,
  mode = Text.MODES.inherit,
  noWrap = false,
  ...props
}) => {
  const items = Array.isArray(children) ? children : [children]
  const Element = ELEMENTS[element] ?? ELEMENTS.p
  return (
    <Element
      {...props}
      className={cn(
        mode,
        inline ? styles.inline : styles.block,
        allCaps && styles.uppercase,
        noWrap && styles.noWrap,
        className,
      )}
    >
      {renderChildren(items, maxLength)}
    </Element>
  )
}

Text.MODES = {
  body: styles.body,
  caption: styles.caption,
  heading: styles.heading,
  inherit: '',
  subheading: styles.subheading,
}

Text.ELEMENTS = Object.keys(ELEMENTS).reduce(
  (dict, key) => ({ ...dict, [key]: key }),
  {},
)

export default Text
