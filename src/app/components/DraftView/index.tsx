"use client";

import React from "react";
import PlayerList from "../PlayerList";
import { useAppContext } from "@/context";

const colClass = "w-1/4 min-w-[300px]";
const columnHeight = "calc(100vh - 160px)";

function DraftView() {
  const {
    availablePlayers,
    availableRunningBacks,
    availableWideReceivers,
    availableQuarterBacks,
    availableTightEnds,
    selectedPlayers,
    handleSelectPlayer,
    handleDeselectPlayer,
  } = useAppContext();

  return (
    <div className="grow flex overflow-x-auto overflow-y-hidden p-6 gap-6">
      <div className={colClass}>
        <PlayerList
          label="All players"
          players={availablePlayers}
          height={columnHeight}
          onSelect={handleSelectPlayer}
        />
      </div>
      <div className={colClass}>
        <div className="flex flex-col gap-6" style={{ height: columnHeight }}>
          <PlayerList
            label="Runningbacks"
            players={availableRunningBacks}
            height="50%"
            onSelect={handleSelectPlayer}
          />
          <PlayerList
            label="Wide Receivers"
            players={availableWideReceivers}
            height="50%"
            onSelect={handleSelectPlayer}
          />
        </div>
      </div>
      <div className={colClass}>
        <div className="flex flex-col gap-6" style={{ height: columnHeight }}>
          <PlayerList
            label="Quarterbacks"
            players={availableQuarterBacks}
            height="50%"
            onSelect={handleSelectPlayer}
          />
          <PlayerList
            label="Tight Ends"
            players={availableTightEnds}
            height="50%"
            onSelect={handleSelectPlayer}
          />
        </div>
      </div>
      <div className={colClass}>
        <PlayerList
          label="Selected"
          players={selectedPlayers}
          height={columnHeight}
          onSelect={handleDeselectPlayer}
          showIndex
        />
      </div>
    </div>
  );
}

export default React.memo(DraftView);
