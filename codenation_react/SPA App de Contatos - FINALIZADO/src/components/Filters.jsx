import React from 'react';
import '../App.scss';

class Filters extends React.Component {
	render() {
		return (
			<div className="container" data-testid="filters">
          <section className="filters">
            <div className="filters__search">
              <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange = {this.props.handleChange}/>

              <button className="filters__search__icon" onClick = {this.props.handleInput}>
                <i className="fa fa-search"/>
              </button>
            </div>

            <button className="filters__item is-selected" onClick = {this.props.handleClick}>
              Nome <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick = {this.props.handleClick}>
              País <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick = {this.props.handleClick}>
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick = {this.props.handleClick}>
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item" onClick = {this.props.handleClick}>
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>
		);
	}
}

export default Filters;
