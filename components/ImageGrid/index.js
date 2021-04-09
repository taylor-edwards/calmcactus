import { useState } from 'react'
import { cn } from 'utils'
import Button from 'components/Button'
import Image from 'components/Image'
import styles from './image-grid.module.scss'

const MAX_ITEMS = 3

const ImageGrid = ({ images, className, ...props }) => {
  const [selection, setSelection] = useState(0)
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
          className={styles.thumbnail}
        >
          <Image src={src} className={styles.image} />
        </Button>
      ))}
    </div>
  )
}

export default ImageGrid
