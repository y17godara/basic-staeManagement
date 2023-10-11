import React from "react";

const Account = () => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {/*  */}

      <button onClick={addBonus}>Add Bonus</button>
      <button onClick={removeBonus}>Remove Bonus</button>
    </div>
  );
};

export default Account;
