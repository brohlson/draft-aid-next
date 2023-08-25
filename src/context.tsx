"use client";

import React, { ReactNode, useMemo, useState } from "react";
import { keyBy, noop } from "lodash";
import { Player, PlayerHandler } from "./types";
import { rawData } from "./data";

export interface AppContext {
  availablePlayers: Player[];
  selectedPlayers: Player[];
  availableQuarterBacks: Player[];
  availableRunningBacks: Player[];
  availableWideReceivers: Player[];
  availableTightEnds: Player[];
  handleSelectPlayer: PlayerHandler;
  handleDeselectPlayer: PlayerHandler;
}

export const AppContext = React.createContext<AppContext>({
  availablePlayers: [],
  selectedPlayers: [],
  availableQuarterBacks: [],
  availableRunningBacks: [],
  availableWideReceivers: [],
  availableTightEnds: [],
  handleSelectPlayer: noop,
  handleDeselectPlayer: noop,
});

export const useAppContext = () => React.useContext(AppContext);

interface Props {
  liveData?: Player[];
  children: ReactNode;
}

export default function AppProvider({ liveData, children }: Props) {
  const [players] = useState<Player[]>(liveData || (rawData as Player[]));
  const [selected, setSelected] = useState<Player["id"][]>([]);
  const playerDictionary = keyBy(players, "id");

  const availablePlayers = useMemo(() => {
    return players.filter((player) => !selected.includes(player.id));
  }, [players, selected]);

  const availableQuarterBacks = useMemo(() => {
    return availablePlayers.filter((player) => player.position === "QB");
  }, [availablePlayers]);

  const availableRunningBacks = useMemo(() => {
    return availablePlayers.filter((player) => player.position === "RB");
  }, [availablePlayers]);

  const availableWideReceivers = useMemo(() => {
    return availablePlayers.filter((player) => player.position === "WR");
  }, [availablePlayers]);

  const availableTightEnds = useMemo(() => {
    return availablePlayers.filter((player) => player.position === "TE");
  }, [availablePlayers]);

  const selectedPlayers = useMemo(
    () => selected.map((id) => playerDictionary[id]),
    [selected, playerDictionary]
  );

  const handleSelectPlayer = (player: Player) => {
    setSelected((selected) => [...selected, player.id]);
  };

  const handleDeselectPlayer = (player: Player) => {
    setSelected((selected) => selected.filter((id) => id !== player.id));
  };

  const value = useMemo(() => {
    return {
      availablePlayers,
      availableQuarterBacks,
      availableRunningBacks,
      availableWideReceivers,
      availableTightEnds,
      selectedPlayers,
      handleSelectPlayer,
      handleDeselectPlayer,
    };
  }, [
    availablePlayers,
    availableQuarterBacks,
    availableRunningBacks,
    availableTightEnds,
    availableWideReceivers,
    selectedPlayers,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
