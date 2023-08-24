import React from "react";
import { Player, PlayerHandler } from "@/types";
import classNames from "classnames";
import PlayerRow from "./PlayerRow";

type Props = {
  label: string;
  players: Player[];
  onSelect: PlayerHandler;
  height?: string;
  showIndex?: boolean;
};

function PlayerList({
  players,
  label,
  height = "400px",
  onSelect,
  showIndex,
}: Props) {
  return (
    <div
      className="border border-gray-200 rounded overflow-auto"
      style={{ height }}
    >
      <div className="bg-gray-200 p-1 text-center uppercase font-bold text-xs text-gray-600 sticky top-0">
        {label}
      </div>
      <div className="flex flex-col overflow-auto">
        {players.map((player, idx) => (
          <PlayerRow
            key={player.id}
            player={player}
            onSelect={onSelect}
            index={showIndex ? idx + 1 : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(PlayerList);
