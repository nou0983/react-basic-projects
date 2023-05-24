import SingleColour from "../singleColour/SingleColour";
import { v4 as uuidv4 } from "uuid";
import './colourList.css'

const ColourList = ({ colors }) => {
  return (
    <section className="color-list">
      {colors.map((color, index) => {
        return <SingleColour key={uuidv4()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColourList;
