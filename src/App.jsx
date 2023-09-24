import { useState } from 'react'
import './App.css'


const products = [
  {id: 75, name: 'Laptop', price: 30000},
  {id: 77, name: 'Iphone 6s', price: 56000}
]


function App() {
  const [count, setCount] = useState(0);
  
  const increaseCount =()=> setCount(count+1);
  const decreaseCount =()=> setCount(count-1);
  
  return (
    <>
      <div>
        {
          products.map(product => <Product key={product.id} name={product.name} price={product.price} quantity={count}></Product>)

          
        }
        <h4>Quantity: {count}</h4>
        <button onClick={decreaseCount}> - </button>
        <button onClick={increaseCount}> + </button>
      </div>
      
    </>
  )
}


function Product(props){
  return (
    <>
      <div className='product'>
        <h3>Name: {props.name}</h3>
        <p>Price: {props.price}</p>
        

      </div>
    
    </>
  )
}

export default App
