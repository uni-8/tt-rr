import React from 'react';
import { Calendar } from '../Calendar';
import './Home.scss';

export const Home = () => {
  return (
    <main className="Home">
      <section className="Home__greeting">
        <h1 className="Home__title">
          Choose the day
          <br />
          for the meeting
        </h1>

        <p className="Home__description">
          We encourage you to book your appointment online.
          <br />
          This will save you time.
        </p>
      </section>

      <Calendar />
    </main>
  )
}
