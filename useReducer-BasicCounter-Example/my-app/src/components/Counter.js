import React,{useState} from 'react';


export default function Counter(){

    const[count,PlusOneCount] = useState(0);
    return(
        <div>
            <div className="Number">
                {count}
            </div>
            <button onClick={(e) =>{
                PlusOneCount(count+1)
            }}>Add 1</button>
        </div>
    )
}