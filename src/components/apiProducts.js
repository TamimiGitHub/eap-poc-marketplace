import * as React from "react"
// import { AnimationWrapper } from "react-hover-animation"
// import taxi from "../images/plane.png"

const APIProducts = ({products, isLoading, setProductID}) => {
  console.log({ products })

  function handleOnclick(e, product) {
    setProductID(product.id)
  }

  if (isLoading) {
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Fetching API Products
      </p>
    )
  }
  if (!products || products.length === 0)
    return <p>No API Products available</p>
  return (
    <div>
      {products.data.map(product => {
        return (
          <button
            key={product.id}
            className="transition opacity-50 transform hover:-translate-y-1-100 hover:shadow-2xl rounded p-1 w-1/2"
            onClick = { (e) => handleOnclick(e, product) }
          >
            <span className="repo-text"> {product.name} </span>
          </button>
        )
      })}
    </div>
  )
}

export default APIProducts
