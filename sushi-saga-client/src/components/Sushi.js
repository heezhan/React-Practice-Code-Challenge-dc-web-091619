import React, { Fragment } from 'react'

const Sushi = (props) => {

  const {id, name, img_url, price} = props.sushiObj

  let getImage = (url) => {
    let newUrl
    if (url.includes("imgur")) {
      newUrl = require('../assets/RJGr3Xs.png')
    } else {
      newUrl = require(`../assets/sushi-slice_${url.split("_")[1]}`)
    }
    return newUrl
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.onEatSushi(props.sushiObj)}>
        { 
          props.eatenSushi.includes(props.sushiObj) ? (null) : (<img src={getImage(img_url)} alt={""} width="100%" />)
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi

