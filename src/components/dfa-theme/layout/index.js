import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { Grid } from "react-flexbox-grid";
import posed, { PoseGroup } from "react-pose";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import EventEmitter from "../../../lib/emitter";
import Header from "../header";
import Footer from "../footer";
import StickyISI from "../../sticky-isi";
import Interstitial from "../../interstitial";
import MobileNav from "../../mobile-nav";
import "./layout.css";
import "../../../scss/hamburgers/hamburgers.scss";
import "../../../scss/xiaflex-theme.scss";

//Animation for the mobile//off canvas menu
const PosedAnimation = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

let interstitialSubscription = null;
let closeOffCanvasSubscription = null;

class Layout extends Component {
  state = {
    showMobileMenu: false,
    headerHeight: 0,
    footerHeight: 0,
    showInterstitial: false,
    interstitialAwayURL: "",
    path: false,
  };

  constructor(props) {
    super(props);
  }

  //Toggle mobile/offcanvas menu
  toggleMenu = () => {
    this.setState((prevState) => ({
      showMobileMenu: !prevState.showMobileMenu,
    }));
  };

  resize = () => {
    console.log("fired");

    this.setState({
      headerHeight: this.headerRef.clientHeight,
    });

    /**
     * If ISI is not needed remove the following state (footerHeight).
     * Also remove 'StickyISI' component call in this page.
     */
    this.setState({
      footerHeight: this.footerRef.clientHeight,
    });
  };

  //Close the Interstitial
  closeInterstitial = () => {
    this.setState({
      showInterstitial: false,
    });
  };

  componentDidMount() {
    //Trigger resize on component load
    setTimeout(() => {
      this.resize();
    }, 50);

    const path = window.location.pathname;

    this.setState({ path: path });

    //Trigger resize on window resize
    window.addEventListener("resize", this.resize);

    //Subscription for interstitial modal window
    interstitialSubscription = EventEmitter.addListener(
      "OPEN_INTERSTITIAL",
      (data) => {
        this.setState({ interstitialAwayURL: data.url });
        this.setState({
          showInterstitial: true,
        });
      }
    );
  }

  componentWillMount() {
    closeOffCanvasSubscription = EventEmitter.addListener(
      "CLOSE_MOBILEMENU",
      (data) => {
        this.toggleMenu();
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    interstitialSubscription && interstitialSubscription.remove();
    closeOffCanvasSubscription && closeOffCanvasSubscription.remove();
  }

  render() {
    const { showMobileMenu } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content: this.props.meta && this.props.meta.description,
                },
                {
                  name: "keywords",
                  content: this.props.meta && this.props.meta.keywords,
                },
              ]}
            >
              <html lang="en" />
              <script src="https://cdn.polyfill.io/v2/polyfill.js?features=es6&flags=gated" />
            </Helmet>
            <div className="dfa-app">
              <header
                className="base-header"
                ref={(_header) => {
                  this.headerRef = _header;
                }}
                style={{ zIndex: this.state.showMobileMenu ? 0 : 1 }}
              >
                <Header />
              </header>
              {/* <button
                className={`hamburger hamburger--elastic hamburger-icon ${this
                  .state.showMobileMenu && 'is-active'}`}
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
                aria-expanded="true/false"
                onClick={this.toggleMenu}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button> */}
              {/*Body starts here*/}
              <div className="base-container">
                <div
                  className="base-body"
                  style={{ paddingTop: this.state.headerHeight + 16 }}
                >
                  <Grid fluid className="ie-width">
                    {this.props.children}
                  </Grid>
                </div>
              </div>
              {/*Body ends here*/}
              <a name="isi_jump" id="isi_jump">
                &nbsp;
              </a>
              <footer
                className="base-footer"
                ref={(_footer) => {
                  this.footerRef = _footer;
                }}
              >
                {/*If ISI is not required the StickyISI component should be removed*/}
                <StickyISI
                  FooterHeight={this.state.footerHeight}
                  path={this.state.path}
                />
                {/** ISI ends here */}

                <Footer />
              </footer>
              <Interstitial
                visible={this.state.showInterstitial}
                onClickAway={this.closeInterstitial}
                interstitialAwayURL={this.state.interstitialAwayURL}
              />
              {/*Off Canvas menu starts here*/}
              <PoseGroup>
                {showMobileMenu && [
                  <PosedAnimation key="anim1" className="posed-anim-wrapper">
                    <MobileNav />
                  </PosedAnimation>,
                ]}
              </PoseGroup>
              {/*Off Canvas menu ends here*/}
            </div>
          </Fragment>
        )}
      />
    );
  }
}

export default Layout;
