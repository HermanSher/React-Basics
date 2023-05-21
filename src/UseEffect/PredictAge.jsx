import '../App.css'
import  Axios  from 'axios'
import {  useState } from 'react'

export const PredictAge = ()=>{
    const [name,setName] = useState("")
    const [PredictAge, setPredictAge] = useState(null)

    const fetchData = ()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            setPredictAge(res.data)
        })
    }

    return(
        <div>
            <input type="text" placeholder='Eg. hermann...' onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <button onClick={fetchData}>Predict</button>
            <h3>Name:{PredictAge?.name}</h3>
            <h3>Age:{PredictAge?.age}</h3>
            <h3>Count:{PredictAge?.count}</h3>
        </div>
    )
}