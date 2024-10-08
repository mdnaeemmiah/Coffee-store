
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const coffees = useLoaderData();
  const [loadedCoffee,setLoadedCoffee] = useState(coffees)
  return (

    <div className='max-w-7xl mx-auto'>
      <h1 className='text-4xl text-purple-700 font-bold'>HOT & COOL COFFEE </h1>
      <div className='grid md:grid-cols-2 gap-5 mt-8'>
        {
          loadedCoffee.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            loadedCoffee={loadedCoffee}
            setLoadedCoffee ={setLoadedCoffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
