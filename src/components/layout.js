import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-gray-900">
      <main className="p-10">{children}</main>
      {/* <footer style={{ marginTop: `2rem` }}>
        © {new Date().getFullYear()}, Solace Marketplace
      </footer> */}
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
