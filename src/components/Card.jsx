import Button from "./Button";
import Frameworks from "./Frameworks";
import Icon from "./Icon";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="img-cont">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="intro-text">
          <h5>{props.title}</h5>
          <p>{props.name}</p>
          <h6>{props.optional}</h6>
          <h2>{props.description}</h2>
        </div>
      </div>
    </>
  );
}
