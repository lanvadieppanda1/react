//HOF: Higher order function
//closure function
//HOC: higher order component
import React, { memo } from "react";

const Child = () => {
  console.log("Child");
  return <div>Child</div>;
};

export default memo(Child);

// Child component is memoized using the React.memo() function,
// which will only re-render if the props have changed.
