import React, { Component } from 'react'
import myEmitter from '../../lib/emitter'
import { pushEventGA } from '../../lib/util.helper'

/**
 * Example usage:
 * =============
 *
 * const metaTags= { category: "External Link", action: "Click", label: "Deerfield Homepage" };
 * <ExternalLink data-url="http://www.deerfieldagency.com" className="example-class" meta={metaTags}/>
 *
 */
class ExternalLink extends Component {
    constructor() {
        super()
    }

    handleClick = (_meta) => {

        pushEventGA(_meta);
        myEmitter.emit('OPEN_INTERSTITIAL', {
            url: this.navLink.dataset.url
        })
    }

    render() {
        return (
            <a
                href="javascript:void(0);"
                ref={lnk => {
                    this.navLink = lnk
                }}
                data-url={this.props.href}
                className={this.props.className}
                onClick={() => { this.handleClick(this.props.meta) }}
            >
                {this.props.children}
            </a>
        )
    }
}

export default ExternalLink
