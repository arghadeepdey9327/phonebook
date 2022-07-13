export default function Filter({data,filter,database}){
    const filterInput=e=>{
        let ar=[]
        let br=[]
        database.map(a=>{
            if((e.target.value).length>0){
            for(let i=0;i<a['name'].length/(e.target.value).length;i++){
                ar.push(a['name'].substring(i,(e.target.value).length+i))
            }}
            ar.find(b=>(b.toLowerCase()===(e.target.value).toLowerCase())?br.push(a):null)
            ar=[]
        })
        filter(br)
        br=[]
  
    }
    return <>
    <label htmlFor="input">filter shown with:</label>
    <input id="input" onChange={filterInput}/>
     {data.map(a=><ul id={(data.indexOf(a).toString())}><p>{a.name}</p><p>{a.number}</p></ul>)}
    </>
}