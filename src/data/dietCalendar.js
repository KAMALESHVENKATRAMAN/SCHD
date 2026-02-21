const startDate = new Date("2026-02-23"); // Monday
const totalDays = 365;
const oneDay = 24 * 60 * 60 * 1000;

/*
Personalised for you:
- software engineer
- office job
- aesthetic lean look
- simple Indian friendly foods
*/

const weeklyDiet = [
  // Monday
  {
    breakfast: "Oats + 2 boiled eggs + 1 fruit",
    lunch: "Rice + dal + vegetables + curd",
    dinner: "Chapati + paneer / chicken + salad"
  },
  // Tuesday
  {
    breakfast: "Banana + peanut butter toast + milk",
    lunch: "Rice + chicken / chickpeas + vegetables",
    dinner: "Light dinner – omelette + veggies"
  },
  // Wednesday
  {
    breakfast: "Oats + nuts + apple",
    lunch: "Rice + dal + vegetables",
    dinner: "Chapati + paneer bhurji"
  },
  // Thursday
  {
    breakfast: "2 eggs + toast + fruit",
    lunch: "Rice + chicken / tofu + vegetables",
    dinner: "Soup + boiled eggs"
  },
  // Friday
  {
    breakfast: "Oats + milk + banana",
    lunch: "Rice + dal + vegetables + curd",
    dinner: "Chapati + light curry"
  },
  // Saturday
  {
    breakfast: "Smoothie (milk + banana + oats)",
    lunch: "Normal home food",
    dinner: "Light dinner – eggs / paneer + salad"
  },
  // Sunday
  {
    breakfast: "Relaxed breakfast – dosa / idli",
    lunch: "Normal home food",
    dinner: "Very light – soup / fruits"
  }
];

function formatDate(d) {
  return d.toISOString().split("T")[0];
}

function getWeekIndex(d) {
  return d.getDay() === 0 ? 6 : d.getDay() - 1; // Mon = 0
}

const dietCalendar = [];

for (let i = 0; i < totalDays; i++) {
  const date = new Date(startDate.getTime() + i * oneDay);
  const plan = weeklyDiet[getWeekIndex(date)];

  dietCalendar.push({
    dayNumber: i + 1,
    date: formatDate(date),
    breakfast: plan.breakfast,
    lunch: plan.lunch,
    dinner: plan.dinner
  });
}

export default dietCalendar;