import './App.css';
import {createClient} from '@supabase/supabase-js'
import {useEffect} from "react";

const supabase = createClient(
  'https://occxtuuwwbfoduajfopr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jY3h0dXV3d2Jmb2R1YWpmb3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxMTg2NDYsImV4cCI6MTk4OTY5NDY0Nn0.ZQ99XqHXkrukpCX6tKJDrmP5zMl3h-ulDfqfMy-n1sI'
)


function App() {
  async function getCountries() {
    const countries = await supabase.from('countries').select('*');
    console.log(countries)
  }

  async function callFunction() {
    const { data, error } = await supabase.functions.invoke('hello-world', {
      body: { name: 'Functions' },
    })
    console.log(data, error);
  }

  useEffect(() => {
    getCountries();
    callFunction();
  }, []);
  return (
    <div className="App">
     hello world!
    </div>
  );
}

export default App;
