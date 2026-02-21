// Generates 1 year workout calendar for you (starting Monday)

const startDate = new Date("2026-02-23"); // Monday

const oneDay = 24 * 60 * 60 * 1000;
const totalDays = 365;

// your safe workout split (based on your equipment + hernia history)
const weeklyPlan = [
  {
    dayName: "Monday",
    type: "Workout - Upper body",
    exercises: [
      "Dumbbell floor chest press – 3x12",
      "One arm row – 3x12 each side",
      "Shoulder press – 3x10",
      "Biceps curl – 3x12",
      "Standing triceps extension – 3x12",
      "Plank – 3x20–30 sec"
    ]
  },
  {
    dayName: "Tuesday",
    type: "Workout - Lower body + core (safe)",
    exercises: [
      "Goblet squat – 3x12",
      "Static lunge – 3x10 each leg",
      "Standing calf raise – 3x15",
      "Glute bridge – 3x12",
      "Plank – 3x20 sec"
    ]
  },
  {
    dayName: "Wednesday",
    type: "Rest / recovery",
    exercises: [
      "Walking only (your office walking is enough)",
      "Light stretching 10 minutes"
    ]
  },
  {
    dayName: "Thursday",
    type: "Workout - Upper body",
    exercises: [
      "Dumbbell floor chest press – 3x12",
      "One arm row – 3x12 each side",
      "Lateral raise – 3x12",
      "Hammer curl – 3x12",
      "Overhead triceps extension – 3x12",
      "Plank – 3x20–30 sec"
    ]
  },
  {
    dayName: "Friday",
    type: "Workout - Full body light",
    exercises: [
      "Goblet squat – 3x12",
      "Push-up (knee if needed) – 3x8–10",
      "One arm row – 3x12",
      "Shoulder press – 2x12",
      "Farmer carry with dumbbells – 3 rounds (30 sec walk)"
    ]
  },
  {
    dayName: "Saturday",
    type: "Active recovery",
    exercises: [
      "Walking",
      "Stretching",
      "Posture drills"
    ]
  },
  {
    dayName: "Sunday",
    type: "Full rest",
    exercises: [
      "Rest",
      "Good sleep",
      "Meal prep / boil eggs"
    ]
  }
];

function formatDate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getWeekDayName(d) {
  return d.toLocaleDateString("en-US", { weekday: "long" });
}

const calendar = [];

for (let i = 0; i < totalDays; i++) {
  const date = new Date(startDate.getTime() + i * oneDay);
  const weekIndex = date.getDay() === 0 ? 6 : date.getDay() - 1; 
  // convert JS week (Sun=0) → Mon=0

  const plan = weeklyPlan[weekIndex];

  calendar.push({
    dayNumber: i + 1,
    date: formatDate(date),
    weekday: getWeekDayName(date),
    title: plan.type,
    exercises: plan.exercises
  });
}

export default calendar;