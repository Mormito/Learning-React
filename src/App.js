import './App.css';

{/* toda class deve ter o nome de className JSX */}


function App() {
  const name = 'Mormito'

  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <div>
        <h2>Alterando JSX</h2>
        <p>Olá, {name}</p>
        <p>Soma: {sum(1,2)}</p>      
        <br />
        <img src={url} alt="My Image" />
      </div>
    </div>
  );
}

export default App;
