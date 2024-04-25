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
    <div id='cont' className='xl:mt-[200px] text-white w-[1000px] ml-auto mr-auto sm: mt-[90px] absolute bg-gray-900' >
      
      <h1 className='xl:text-4xl font-normal text-center mt-5 decoration-white font-medium'>Our collection</h1>
      <br></br>
      <p className='xl: w-[450px] text-center ml-auto mr-auto sm: w-[200px] text-center'>Introducing our Coffee Collection, a selection of unique
        coffees from different roast types and origins, expertly roasted
        in small batches and shipped fresh weekly.
      </p>
      <br></br>
      <div className='xl:flex w-[250px] justify-between sm: ml-auto mr-auto '>
      <button className='xl: w-35 text-center rounded hover:bg-slate-700 w-[100px] sm: w-35 text-center rounded hover:bg-slate-700'>All products</button>
      <button className='xl: w-35 text-center rounded hover:bg-slate-700 w-[150px] sm: w-35 text-center rounded'>Available products</button>
      </div>
      <div className='xl:grid grid-cols-3 gap-4 mt-10 sm:flex flex-col ml-auto mr-auto '>
       {coffe.map((datas)=>
      <div key={datas.id} className=''> 
      
      <div className='ml-auto mr-auto'>
      <div className ='bg-amber-400 rounded-full mt-2 ml-2 absolute w-20 text-center text-black'> {datas.popular && <h3>Popular</h3>}</div>
      <img src={datas.image} alt="Coffee Shop Background Image" className='rounded-xl' />
      </div>
      
      <div className='flex justify-between w-[260px] mt-5'>
      {datas.name}
      <div className='bg-slate-300 text-center w-[60px] rounded-md text-black'>{datas.price}</div>
      </div>
      <div className='flex mt-1 w-[260px] justify-between'>
      <div className='flex'>
      {datas.rating ? <img src='Images/Star_fill.svg'/>: <img src='Images/Star.svg'/> } 
      {datas.rating && <h2>{datas.rating}</h2>}
      {datas.votes && <h2 className='text-gray-400'>({datas.votes} votes)</h2> }
      </div>
      <div className='text-right'>{!datas.available && <h3 className='text-red-800'>Sold out</h3>}</div>
     
      </div>
      </div>
      )} 
      </div>
      
    </div>
  );
}

export default App;
