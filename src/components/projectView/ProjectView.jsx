import { AiOutlineDoubleRight } from "react-icons/ai";
import "./ProjectView.css";

export default function ProjectView(props) {
  const description = props.description;
  const link = props.link;
  const image = props.image;

  return (
    <div className="project-view">
      <figure>
        <img src={image} />
        <figcaption>
          <h1>{description}</h1>
          <a href={link} target="_blank">
            <span>Visit Website</span>
            <AiOutlineDoubleRight />
          </a>
        </figcaption>
        <div className="overlay"></div>
      </figure>
    </div>
  );
}
