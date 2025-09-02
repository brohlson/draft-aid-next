import data from "./rankings-3.csv";

export const formatRawData = (data) =>
  data.slice(0, 300).map((d) => ({
    id: d.id,
    name: `${d.firstName} ${d.lastName}`,
    position: d.slotName,
    adp: Number(d.adp),
  }));

export const rawData = formatRawData(data);
