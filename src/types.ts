export type Player = {
  id: string;
  name: string;
  adp: number;
  position: "WR" | "RB" | "QB" | "TE";
};

export type PlayerHandler = (player: Player) => void;
