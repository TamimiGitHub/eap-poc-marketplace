import * as React from "react"
// import { AnimationWrapper } from "react-hover-animation"

const APIProductsDetails = ({ productID }) => {
  const [product, setProduct] = React.useState(null)
  const [eventIDs, setEventIDs] = React.useState(null)
  const [events, setEvents] = React.useState(null)

  const PRODUCT_URL = "https://console.solace.cloud/api/v0/eventPortal/apiProducts"
  const EVENTS_URL = "https://console.solace.cloud/api/v1/eventPortal/events"

  const solaceCloudHeaders = {
    method: "GET",
    headers: {
      Accept: "application/json",
      mode: "no-cors",
      Authorization: `Bearer ${process.env.GATSBY_SOLACE_CLOUD_TOKEN}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }

  // Fetch all designerIDs from a product
  React.useEffect(() => {
    if (productID) {
      fetch(`${PRODUCT_URL}/${productID}`, solaceCloudHeaders)
        .then(res => res.json())
        .then(({ data }) => {
          setProduct(data)
          const ids = data.externalEvents
            .map(event => {
              return event.designerId
            }).join(",")
          setEventIDs(ids)
        })
    }
  }, [productID])

  // Fetch all Events details for a product
  React.useEffect(() => {
    if (eventIDs) {
      fetch(`${EVENTS_URL}?ids=${eventIDs}`, solaceCloudHeaders)
        .then(res => res.json())
        .then(({ data }) => {
          setEvents(data)
          console.log("EVENT IDS: ", data)
        })
    }
  }, [eventIDs])

  console.log("PRODUCT", product)

  if (events) {
    return (
      <div>
        {events.map(event => {
          ;<div>{event.name}</div>
        })}
      </div>
    )
  } else {
    return <div>No events</div>
  }
}

export default APIProductsDetails
