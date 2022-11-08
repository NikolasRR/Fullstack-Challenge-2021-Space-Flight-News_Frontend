import { useState } from "react";

import Header from "./Header/Header";
import Timeline from "./Timeline/Timeline";
import ArticlesContext from "./../contexts/articlesContext";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("desc");

  return (
    <ArticlesContext.Provider value={{
      page, setPage,
      searchValue, setSearchValue,
      searching, setSearching,
      sortOrder, setSortOrder
    }}>
      <Header />
      <Timeline />
    </ArticlesContext.Provider>
  );
}

export default App;