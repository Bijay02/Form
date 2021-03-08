import React from 'react'
import StickyFooter from 'react-sticky-footer'
import ISIContent from './isi-content'
import HCPISIContent from './hcp-isi-content'

import './isi-content.scss'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";



const isiHeight = 200

class StickyISI extends React.Component{

  state ={
    isiExpanded: false
  }

  constructor(props)
  {
    super(props);
  }

renderISI = () => {
  const path = this.props.path;
  if (path === '/hcp' || path === '/hcp/') {
    return <HCPISIContent isiExpanded={this.state.isiExpanded} />
  } else 
  {
    return <ISIContent isiExpanded={this.state.isiExpanded}/>

  }
}

renderContent = () => {
    
    if (isMobile) {
        return (
                <StickyFooter
                  bottomThreshold={this.props.FooterHeight - isiHeight}
                  normalStyles={{ backgroundColor: '#f5f5f5' }}
                  stickyStyles={{
                    backgroundColor: '#f5f5f5',
                    width: '100%',
                    height: `${isiHeight}px`,
                    boxShadow: `-1px -3px 11px 0px rgba(132, 132, 132,0.2)`,
                  }}
                  onFooterStateChange={result => {
                    console.log('changed')
                    this.setState({
                      isiExpanded: result
                    })
                  }}
                >
                  <div className="isi-wrapper">
                    {this.renderISI()}                   
                  </div> 
                </StickyFooter>
              )
    }
    return (
      <div className="isi-wrapper">
        {this.renderISI()}                   
      </div>
    )
}


  render(){
    return this.renderContent();
  }
}
export default StickyISI
