import "./RenderComponent.css";
const RenderComponent = (props) => {
  return (
    <div className="item">
      {props.name} ({props.age} years old)
    </div>
  );
};

export default RenderComponent;
