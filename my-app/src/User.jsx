import React from 'react'

const User = ({isLoggedIn, username}) => {
 

    return(

        <div>
        {isLoggedIn && `Welcome ${username}`}
        {!isLoggedIn && 'please log in  to continue'}
        </div>
    )
 
}

export default User
