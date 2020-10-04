import React from 'react';
import PageListgroup from './../component/PageListgroup';
import PageJumbotron from './../component/PageJumbotron';
import PageForm from './../component/PageForm';

function Footer(){
	return (
		<table width="100%">
		<tr>
		<td>
          <PageListgroup />
        </td>

        <td>
		  <PageJumbotron />
        </td>

        <td>
          <PageForm />
        </td>
        </tr>
        </table>
		) 
}
export default Footer;