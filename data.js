const user = {
  name: "Іван",
  surname: "Козлов",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "Programming.jpg", alt: "Здобути роботу мрії Frontend Developer" },
    { src: "Stanford.jpg", alt: "Навчатися в Стенфорді на CS" },
    { src: "KARATE.jpg", alt: "Стати чемпіоном Європи з кіокушинкай карате" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  750,
  1000,
  1200,
  1400,
  1500,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "HTML & CSS" },
  { month: "Липень", skill: "JavaScript" },
  { month: "Серпень", skill: "Java" },
  { month: "Вересень", skill: "React.js" },
  { month: "Жовтень", skill: "ReactNative" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
