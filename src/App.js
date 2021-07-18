import React from 'react'
import { NewsContext } from "./NewsContext"
import NewsList from "./components/NewsList"
import './App.css';

export const App = () => {

  return (
    <NewsContext>

      <NewsList />

    </NewsContext>
  );
}

export default App;
