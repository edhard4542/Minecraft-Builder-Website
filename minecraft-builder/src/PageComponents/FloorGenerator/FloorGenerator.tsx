import Navigation from "../../Navigation/Navigation";
import image1 from "../FloorGenerator/floor_desgins.jpg";
export const FloorGenerator = () => {
  const headerStyle = {
    backgroundImage: `url(${image1.toString()})`,
   
  };
  return (
    <div>

      <Navigation />
      FloorGenerator
    </div>
  );
};
