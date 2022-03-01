const Direction = (props) => {
  return (
    <div className="recipe__directions">
      <h2 className="heading--2">How to cook it</h2>
      <p className="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span className="recipe__publisher"> {props.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a
        className="btn--small recipe__btn"
        href={props.sourceUrl}
        target="_blank"
      >
        <span>Directions</span>
        <svg className="search__icon">
          <use href="./icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  );
};

export default Direction;
