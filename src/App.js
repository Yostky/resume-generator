import './App.css';
import InputForm from './components/InputForm';
import PDFFile from './components/PDFFile';
import Context from './components/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <InputForm/>
        <PDFFile/>
      </Context>
    </div>
  );
}

export default App;