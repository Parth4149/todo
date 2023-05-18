const DeleteIcon = () => {
  const style = {
    fill: "none",
    stroke: "#475569",
    "stroke-miterlimit": "10",
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
        d="M16.88 22.5H7.12a1.9 1.9 0 01-1.9-1.8L4.36 5.32h15.28l-.86 15.38a1.9 1.9 0 01-1.9 1.8z"
        style={style}
      ></path>
      <path d="M2.45 5.32L21.55 5.32" style={style}></path>
      <path
        d="M10.09 1.5h3.82a1.91 1.91 0 011.91 1.91v1.91H8.18V3.41a1.91 1.91 0 011.91-1.91z"
        style={style}
      ></path>
      <path d="M12 8.18L12 19.64" style={style}></path>
      <path d="M15.82 8.18L15.82 19.64" style={style}></path>
      <path d="M8.18 8.18L8.18 19.64" style={style}></path>
    </svg>
  );
};

export default DeleteIcon;
