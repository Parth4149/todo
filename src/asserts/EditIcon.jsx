const EditIcon = () => {
  const style = {
    fill: "none",
    stroke: "#475569",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      strokeWidth="1.5"
      color="#000"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      style={{ margin: "0 4px" }}
    >
      <path
        d="M7.23 20.59l-4.78 1 1-4.78L17.89 2.29a2.69 2.69 0 011.91-.79 2.7 2.7 0 012.7 2.7 2.69 2.69 0 01-.79 1.91z"
        style={style}
      ></path>
      <path d="M0.55 22.5L23.45 22.5" style={style}></path>
      <path d="M19.64 8.18L15.82 4.36" style={style}></path>
    </svg>
  );
};

export default EditIcon;
