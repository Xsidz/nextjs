import Link from 'next/link'
import React from 'react'

const layout = ({children} :{children :React.ReactNode}) => {
  return (
    <>
    <Link href='/dashboard' ><h1 className='text-3xl'>Dashboard</h1></Link>
    <div>{children}</div>
    </>
  )
}

export default layout