export type Member = {
  name: string;
  instrument: string;
  nationality: string;
  bio: string;
  photo: string;
};

export const members: Member[] = [
  {
    name: "Barbara Hughes",
    instrument: "Clarinet",
    nationality: "Ireland",
    bio: "Barbara is from Ireland and plays clarinet and bass clarinet. She is a fantastic musician and also teaches music.",
    photo: "/images/BarbaraClarinetSolo.png",
  },
  {
    name: "Teresa Lin",
    instrument: "Voice",
    nationality: "United States",
    bio: "Teresa is an American vocalist with a fantastic voice. She also teaches voice lessons.",
    photo: "/images/TeresaSolo.png",
  },
  {
    name: "Iliana Shoemaker",
    instrument: "Piano",
    nationality: "Bulgaria",
    bio: "Iliana is from Bulgaria and is an extremely talented pianist.",
    photo: "/images/IlianaPianoSolo.png",
  },
];
