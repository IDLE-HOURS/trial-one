import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Freetime spent wisely</h1>
    <p>Objects for livelihood</p>
    <ProductGrid />
    <Link to="/page-2/">Next Page</Link>
  </>
)

export default IndexPage
