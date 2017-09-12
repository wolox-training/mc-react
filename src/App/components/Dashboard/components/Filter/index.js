import React from 'react';
import './Filter.css';
import searchImage from '../../../../../assets/search.svg';

const filters = [
  { label: 'Seleccionar filtro', value: ''},
  { label: 'Autor', value: 'author'},
  { label: 'Nombre', value: 'title'}
];

function Filter(props) {
  return (
    <div className='filter'>
      <form className='search-form' onSubmit={ props.onFilter }>
        <select className='filter-value margin-r-3' onChange={ props.onAttrChange }>
          {
            filters.map((filter, index) =>
              <option value={ filter.value } key={ index }>{ filter.label }</option>
            )
          }
        </select>
        <div className='search-value'>
          <input className='filter-value' placeholder='Buscar...' onChange={ props.onValueChange }/>
          <button type='submit' className='search-button'>
            <img src={ searchImage } alt='search' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
