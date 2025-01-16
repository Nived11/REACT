// const Header=({data})=>{
//     return(
//         <h1>Hello {data}</h1>
//     )
// }
// export default Header;

import {useState} from "react"

function App(){
    let [name,setName]=useState(0)
    const handleClick=()=>{
        setName(name+=1)
    }
    return(
        <>
        <button onClick={handleClick}>Click Here</button>
        <h1>Hello {name}</h1>
        </>
    )
}
export default App