
import "./App.css";
import List from "./components/List"
//import NewsList from "./components/NewsList";
import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
//import SearchForm from "./SearchForm";

import Loading from "./components/Loading"


function App() {
  const [newsItems, setNewsItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(newsItems);
  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
        setNewsItems(response.data.hits);
        console.log(response);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  },[query]);

  return (

    <div className="mainContainer">  
         <Header />
         <SearchForm setQuery= {setQuery}/>
         {loading? <Loading /> : <List data = {newsItems} />}
   
   

    </div>
  );
}

export default App;
