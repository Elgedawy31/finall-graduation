
const Discreption = ({ desc }) => {
  return (
    <>
      <div className="discription">
        <div className="cilcle"></div>
        <span className="dash">
          ------------------------------------------------------
        </span>
        <div className="cilcle"></div>
        <p className="p_description">Discription</p>
        <p className="p_desc_description">{desc}</p>
        <div className="cilcle"></div>
        <span className="dash">
          ------------------------------------------------------
        </span>
        <div className="cilcle"></div>
      </div>
    </>
  );
};
export default Discreption;
