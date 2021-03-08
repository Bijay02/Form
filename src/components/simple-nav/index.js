import ActiveLink from '../active-link'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import EventEmitter from '../../lib/emitter'
//import navList from './nav-config'

import './simple-nav.scss'

const handleClick = () =>  {
  EventEmitter.emit('CLOSE_MOBILEMENU', true)
}
{
  /**
   * Refer to ./nav-config.js to update menu values.
   * Desktop menu specific styles are included in ./simple-nav.scss
   * */
}
const SimpleNav = props => (
  <ul className={`main-nav ${props.className}`}>
        <li>
          <a onClick={()=>handleClick()} href="http://www.endo.com/File%20Library/Products/Prescribing%20Information/Xiaflex_prescribing_information.html" target="_blank">FULL PRESCRIBING INFORMATION</a>
        </li>
        <li>
          <AnchorLink href="#isi_jump" offset='60' onClick={()=>handleClick()}>IMPORTANT SAFETY INFORMATION</AnchorLink>
        </li>

  </ul>
)

export default SimpleNav
