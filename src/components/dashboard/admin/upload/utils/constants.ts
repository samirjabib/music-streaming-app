export const genreAvalaible = [
  {
    id: 1,
    label: "Trap",
    value: "trap",
  },
  {
    id: 2,
    label: "Reggaeton",
    value: "reggaeton",
  },
  {
    id: 3,
    label: "Dancehall",
    value: "dancehall",
  },
  {
    id: 4,
    label: "Techno",
    value: "techno",
  },
];

export const notes = [
  { label: "A", value: "A" },
  { label: "A#/Bb", value: "A#/Bb" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
  { label: "C#/Db", value: "C#/Db" },
  { label: "D", value: "D" },
  { label: "D#/Eb", value: "D#/Eb" },
  { label: "E", value: "E" },
  { label: "F", value: "F" },
  { label: "F#/Gb", value: "F#/Gb" },
  { label: "G", value: "G" },
  { label: "G#/Ab", value: "G#/Ab" },
];

export const notes_type = [
  { label: "Menor", value: "mayor" },
  { label: "Mayor", value: "menor" },
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
