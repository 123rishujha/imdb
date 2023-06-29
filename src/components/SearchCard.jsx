
const SearchCard = ({ title, date_published, country }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        height: "150px",
        width: "100px",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overFlow: "hidden",
      }}
    >
      <p style={{ display: "flex", flexWrap: "wrap",margin:"0px",padding:"0px" }} >{title}</p>
      <p style={{ display: "flex", flexWrap: "wrap",margin:"0px",padding:"0px" }} >{date_published}</p>
      <p style={{ display: "flex", flexWrap: "wrap",margin:"0px",padding:"0px" }} >{country}</p>
    </div>
  );
};

export default SearchCard;
