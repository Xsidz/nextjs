import React from 'react'

const User = ({params}:{params:{id : string}}) => {
    const {id} = params;
  return (
    <div>User Details :{id} </div>
  )
}

export default User