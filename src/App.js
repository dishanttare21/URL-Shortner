import './App.css';
import {useState, useEffect} from 'react';
// import Table from './components/Table';
// import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, [setUrls])

  const fetchUrls = async () =>{
    try {
      const response = await fetch('https://nodejs-url-shortner.herokuapp.com/');
      const data = await response.json();
      setUrls(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <Header />
      <Home fetchUrls={fetchUrls} url={urls}/>
      {/* {urls.map(url =>(
        <Table 
        key={url._id}
        long={url.longUrl} 
        short={url.shortUrl} 
        date={url.date} />
      ))} */}
    </div>
  );
}

export default App;
