import React, { useEffect, useState } from 'react'
import { Card } from '../../Card/Card'


export const Main = () => {
  const URL = 'https://rickandmortyapi.com/api/character'
  const [list, setlist] = useState([])
  useEffect(() => {
    
    fetch(URL)
    .then( response => response.json() )
    .then (data => {
        setlist(data.results)
        console.log(list);
    })
  
  }, [])
  
  
  return (
    <main>
        {list.map(p=>
          <Card key={p.id} img={p.image} nombre={p.name}/>
        )}
    </main>
  )
}
