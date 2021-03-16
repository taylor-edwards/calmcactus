import ProductCard from 'components/ProductCard'

const Shop = () => (
  <div>
    Shop page!
    <ProductCard
      title="Label"
      subtitle="Not too wordy description"
      imageSrc="http://layoutpatterns.com/images/grid.png"
      href="/shop/some-product"
    />
  </div>
)

export default Shop
