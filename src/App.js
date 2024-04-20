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
    <div className='bg-slate-400 mt-[300px] absolute justify-items-center items-center grid' >
      <h1 className=' text-2xl font-normal text-center'>Our collection</h1>
      <br></br>
      <p className='text-center w-[250px] '>Introducing our Coffee Collection, a selection of unique
        coffees from different roast types and origins, expertly roasted
        in small batches and shipped fresh weekly.
      </p>
      <br></br>
      <div className='flex'>
      <button className='bg-blue-100 w-35 text-center rounded '>All products</button>
      <button className='bg-blue-100 max-w-25 text-center rounded '>Available products</button>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-10 '>
       {coffe.map((datas)=>
      <div key={datas.id}> 
      
      <div>
      <div className ='bg-amber-400 rounded-full mt-2 ml-2 absolute w-20 text-center'> {datas.popular && <h3>Popular</h3>}</div>
      <img src={datas.image} alt="Coffee Shop Background Image" className='rounded-xl' />
      </div>
      
      <div className='flex '>
      {datas.name}
      <div className='bg-slate-300 text-center w-[60px] rounded-md float-end'>{datas.price}</div>
      </div>
      <div className='flex'>
      {datas.rating ? <img src='Images/Star_fill.svg'/>: <img src='Images/Star.svg'/> } 
      {datas.rating}
      <h2 className='text-grey-600'>({datas.votes} votes)</h2> 
      {!datas.available && <h3 className='text-red-700 '>Sold out</h3>}
      </div>
      </div>
      )} 
      </div>
      
    </div>
  );
}

export default App;
