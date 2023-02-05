import "./Journal.css"

export default function Journal(props){
return(
    <div className="journal-post">
        {/* <div className="photo-div" /> */}
        <img className="photo-div" src={props.imageUrl} alt="Journal pic"/>
        <div className="journal-info">
            <div className="location">
                <img className="pin" src={require("../pin.png")} alt="location pin icon"/>
                <h4 className="country">{props.location.toUpperCase()}</h4>
                <a className="google-link" href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <h3 className="title">{props.title}</h3>
            <h5 className="date">{props.startDate} - {props.endDate}</h5>
            <p className="description">{props.description}              
            </p>
        </div>
    </div>
)
}