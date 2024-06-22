import React, { memo } from "react";

const Message = ({ numberOfMessages, onHandleIncrement }) => {
  console.log("Message Render");


  return (
    <div>
      <p>send {numberOfMessages} message</p>
      <button onClick={onHandleIncrement}>Increment Message Number </button>
    </div>
  );
};

// just EsLint Config to avoid error
Message.displayName = "Message";

export default memo(Message);
