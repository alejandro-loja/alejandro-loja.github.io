import React from "react";
const cardStyles = {
    width: "14rem"
};

const imageStyle = {
    height: '10rem'
}
export function ProjectCard(props) {

    const {src, alt, title, gitLink, siteLink} = props;
    return (
        <div className="m-4 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-1 text-light bg-secondary text-center" style={cardStyles}>
            <img src={src} style={imageStyle} className="card-img-top" alt={alt} />
            <div className="card-body p-0 pt-2">
                <h6 className="card-title p-1 m-0">{title}</h6>
                {/* <p className="card-text">{desc}</p> */}
                <div className="m-0 mb-1">
                <a href={gitLink} className="btn btn-info btn-sm m-1">GitHub</a>
                <a href={siteLink} className="btn btn-info btn-sm m-1">Website</a>
                </div>
            </div>
        </div>
    )
}

