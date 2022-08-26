import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";

function App() {
  const data = useSelector((item) => item.cardReducer.carts);
  console.log(data);
  const [search, setSearch] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div>
      <Navbar />
      <section class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <Searchbar handleSearch={handleSearch} search={search} />
        <div class="relative max-w-7xl mx-auto">
          <Header />
          <Cards data={data} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
