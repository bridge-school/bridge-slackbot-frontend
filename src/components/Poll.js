import React from "react";

const Poll = (props) => {
  const pollId = props.match.params.pollId;

  return (
    <div className="poll">
      <h2>Poll results</h2>
    </div>
  )
}

export default Poll;