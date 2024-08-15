import './App.css';

function App() {
  const name = 'Mormito'

  function sum(a,b){
    return a+b
  }

  return (
    <div className="App">
      <div>
        <h2>Alterando JSX</h2>
        <p>Olá, {name}</p>
        <p>Soma: {sum(1,2)}</p>      
      </div>
    </div>
  );
}

export default App;
