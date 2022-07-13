export default function Display({database}){
    return <>
    {database.map(a=><p id={(database.indexOf(a)).toString()}>{a.name}{ a.number}</p>)}
    </>
}