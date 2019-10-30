import React from "react";

export function Button() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(
    () => setCount(count + 1), [count]
  );

  return (
    <button onClick={handleClick}>
      Clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
}
