import { useState } from 'react'
import Nevbar from './Components/Nevbar'
import Quotes from './Components/Quotes'
import Allqotes from './Components/Allqotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <div className=''>
   <Nevbar/>
     <Allqotes/>
     </div>
    </>
  )
}

export default App
