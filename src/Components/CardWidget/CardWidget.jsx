
import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const CardWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "35px" }}>
      <LocalGroceryStoreIcon sx={{ color: "white" }} />
      <p style={{ color: "white" }}>10n</p>
    </div>
  );
};

export default CardWidget
