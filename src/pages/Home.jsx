import workoutCalendar from "../data/workoutCalendar";
import dietCalendar from "../data/dietCalendar";
import faceCareCalendar from "../data/faceCareCalendar";
import React from "react";
import "../styles/home.css";

export default function Home() {

  return (
    <div className="container">

      <h1 className="title">My 1-Year Aesthetic Model Plan</h1>

      {/* WORKOUT */}
      <section className="card">
        <h2>Workout (first 365 days preview)</h2>

        {workoutCalendar.slice(0, 365).map(day => (
          <div key={day.dayNumber} className="item">
            <b>Day {day.dayNumber} – {day.weekday} – {day.date}</b>
            <div>{day.title}</div>
            <ul>
              {day.exercises.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>


      {/* DIET */}
      <section className="card">
        <h2>Diet Plan (first 365 days preview)</h2>

        {dietCalendar.slice(0,365).map(day => (
          <div key={day.dayNumber} className="item">
            <b>Day {day.dayNumber} – {day.date}</b>
            <div>Breakfast: {day.breakfast}</div>
            <div>Lunch: {day.lunch}</div>
            <div>Dinner: {day.dinner}</div>
          </div>
        ))}
      </section>


      {/* FACE CARE */}
      <section className="card">
        <h2>Face Care Routine (first 365 days preview)</h2>

        {faceCareCalendar.slice(0, 365).map(day => (
          <div key={day.dayNumber} className="item">
            <b>Day {day.dayNumber} – {day.date}</b>
            <div>Morning: {day.morning}</div>
            <div>Night: {day.night}</div>
          </div>
        ))}
      </section>

    </div>
  );
}