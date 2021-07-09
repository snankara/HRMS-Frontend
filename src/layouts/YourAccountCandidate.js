import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

export default function YourAccountCandidate() {
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
                <DropdownMenu className="mt-1">
                    <DropdownItem tag={Link} to="/candidate-profile-page">
                        <div>
                            <i className="now-ui-icons design_bullet-list-67 mr-2"></i>
                            Profiliniz
                        </div>
                    </DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem
                        // onClick={signOut}
                    >
                        <div>
                            <i className="now-ui-icons arrows-1_share-66 mr-2"></i>
                            Çıkış Yap
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>

    )
}
