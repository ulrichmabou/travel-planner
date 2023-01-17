import React from "react"

export default function Card(props) {
    let singleDay
    if (props.startDate === props.endDate) {
        singleDay = true
    } else {
        singleDay = false
    }
    
    return (
        <div className="card">
            <div className="card--illustration">
                <img src={props.imageUrl} className="card--image"/>
            </div>
            <div className="card--content">
                <div className="card--content-location">
                    <img src="../images/pin.png" className="card--content-pin"/>
                    <p className="card--content-locationtext">{props.location}</p>
                    <a href={props.googleMapsUrl} className="card--content-map" target="_blank">
                    View on Google Maps
                    </a>
                </div>
                <h1 className="card--content-title">{props.title}</h1>
                <div className="card--content-dates">
                    <span>{props.startDate}</span>
                    {!singleDay && <span> - </span>}
                    {!singleDay && <span>{props.endDate}</span>}
                </div>
                <p className="card--content-description">{props.description}</p>
                <a href={props.websiteUrl} className="card--content-website" target="_blank">
                    View website
                </a>
            </div>      
        </div>
    )
}
