export default function Form({database,addData}){
    const submitForm=e=>{
        e.preventDefault()
        database.find(a=>a===document.getElementById('name').value)===undefined?
         addData([...database,{name:document.getElementById('name').value,number:document.getElementById('number').value}]):alert(`${document.getElementById('name').value} is already added to phonebook`)
        document.getElementById('name').value=''
        document.getElementById('number').value=''
        }
    return <form onSubmit={submitForm}>
        <label htmlFor="name">name:</label>
        <input id='name' required/>
        <label htmlFor="number">number:</label>
        <input id='number' required/>
        <button type="submit">add</button>
    </form>
}