const Figure = (props) => {
  return (
    <figure className="recipe__fig">
      <img src={props.image} alt="Recipe Image" className="recipe__img" />
      <h1 className="recipe__title">
        <span>{props.title}</span>
      </h1>
    </figure>
  );
};

export default Figure;
