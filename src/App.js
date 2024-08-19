import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
{/* toda class deve ter o nome de className JSX */}


function App() {

  return (
    <div className="App">
      <h1>Olá</h1>
      <Frase />
      <SayMyName name="Mormito"/>
      <Pessoa 
      photo="https://media.licdn.com/dms/image/v2/D4D03AQFMLVwOv1koNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712670917986?e=2147483647&v=beta&t=UTq3laQrXtnG6bbOv-uiAtXXiwYIs2SzHeQUCn5EcsQ"
      name="Mormito" 
      age="18" 
      job="Student" />

      <List />
      </div>

  );
}

export default App
