import './App.css';
import Head  from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import ParentComponent from './Equipment';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Head/>
      <ParentComponent/>
      <Content/>
      
    </div>
  );
}

export default App;
