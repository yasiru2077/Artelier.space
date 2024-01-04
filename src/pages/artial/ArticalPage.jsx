import React from 'react'
import SingleArtical from '../../components/single-artical/SingleArtical'
import MainNavigation from '../../components/main-navigation/MainNavigation'


export default function ArticalPage() {
  return (
    <React.Fragment>
   <MainNavigation/>
    <div className='bg-gradient-to-b from-green-200 font-mono text-black to-green-400'>
        <br />
        <SingleArtical/>
    </div>
    </React.Fragment>
  )
}
