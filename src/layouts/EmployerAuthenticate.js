import React from 'react'
import {
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,

  } from "reactstrap";
import EmployerLogin from './EmployerLogin';
import EmployerRegister from './EmployerRegister';

export default function EmployerAuthenticate({signIn}) {
    return (
        <div>
            <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    nav
                    onClick={(e) => e.preventDefault()}
                    className="btn-info btn-round"
                    color="info"
                >
                    <i className="now-ui-icons users_single-02 mr-1"></i>
                    <p>İŞ VEREN</p>
                    <DropdownMenu>
                        <EmployerLogin signIn={signIn}/> 
                        <EmployerRegister />
                    </DropdownMenu>
                </DropdownToggle>
            </UncontrolledDropdown>
        </div>
    )
}
