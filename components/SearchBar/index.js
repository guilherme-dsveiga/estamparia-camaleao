import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Routes } from "../../routes";

const SearchBar = () => {
  const [searched, setSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterByFields = ["label", "route"];

  return (
    <div className="relative">
      <Typeahead
        className="border-2 text-black bg-white"
        clearButton
        emptyLabel="Nada encontrado"
        size="lg"
        id="asynctypeahead-search"
        options={Routes}
        defaultSelected={searched}
        onChange={setSearched}
        isLoading={isLoading}
        filterBy={filterByFields}
        labelKey="route"
        placeholder="Buscar"
        renderMenuItemChildren={(option) => (
          <div className="bg-white p-2 hover:bg-gray-100">
            {option.label}
            <div>
              <small>Rota: {option.route}</small>
            </div>
          </div>
        )}
      />
      {searched.length === 0 ? (
        <i className="bi bi-search text-main-purple absolute top-[3px] right-2"></i>
      ) : null}
    </div>
  );
};

export default SearchBar;
