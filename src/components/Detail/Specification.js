import Figure from "./Figure";
import Detail from "./Detail";
import Ingredient from "./Ingredient";
import Direction from "./Direction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Specification = () => {
  const id = useParams().recipeId;

  return (
    <div className="recipe">
      <Figure />
      <Detail />
      <Ingredient />
      <Direction />
    </div>
  );
};

export default Specification;
