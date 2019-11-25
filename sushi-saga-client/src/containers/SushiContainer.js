import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.currentSushi.map(sushi => <Sushi key={sushi.id} sushiObj={sushi} onEatSushi={props.onEatSushi} eatenSushi={props.eatenSushi}/>)} 
        <MoreButton onMoreSushi={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer