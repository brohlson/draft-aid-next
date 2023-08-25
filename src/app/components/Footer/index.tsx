import React from "react";

function Footer() {
  return (
    <header className="p-4 bg-gray-200 text-center">
      <small className="text-gray-600">
        Inspired by{" "}
        <a className="underline" href="http://www.borischen.co/" target="blank">
          Boris
        </a>{" "}
        +{" "}
        <a className="underline" href="https://jayzheng.com/ff/" target="blank">
          Jay
        </a>{" "}
        with rankings from{" "}
        <a
          className="underline"
          href="https://underdogfantasy.com"
          target="blank"
        >
          Underdog
        </a>{" "}
        refreshed every hour
      </small>
    </header>
  );
}

export default React.memo(Footer);
