import './App.css';
import LogoComponent from './componentes/LogoComponent.jsx';
import ListaTareas from './componentes/ListaTareas.jsx';

const texto ='Aplicacion Didactica Author: Jose Caballero'

function App() {
  return (
    <div className='container-main'>
      <LogoComponent texto={texto} />  
      <ListaTareas />
    </div>
  );
}

export default App;
