import HTMLComment from "react-html-comment";

const Comment = ({ children, start, end }) => {
  return (
    <>
      <HTMLComment text={start ? start : " "} />
      {children}
      <HTMLComment text={end ? end : "/"} />
    </>
  );
};

export default Comment;
