import './App.css';

//firebase
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import { useEffect, useState } from 'react';

import Detail from './components/Detail/Detail';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';



function App() {
  const [info, setInfo] = useState([])

  const infoCollection = collection(db, 'info')

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(infoCollection)

      setInfo(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getInfo()
  }, [])


  return (
    <div className="App">
      <h1 className='app__title'>OUR VALUES</h1>
      <div className='app__info'>
        {info?.map(({ id, title, description, icon }) => (
          <Detail key={id} title={title} description={description} icon={icon} />
        ))}
      </div>
      
      <BackgroundImage />
    </div>
  );
}

export default App;
