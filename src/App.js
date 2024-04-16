import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [coffe, setCoffee] = useState([])

  useEffect(
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  .then(response => response.json())
  .then(data => {
    setCoffee(data)
  })
  .catch(error => {
    console.log(error)
  })
  ,[])
  return (
    <div className='bg-slate-700 mt-[100px] absolute' >
    
      <h1 className=' text-2xl font-normal text-center'>Our collection</h1>
      <br></br>
      <p className=''>Introducing our Coffee Collection, a selection of unique
        coffees from different roast types and origins, expertly roasted
        in small batches and shipped fresh weekly.
      </p>
      <br></br>
      <div className='flex bg-blue'>
      <button className='bg-blue'>All products</button>
      <button>All products</button>
      </div>
    </div>
  );
}

export default App;
