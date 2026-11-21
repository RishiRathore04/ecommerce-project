import { Routes , Route} from 'react-router'; 
import { HomePage } from './pages/HomePage';
import './App.css'

function App() {
  return(
    <Routes>
      <Route index element={<HomePage/>}></Route>
      <Route path="checkout " element={<div>TEST CHECKOUT PAGE</div>} ></Route>
    </Routes>
  )
}

export default App
