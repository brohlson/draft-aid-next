import React from "react";

function Header() {
  return (
    <header className="p-4 bg-gray-200">
      <span className="text-lg mr-1">Draft Aid</span>
      <small className="text-gray-600">Underdog Rankings</small>
    </header>
  );
}

export default React.memo(Header);
