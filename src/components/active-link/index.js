import React from 'react'
import { Link } from "gatsby"
import { pushEventGA } from "../../lib/util.helper"

const ActiveLink = (props) => (
   !props.ExternalLink ?
    <Link to={props.to} activeClassName={props.EnableActiveClass ? "active" : ""} onClick={()=>pushEventGA(props.EventObject)} className={props.className}>{props.children}</Link>
    :
    <a href={props.to} target="_blank" onClick={()=>pushEventGA(props.EventObject)} className={props.className}>{props.children}</a>
);

export default ActiveLink
