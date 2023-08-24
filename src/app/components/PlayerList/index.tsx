import React from "react";
import { Player, PlayerHandler } from "@/types";
import PlayerRow from "./PlayerRow";

type Props = {
  label: string;
  players: Player[];
  onSelect: PlayerHandler;
  height?: string;
  showIndex?: boolean;
  withFiltering?: boolean;
};

function PlayerList({
  players,
  label,
  height = "400px",
  onSelect,
  showIndex,
  withFiltering,
}: Props) {
  const [filterValue, setFilterValue] = React.useState("");

  const filteredPlayers = React.useMemo(() => {
    if (!filterValue) return players;
    return players.filter((player) =>
      player.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [players, filterValue]);

  return (
    <div
      className="border border-gray-200 rounded overflow-auto"
      style={{ height }}
    >
      <div className="bg-gray-200 p-1 text-center uppercase  text-xs text-gray-600 sticky top-0">
        <span className="font-bold">{label}</span>
        {withFiltering && (
          <input
            type="text"
            className="border border-gray-400 rounded px-2 py-1 text-xs ml-2"
            placeholder="Search..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        )}
      </div>
      <div className="flex flex-col overflow-auto">
        {filteredPlayers.map((player, idx) => (
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
