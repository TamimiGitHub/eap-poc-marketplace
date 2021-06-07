import "../css/image.css"

import React, { useState, useEffect } from "react"
// import { AnimationWrapper } from "react-hover-animation"
import Layout from "../components/layout"
import APIProduct from "../components/apiProducts"
import APIProductsDetails from "../components/apiProductDeets"
import SEO from "../components/seo"

const IndexPage = () => {
  const [appState, setAppState] = useState({
    loading: false,
    apiProducts: null,
    productID: null,
  })

  const [productID, setProductID] = useState(null)

  const API_PRODUCT_URL =
    "https://console.solace.cloud/api/v0/eventPortal/apiProducts"

  const solaceCloudHeaders = {
    method: "GET",
    headers: {
      Accept: "application/json",
      mode: "no-cors",
      Authorization: `Bearer ${process.env.GATSBY_SOLACE_CLOUD_TOKEN}`,
      "Access-Control-Allow-Origin": "*",
    },
  }

  useEffect(() => {
    setAppState({ loading: true })
    fetch(API_PRODUCT_URL, solaceCloudHeaders)
      .then(res => res.json())
      .then(products => {
        setAppState({ loading: false, apiProducts: products })
      })
  }, [setAppState])

  return (
    <Layout>
      <SEO title="Home" />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            {/* <AnimationWrapper className="animate-bounce"> */}
            <h1>Marketplace</h1>
            {/* </AnimationWrapper> */}
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="App">
              <div className="container">
                <h1>Public API Products</h1>
              </div>
              <div className="repo-container">
                <APIProduct
                  products={appState.apiProducts}
                  isLoading={appState.loading}
                  setProductID={setProductID}
                />
              </div>
              <div className="repo-container">
                <APIProductsDetails productID={productID} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
