export default function Address() {
  return (
    <div className="address-container">
      <h2>Where We Plan To Party?</h2>

      <div className="address-details">
        
        <div className="time">
          <p className="left">Time</p>
          <p className="right">1pm to 5pm</p>
        </div>

        <div className="address">
          <p className="left">Where:</p>
          <ul className="right">
            <li> Roundwood Unity Centre (precise location TBC) </li>
            <li>Church Road Harlesden</li>
            <li> NW10 9PG</li>
          </ul>
        </div>

        <div className="parking">
          <p className="left">Parking:</p>
          <p className="right">An abundance of free parking bays are available on the main road and surrounding 
            roads all day
          </p>
        </div>

        <div className="dress-code">
          <p className="left">Dress Code:</p>
          <p className="right">Glam yourselves up in your best party attire and come looking Instagram ready!
          </p>
        </div>

        <div className="details">
            <p className="left">Details:</p>
          <p className="right">
            Please arrive early so you don't miss out on the good parts
            of the day. 
          </p>
        </div>
     
      </div>
    </div>
  );
}
