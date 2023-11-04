import React from 'react'
import Quotes from './Quotes'
import quotedata from '../Components/contents/quote.json' 

function Allqotes() {
  return (
    <div>
       {
        quotedata.quotes.map((quote,index)=>(

            <Quotes key={index} text={quote.quote}  author={quote.author} />
        ))
       }
    </div>
  )
}

export default Allqotes