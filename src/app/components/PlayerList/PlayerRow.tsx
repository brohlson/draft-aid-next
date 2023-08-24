import React from "react";
import classNames from "classnames";
import { Player, PlayerHandler } from "@/types";

type PlayerRowProps = {
  player: Player;
  onSelect: PlayerHandler;
  index?: number;
};

const mapPositionToColor = {
  QB: "bg-blue-100",
  RB: "bg-green-100",
  WR: "bg-yellow-100",
  TE: "bg-purple-100",
};

function PlayerRow({ player, onSelect, index }: PlayerRowProps) {
  return (
    <div
      role="button"
      onClick={() => onSelect(player)}
      className={classNames(
        "flex items-center justify-between p-2 hover:opacity-50 text-sm gap-2",
        mapPositionToColor[player.position]
      )}
    >
      <div className="flex">{index || player.adp}</div>
      <div className="flex-grow text-center">{player.name}</div>
      <div className="flex">{player.position}</div>
    </div>
  );
}

export default React.memo(PlayerRow);
