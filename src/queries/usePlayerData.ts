import useSWR from "swr";
import { fetcher } from "./fetcher";

export const usePlayerData = () => useSWR("/rankings.csv", fetcher);
