const BarsIcon = () => {
  const style = {
    fill: "#64748b",
    stroke: "#475569",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      strokeWidth="1.5"
      color="#000"
      data-name="Layer 1"
      viewBox="0 0 24 24"  
    >
      <circle cx="3.41" cy="12" r="1.91" style={style}></circle>
      <circle cx="12" cy="12" r="1.91" style={style}></circle>
      <circle cx="20.59" cy="12" r="1.91" style={style}></circle>
    </svg>
  );
};

export default BarsIcon;
