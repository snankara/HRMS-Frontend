import React from 'react'
import { DropdownItem } from 'reactstrap'

export default function EmployerLogin({signIn}) {
    return (
        <div>
            <DropdownItem onClick={signIn}>  
                Giriş Yap
            </DropdownItem>
        </div>
    )
}
