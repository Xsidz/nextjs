import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='mt-10 px-10'>Dashboard Users List :</div>

    <ul className='py-10 px-30'>
       <Link href='dashboard/users/1'><li>User 1</li></Link>
       <Link href='dashboard/users/2'> <li>User 2</li> </Link>
       <Link href='dashboard/users/3'> <li>User 3</li> </Link>
       <Link href='dashboard/users/4'> <li>User 4</li> </Link>
       <Link href='dashboard/users/5'> <li>User 5</li> </Link>
    </ul>
    
    </>
  )
}

export default Dashboard