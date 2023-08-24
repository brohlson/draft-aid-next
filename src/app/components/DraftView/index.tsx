import React from "react";

const colClass = "w-1/4 min-w-[300px]";

function DraftView() {
  return (
    <div className="grow flex overflow-x-auto">
      <div className={colClass}>hello</div>
      <div className={colClass}>hello</div>
      <div className={colClass}>hello</div>
      <div className={colClass}>hello</div>
    </div>
  );
}

export default React.memo(DraftView);
