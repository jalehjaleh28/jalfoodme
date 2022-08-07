import React from 'react'
import { Link } from 'react-router-dom'
import { Alphabet } from '../Data'
import "./wortfetch.css"
export const LettersList = () => {

    const showAlphabet=Alphabet.map((items) => {
        return(
            <li key={items.id}>
                <Link to={`/search/letter/${items.name}`} className='wort-link'><span>{items.name}</span> </Link>
            </li>
        )
    })
  return (
    <section className='wort-container'>
        <div>
            <h2>Food By Name</h2>
            <h3 className='hint-search'>Select a letter to find the foods that started with it</h3>
            <ul>
               {showAlphabet}
                
            </ul>
        </div>
    </section>
  )
}