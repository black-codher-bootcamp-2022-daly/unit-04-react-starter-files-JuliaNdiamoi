function Booklist(props) {
    return (
      <div>
        <h1>Julia's library</h1>
        <div className="booklist-container">{props.children}</div>
      </div>
    );
  }
  export default Booklist;