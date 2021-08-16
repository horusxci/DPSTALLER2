import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Divisa1, setEuro] = useState(0);
  const [Divisa2, setDollar] = useState(0);
  const [Divisa3, setBitcoin] = useState(0);
  

  const [tipo, setTipo] = useState(1);
  const [defaultDollar,setDefault] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setEuro((defaultDollar * 0.85) );
    setDollar((defaultDollar * 1) );
    setBitcoin((defaultDollar * 0.000021) );
    
  }, [total, tipo, defaultDollar]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };

  const detectTipo = e =>{
    var tipo = e.target.value;
    if(tipo === 'E')
      setDefault(total*1.18);
    if(tipo === 'D')
      setDefault(total*1);
    if(tipo === 'B')
    {
      setDefault(total*47801.60);
    }
      

    setTipo(tipo);
    
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisas</h1>

      <p>Euro: {Divisa1}</p>
      <p>Dollar: {Divisa2}</p>
      <p>Bitcoin: {Divisa3}</p>      
      <hr />

      <h3>{total}</h3>

      <select onChange={detectTipo} value={tipo}>
        <option value={'E'}>Euro</option>
        <option value={'D'}>Dollar</option>
        <option value={'B'}>Bitcoin</option>        
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
