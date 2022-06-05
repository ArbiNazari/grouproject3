import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">BoundListAdventure.com -  The Smart Itinerary Manager</p>
      <hr />
      <img className="pic" src={process.env.PUBLIC_URL + '/img/index.png'} alt="BLA"/>
      <p className="content is-italic mt-4">

      </p>
      <p className="content1">
      It is that time of the year that you are ready for your vacation or it is simply a weekly business trip. BoundListAdventures.com is an itinerary manager that allows the user to manage alerts on flights and activities they will be doing during their trip.
BoundListAdventures.com takes the hassle out of running numerous applications and manages all your flight information, destinations and activities into one application.
      </p>
      <br>
      </br>
      <p className="content1">
      BoundListAdventures.com is an itinerary manager that allows the user to see there schedule flights and what activities they will be doing during their trip to their destination before heading back to their original location.
      </p>

      <p className="content">
      <a href="/">Click Here To Sign Up for Free</a>

      </p>

    </div>
  );
}

export default About;