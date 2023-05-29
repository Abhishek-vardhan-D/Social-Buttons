const Button = (props) => {
  //  Write your code here.\
  const { name, className } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button name="LIKE" className="like-btn" />
        <Button name="Comment" className="comment-btn" />
        <Button name="Share" className="share-btn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
