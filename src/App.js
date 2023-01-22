import logo from './logo.svg';
import './App.css';
import { createClient } from '@supabase/supabase-js'
import {useEffect} from "react";

function App() {

  const supabase = createClient('https://occxtuuwwbfoduajfopr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jY3h0dXV3d2Jmb2R1YWpmb3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxMTg2NDYsImV4cCI6MTk4OTY5NDY0Nn0.ZQ99XqHXkrukpCX6tKJDrmP5zMl3h-ulDfqfMy-n1sI')

  async function getCountries() {
    const countries = await supabase.from('countries').select()
    console.log(countries)
  }

  useEffect(() => {
    getCountries()
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
