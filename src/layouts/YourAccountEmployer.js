import React from 'react'
import { Link } from 'react-router-dom';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
 
  } from "reactstrap";

export default function YourAccountEmployer({signOut}) { 
    return (
        <div>
            <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    color="default"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="now-ui-icons users_circle-08 mr-1"></i>
                    <p>Hesabınız</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem tag={Link} to="/employer-profile-page">
                    
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                       Profiliniz                   
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem
                        onClick={signOut}
                    >
                        <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                        Çıkış Yap
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}
