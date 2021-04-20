import { useEffect, useState } from 'react'
import { cn, noop } from 'utils'
import Button from 'components/Button'
import Image from 'components/Image'
import styles from './image-grid.module.scss'

const MAX_ITEMS = 3

const ImageGrid = ({
  className,
  images,
  onSelect = noop,
  selectedIndex = 0,
  ...props
}) => {
  const [selection, setSelection] = useState(selectedIndex)
  useEffect(() => setSelection(selectedIndex), [selectedIndex])
  useEffect(() => onSelect(selection), [selection])
  const selectedImage = images[selection]
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.feature}>
        <Image src={selectedImage.src} className={styles.image} />
      </div>
      {images.slice(0, MAX_ITEMS).map(({ src }, i) => (
        <Button
          key={src}
          onClick={() => setSelection(i)}
          className={cn(styles.thumbnail, {
            [styles.selected]: i === selection,
          })}
        >
          <Image src={src} className={styles.image} />
        </Button>
      ))}
    </div>
  )
}

export default ImageGrid
