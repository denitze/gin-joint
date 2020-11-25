import InstaCard from "./InstaCard"

const Instagram = () => {
    return ( 
        <section id="instagram">

        <InstaCard 
                instaComment="A trick door opening to Bathtub Gin, a hopping Chelsea gin joint harkening back to the days of false store fronts"
                instaAuthor= "The Guardian"
                instaImg="../img/gin 1.jpg"
                 />

<InstaCard 
                instaComment="Life on the inside: exactly how you imagined it’d be... nailhead-tucked bar stools and—smack-dab in the center of the room—a glass-covered, claw-foot bathtub."
                instaAuthor= "Urban Daddy"
                instaImg="../img/jack 1.jpg"
                 />
           
        </section>
     );
}
 
export default Instagram;