import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [coffe, setCoffee] = useState([])

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  .then(response => response.json())
  .then(data => {
    setCoffee(data)
  })
  .catch(error => {
    console.log(error)
  })
  } ,[])
  console.log(coffe )
  return (
    <div className='bg-slate-400 mt-[300px] absolute ml-[120px]' >
      <h1 className=' text-2xl font-normal text-center'>Our collection</h1>
      <br></br>
      <p className=''>Introducing our Coffee Collection, a selection of unique
        coffees from different roast types and origins, expertly roasted
        in small batches and shipped fresh weekly.
      </p>
      <br></br>
      <div className='flex'>
      <button className='bg-blue-100 max-w-25 text-center rounded'>All products</button>
      <button>All products</button>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-10'>
       {coffe.map((datas)=>
      <div id={datas.id}>
      {datas.popular && <div className ='bg-amber-400 rounded-full '><h3>Popular</h3></div>}
      <div>
      <img src="../public/Images/bg-cafe.jpg" alt="not"/>
      </div>
      <div className='flex '>
      {datas.name}
      <div className='bg-slate-300 max-w-20 text-center rounded-md content-end'>{datas.price}</div>
      </div></div>
      )} 
      </div>
      
    </div>
  );
}

export default App;
