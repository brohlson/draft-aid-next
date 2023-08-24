import React from "react";
import { Player, PlayerHandler } from "@/types";
import PlayerRow from "./PlayerRow";

type Props = {
  label: string;
  players: Player[];
  onSelect: PlayerHandler;
  /** Optionally set the height of the list, default to 400px */
  height?: string;
  /** Optionally display the array index instead of the ADP */
  showIndex?: boolean;
  /** Optionally display a search input */
  withFiltering?: boolean;
  /** Optionally pin the list to the bottom of the scroll container as it grows */
  pinToBottom?: boolean;
};

function PlayerList({
  players,
  label,
  height = "400px",
  onSelect,
  showIndex,
  withFiltering,
  pinToBottom,
}: Props) {
  const [filterValue, setFilterValue] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const filteredPlayers = React.useMemo(() => {
    if (!filterValue) return players;
    return players.filter((player) =>
      player.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [players, filterValue]);

  React.useEffect(() => {
    if (pinToBottom && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [pinToBottom, scrollRef, players]);

  return (
    <div
      className="border border-gray-200 rounded overflow-auto"
      style={{ height }}
      ref={scrollRef}
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
