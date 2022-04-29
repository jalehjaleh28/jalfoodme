import React from 'react'
import { Link } from 'react-router-dom'
import { Alphabet } from './Data'
import "../style/wortfetch.css"
export const WortFetch = () => {

    const showAlphabet=Alphabet.map((items) => {
        return(
            <li key={items.id}>
                <Link to={`wort/${items.name}`} className='wort-link'><span>{items.name}</span> </Link>
            </li>
        )
    })
  return (
    <section className='wort-container'>
        <div>
            <h2>Food By Name</h2>
            <ul>
               {showAlphabet}
                
            </ul>
        </div>
    </section>
  )
}