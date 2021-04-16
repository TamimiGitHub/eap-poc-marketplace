import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Marketplace</h1>
    </div>
    <p>Solace data stream marketplace</p>
    <p>
      Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet
      nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis
      orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit
      amet nullam dolore.
    </p>

    <div class="items-center justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 ld:grid-cols-3 gap-x-8 gap-y-12">
        <button class="transition transform hover:-translate-y-1 hover:shadow-2xl bg-blue-100 p-10 rounded">
          1
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          2
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          3
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          4
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          5
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          6
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          7
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          8
        </button>
        <button class="transition transform hover:-translate-y-1 bg-blue-100 p-10 hover:shadow-2xl rounded">
          9
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
