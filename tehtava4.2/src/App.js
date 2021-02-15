import React, {useState, useEffect} from 'react';

function App() {

  const [virhe, setVirhe] = useState('Haetaan...');
  const [nimi, setNimi] = useState('');
  const [user, setUser] = useState('');
  const [kaupunki, setKaupunki] = useState('');

  const getValues = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/5'
    
    try {
      const response = await fetch(url);
      var data = await response.json();
      setNimi(data.name);
      setUser(data.username);
      setKaupunki(data.address.city);
      setVirhe('');
    }catch (error){
      setVirhe('Haku ei onnistunut')
      console.log('error', error);
    }


  }

  useEffect(() => {getValues()},[]);

  if (virhe.length > 0){
    return(<div>{virhe}</div>)
  }

  return (
    <div className="App">
      <p>Nimi: {nimi}</p>
      <p>Käyttäjä: {user}</p>
      <p>Kaupunki: {kaupunki}</p>
    </div>
  );

}

export default App;
