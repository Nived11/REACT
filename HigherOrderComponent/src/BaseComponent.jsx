const DataDisplay=({data})=>{
    return(
        <div>
            <h1>Data is :</h1>
            <ul>
                {
                    data.map((item,index)=><li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}
export default DataDisplay