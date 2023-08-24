"use client";

import React, { ReactNode, useMemo, useState } from "react";
import { Player } from "./types";
import { keyBy } from "lodash";
import playerData from "./data";

export interface AppContext {
  allPlayers: Player[];
  selectedPlayers: Player[];
}

export const AppContext = React.createContext<AppContext>({
  allPlayers: [],
  selectedPlayers: [],
});

export const useAppContext = () => React.useContext(AppContext);

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  console.log(playerData);
  const [allPlayers] = useState<Player[]>([]);
  const [selected, setSelected] = useState<Player["id"][]>([]);
  const playerDictionary = useMemo(() => keyBy(allPlayers, "id"), [allPlayers]);
  const selectedPlayers = useMemo(
    () => selected.map((id) => playerDictionary[id]),
    [selected, playerDictionary]
  );

  const handleSelectPlayer = (player: Player) => {
    setSelected((selected) => [...selected, player.id]);
  };

  const handleUndoSelection = () => {
    setSelected((selected) => selected.slice(0, -1));
  };

  const value = useMemo(() => {
    return {
      allPlayers,
      selectedPlayers,
      handleSelectPlayer,
      handleUndoSelection,
    };
  }, [allPlayers, selectedPlayers]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
