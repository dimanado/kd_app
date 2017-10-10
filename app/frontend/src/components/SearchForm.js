import React from 'react';
import 'SearchForm.css';

export default function SearchForm() {
  return (
    <form className="SearchForm form-inline">
      <div className="form-group">
        <label htmlFor="search" className="sr-only">Поиск</label>
        <input type="text" className="form-control" id="search" placeholder="Поиск" />
      </div>

      <button type="submit" className="btn btn-primary">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}
