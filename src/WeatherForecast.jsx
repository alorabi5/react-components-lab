const WeatherForecast = (prop) => {
    return (
  <>
    <div className="weather">
      <h2>{prop.wether.day}</h2>
      <img src={prop.wether.img} alt={prop.wether.imgAlt} />
      <p>
        <span>conditions: </span>
        {prop.wether.conditions}
      </p>
      <p>
        <span>time: </span>
        {prop.wether.time}
      </p>
    </div>
  </>);
};

export default WeatherForecast;
