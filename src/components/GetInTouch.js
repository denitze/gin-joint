const GetInTouch = () => {
    return ( 
        <section id="touch">
            <article id="touchContact">
                <div>
                    <p className="uppercase">Get in Touch</p>
                    <div id="address">
                        <p>132 9th Avenue</p>
                        <p>New York, NY 10011</p>
                        <p>646-559-1671</p>
                        <p>Info@btgnyc.com</p>
                    </div>
                </div>
                <div id="operation">
                    <p className="uppercase">Hours of Operation</p>
                    <div className="operationHours">
                        <p>Monday</p>
                        <p>8AM - 4PM</p>
                        <p>Tuesday - Friday</p>
                        <p>8AM - 10PM</p>
                        <p>Saturday</p>
                        <p>9AM - 10PM</p>
                        <p>Sunday</p>
                        <p>9AM - 4PM</p>
                    </div>
                </div>
            </article>
            <article id="touchForm">
                <form action="">
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="email" name="" id="" placeholder="Email Address" />
                    <input type="number" name="" id="" placeholder="Mobile" />
                    <textarea rows="10" cols="50" name="comment" form="usrform" placeholder="Message"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </article>
        </section>
     );
}
 
export default GetInTouch;