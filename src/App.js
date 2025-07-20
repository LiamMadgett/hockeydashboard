
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';
import './App.css';

const playerStats = [
  { season: '2019', goals: 35 },
  { season: '2020', goals: 41 },
  { season: '2021', goals: 30 },
  { season: '2022', goals: 45 },
  { season: '2023', goals: 50 },
];

const teamStats = [
  { player: 'Player A', goals: 50 },
  { player: 'Player B', goals: 45 },
  { player: 'Player C', goals: 35 },
  { player: 'Player D', goals: 28 },
  { player: 'Player E', goals: 20 },
];

function App() {
  const [lang, setLang] = useState('en');

  const translations = {
    en: {
      title: 'Hockey Stats Dashboard',
      lineTitle: 'Goals Over Seasons',
      barTitle: 'Top Scorers',
      language: 'Language',
    },
    fr: {
      title: 'Tableau de bord des statistiques de hockey',
      lineTitle: 'Buts au fil des saisons',
      barTitle: 'Meilleurs buteurs',
      language: 'Langue',
    }
  };

  const t = translations[lang];

  return (
    <div className="App">
      <h1>{t.title}</h1>
      <label>{t.language}: </label>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>

      <h2>{t.lineTitle}</h2>
      <LineChart width={600} height={300} data={playerStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="season" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="goals" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>

      <h2>{t.barTitle}</h2>
      <BarChart width={600} height={300} data={teamStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="player" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="goals" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default App;
