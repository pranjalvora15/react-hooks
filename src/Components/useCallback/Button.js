import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering", children);
  return <button onClick={handleClick}>{children}</button>;
}

// export default Button;
export default React.memo(Button);
