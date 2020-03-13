import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import {Route} from "react-router-dom";

import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component= {MovieList}></Route>
        <Route exact path='/movies/{id}' render={<Movie {...props} />} ></Route>
        </div>
    </div>
  );
};

export default App;
