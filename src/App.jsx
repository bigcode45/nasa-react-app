import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModle, setShowModle] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleToggleModle() {
    setShowModle(!showModle);
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
        console.log(url);
      }
    }
    fetchApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} handleToggleModle={handleToggleModle} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModle && (
        <SideBar data={data} handleToggleModle={handleToggleModle} />
      )}
      {data && (
        <Footer
          data={data}
          showModle={showModle}
          handleToggleModle={handleToggleModle}
        />
      )}
    </>
  );
}

export default App;
