function App(){
  const list=["apple" ,"orange","banana","mango"]
  return(
    <div>
      <h1>Hello</h1>
      <div>
        world
      </div>
      <ul type="square">
        {
          list.map((element,index)=><li key={index}>{element}</li>)
        }
      </ul>
    </div>
  )
}

export default App