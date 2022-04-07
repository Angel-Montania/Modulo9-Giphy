import axios from 'axios'
import React from 'react'
let key = "eMnDSiDtjrFLkVOOxaerKLWfBzc6X1ya"

export default function Gif() {

    const [gifs, setGifs] = React.useState([])

    React.useEffect(() => {
            axios(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
                .then(data => data.data)
                .then(result => {
                    setGifs(result.data)
                })
                .catch(error => console.log(error))
    }, [])

    

  return (
    <div className='contenedorImg'>
        {
            gifs.map(elem => {
                return(
                    <img key={elem.id} src={elem.images.downsized.url} className="img" alt={elem.id}></img>
                )
            })
        }
    </div>
  )
}
