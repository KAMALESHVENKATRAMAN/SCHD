const startDate = new Date("2026-02-23");
const totalDays = 365;
const oneDay = 24 * 60 * 60 * 1000;

/*
Safe for men, office lifestyle, Indian weather
Goal: clean, glow, sharp face look (aesthetic model style)
*/

const weeklyFaceCare = [
  // Monday
  {
    morning: "Gentle face wash + moisturizer + sunscreen",
    night: "Face wash + aloe gel"
  },
  // Tuesday
  {
    morning: "Face wash + moisturizer + sunscreen",
    night: "Face wash + light massage (2 min)"
  },
  // Wednesday
  {
    morning: "Face wash + moisturizer + sunscreen",
    night: "Face wash + multani mitti / clay mask"
  },
  // Thursday
  {
    morning: "Face wash + moisturizer + sunscreen",
    night: "Face wash + aloe gel"
  },
  // Friday
  {
    morning: "Face wash + moisturizer + sunscreen",
    night: "Face wash + vitamin C serum"
  },
  // Saturday
  {
    morning: "Face wash + moisturizer + sunscreen",
    night: "Face wash + steam + aloe gel"
  },
  // Sunday
  {
    morning: "Face wash + moisturizer + sunscreen",
    night: "Face wash only (skin rest day)"
  }
];

function formatDate(d) {
  return d.toISOString().split("T")[0];
}

function getWeekIndex(d) {
  return d.getDay() === 0 ? 6 : d.getDay() - 1;
}

const faceCareCalendar = [];

for (let i = 0; i < totalDays; i++) {
  const date = new Date(startDate.getTime() + i * oneDay);
  const plan = weeklyFaceCare[getWeekIndex(date)];

  faceCareCalendar.push({
    dayNumber: i + 1,
    date: formatDate(date),
    morning: plan.morning,
    night: plan.night
  });
}

export default faceCareCalendar;