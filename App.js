import { useState } from "react"
import Form from "./components/form"
import Display from "./components/Display"
import Filter from "./components/Filter"
export default function App(){
  const [database,addData]=useState([])
  const [data,filter]=useState([])
  return <>
  <Filter data={data} filter={filter} database={database}/>
  <Form database={database} addData={addData}/>
  <h1>Numbers</h1>
  <Display database={database}/>
  </>
}