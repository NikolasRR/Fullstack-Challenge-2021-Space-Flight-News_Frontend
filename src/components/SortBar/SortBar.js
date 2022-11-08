import { useState, useContext } from "react";

import ArticlesContext from "../../contexts/articlesContext";
import { Container, Option, OptionsBox, SortBox, SortTypeActive, UpDownIcon } from "./style";

function SortBar() {
  const [selectionIsOpen, setSelectionIsOpen] = useState(false);

  const { sortOrder, setSortOrder } = useContext(ArticlesContext);

  function changeSortOrder(value) {
    setSortOrder(value);
    setSelectionIsOpen(false);
  }

  return (
    <Container>
    <SortBox onClick={() => setSelectionIsOpen(!selectionIsOpen)}>
      <SortTypeActive>{sortOrder === "desc" ? "Newest" : "Oldest"}</SortTypeActive>
      <UpDownIcon />
    </SortBox>
    {
      selectionIsOpen &&
      <OptionsBox>
        <Option onClick={() => changeSortOrder("desc")}>Newest</Option>
        <Option onClick={() => changeSortOrder("asc")}>Oldest</Option>
      </OptionsBox>
    }
    </Container>
  );
}

export default SortBar;