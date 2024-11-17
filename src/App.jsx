import './App.css'
import LineChart from './components/LineChart/LineChart'

//import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {
  

  return (
    <>
      
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      
      
    </>
  )
}

export default App
