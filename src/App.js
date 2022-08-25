import "./App.css";
import List from "./components/List"
//import NewsList from "./components/NewsList";
import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
//import SearchForm from "./SearchForm";
function App() {
  const [newsItems, setNewsItems] = useState([]);
  const [query, setQuery] = useState("");

  console.log(newsItems);
  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
        setNewsItems(response.data.hits);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },[query]);

  return (
    <div>  
         <Header />
         <SearchForm setQuery= {setQuery}/>
   <List data = {newsItems} />
   
    </div>
  );
}

export default App;
