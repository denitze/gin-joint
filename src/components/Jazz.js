import bandData from "../data/bands.json"
import Card from "./Card"

const Jazz = () => {
    return ( 
        <section id="jazz">
            <p id="covid">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
        <div id="cards">
        {bandData.map(singleData =>  <Card 
            bandGenre = {singleData.genre}
            bandDate = {singleData.date}
            bandTime = {singleData.time}
            bandDescription = {singleData.description}
            bandImg = {singleData.image}
            key = {singleData.id}
            
        />)}
        </div>
        </section>
     );
}
 
export default Jazz;
