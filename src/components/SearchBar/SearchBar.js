import { useState, useRef, useEffect, useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import ArticlesContext from '../../contexts/articlesContext';
import requests from '../../services/API/requests';
import {
  SearchBox,
  SearchIcon,
  SearchInput
} from './style';

function SearchBar() {
  const [warning, setWarning] = useState(false);

  const { setPage, searchValue, setSearchValue, searching, setSearching } = useContext(ArticlesContext);
  const ref1 = useRef(null);

  useEffect(() => {
    ReactTooltip.show(ref1.current);
  }, [warning])


  async function verifyAndSearch() {
    if (searchValue.length < 3) {
      setWarning(true);
      setTimeout(() => {
        ReactTooltip.hide(ref1.current);
        setWarning(false);
      }, 2000);
      return;
    }

    setPage(0);
    setSearching(!searching);
  }

  return (<>
    <SearchBox warning={warning} ref={ref1} data-tip='at least 3 characters'>
      <SearchInput
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") verifyAndSearch() }}
        type="text"
        placeholder="Search"
      ></SearchInput>
      <SearchIcon onClick={() => verifyAndSearch()} />
    </SearchBox>
    <ReactTooltip disable={!warning} place='bottom' />
  </>
  )
}

export default SearchBar;