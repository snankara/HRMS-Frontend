import React from 'react'
import { useLocation } from 'react-router-dom';
import {
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    DropdownItem,

} from "reactstrap";
import EmployerLogin from './EmployerLogin';
import EmployerRegister from './EmployerRegister';

export default function EmployerAuth({ signIn }) {
    let location = useLocation();

    return (
        <div>
            {location.pathname === "/" && 
            <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    nav
                    onClick={(e) => e.preventDefault()}  
                    className="btn-round"
                >
                    <i className="now-ui-icons users_single-02 mr-1"></i>
                    <p>İŞ VEREN</p>
                    <DropdownMenu className="mt-1">
                        <DropdownItem>
                            <EmployerLogin signIn={signIn} /> 
                        </DropdownItem>
                        <DropdownItem>
                            <EmployerRegister />
                        </DropdownItem>
                    </DropdownMenu>
                </DropdownToggle>
            </UncontrolledDropdown>
            }
        </div>
    )
}
