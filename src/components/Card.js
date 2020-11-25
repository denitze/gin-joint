const Card = (props) => {
    return ( 
        <section id="entertainment">
            <div className="image" style={{backgroundImage:`url(${props.bandImg})`}}>
                <h3>{props.bandGenre}</h3>
            </div>
            <div>
                <h4 className="date">{props.bandDate}</h4>
                <p className="time">{props.bandTime}</p>
                <p className="description">{props.bandDescription}</p>
            </div>
        </section>
     );
}
 
export default Card;