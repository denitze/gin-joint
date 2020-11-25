const Instacard = (props) => {
    return ( 
        <section id="instacard">
            <div>
                 <img src="../img/Frame.png" alt="" id="logo" />
            </div>
            <figure>
                <img src={props.instaImg} alt="" />
                <figcaption>
                    <p className="comments">{props.instaComment}</p>
                    <h4 className="author">{props.instaAuthor}</h4>
                </figcaption>
            </figure>
        </section>
     );
}
 
export default Instacard;