function Pessoa({name, age, job, photo}){
    return(
        <div style={{color: "black", border: "solid black 3px"}}>
            <img src={photo} alt={name}/>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
        </div>
    )
}

export default Pessoa