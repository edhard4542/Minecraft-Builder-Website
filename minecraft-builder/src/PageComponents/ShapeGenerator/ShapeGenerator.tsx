import Navigation from "../../Navigation/Navigation";
import image1 from "../assets/circle_blueprint.jpg";

export const ShapeGenerator = () => {
  return (
    <div>
      <Navigation />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Welcome to The Shape Generator!</h2>
        <p>
          Here you will be able to choose what shape you are trying to create.
          For example a circle, square, triangle, and a few others. You can then
          add your dimensions to let the generator know how big you want your
          design.
        </p>
      </div>
    </div>
  );
};

  
