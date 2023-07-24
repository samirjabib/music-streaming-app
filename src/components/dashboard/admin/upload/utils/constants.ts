export const genreAvalaible = [
  {
    id: 1,
    name: "Trap",
    value: "trap",
  },
  {
    id: 2,
    name: "Reggaeton",
    value: "reggaeton",
  },
  {
    id: 3,
    name: "Dancehall",
    value: "dancehall",
  },
  {
    id: 4,
    name: "Techno",
    value: "techno",
  },
];

export const notes = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
];

type MenuItem = {
  id: number;
  label: string;
};

export const menuItems: MenuItem[] = [
  { id: 1, label: "Informacion" },
  { id: 2, label: "Archivos" },
  { id: 3, label: "Licencias" },
  { id: 4, label: "Publicar" },
];
