import data from "./rankings-4.csv";

console.log(data);

export const formatRawData = (data) =>
  data.slice(0, 300).map((d) => ({
    id: d.id,
    name: d.Player || `${d.firstName} ${d.lastName}`,
    position: d.Pos || d.slotName,
    adp: Number(d.adp || d.ADP),
  }));

export const rawData = formatRawData(data);
