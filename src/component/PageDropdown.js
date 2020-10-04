import React  from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function PageDropdown(){
	return(
		<div>
		<DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
			  	<Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
  				<Dropdown.Item href="#/action-2">English</Dropdown.Item>
  				<Dropdown.Item href="#/action-3">Spain</Dropdown.Item>
		</DropdownButton>
		</div>
		)
}

export default PageDropdown;
