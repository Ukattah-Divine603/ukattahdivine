import Frameworks from "./Frameworks";

export default function ProCard(props) {
  return (
    <>
      <div className="pro-card autoSlide">
        <div className="pro-image">
          <img src={props.image} alt="" srcset="" />
        </div>
        <p className="pro-title">{props.title}</p>
        <h3>{props.description}</h3>
        <div className="frame">{props.framework}</div>

        <a href={props.url} target="_blank">
          View Project{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}
