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
    <div className='bg-slate-700 mt-[300px] absolute ml-[120px]' >
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
       {coffe.map((datas)=>{
      <div id={datas.id}>
      {datas.popular && <div className ='bg-yellow-200 rounded-full '><h3>Popular</h3></div>}
      <div>
      <img src={datas.img}/>
      </div>
      <div className='flex'></div>
      {datas.name}
      {datas.price}
      </div>
      })} 
      </div>
    </div>
  );
}

export default App;
