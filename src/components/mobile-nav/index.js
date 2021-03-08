import React from 'react'
import SimpleNav from '../simple-nav'
import './mobile-nav.scss'

{
  /**
   * Refer to simple-nav/nav-config.js to update menu values.
   * Mobile menu specific styles are included in ./mobile-nav.scss
   * */
}

const MobileNav = (props) => (
  <div className="off-canvas">
    <SimpleNav className="mobile-menu" />
  </div>
)

export default MobileNav
