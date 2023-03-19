import React from 'react'
import { Children } from '../types/Children'

const Layout = ({children}: Children) => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
        {children}
    </div>
  )
}

export default Layout