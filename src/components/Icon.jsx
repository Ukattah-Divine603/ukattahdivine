export default function Icon(props) {
    return(
        <>
        <div className="icon">
          <a href={props.href}>{props.svg}</a>
        </div>
        </>
    )
}