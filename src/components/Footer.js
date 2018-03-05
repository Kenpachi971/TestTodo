import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
const Footer = () => (
	<p>
		Montrer: <FilterLink filter={VisibilityFilters.SHOW_ALL}>Tout</FilterLink>
	</p>
);
export default Footer;
