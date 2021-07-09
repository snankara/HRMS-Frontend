import React from 'react'

export default function EmployerLogin({signIn}) {
    return (
        <div onClick={signIn}>
            <i className="now-ui-icons users_circle-08"></i>
            Giriş Yap            
        </div>
    )
}
