import { useParams } from 'react-router'
import { products } from '../data/product'
import TopBanner from '../components/ProductId/TopBanner'
import ProductDetailed from '../components/ProductId/DetailedProducts'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === id)

  return (
    <>
      <TopBanner title={product?.title} />
      <ProductDetailed />
    </>
  )
}

export default ProductDetails
