import React from 'react'
import SingleArtical from '../../components/single-artical/SingleArtical'
import SecondaryNav from '../../components/secondarynav/SecondaryNav'
import './articalpage.css';

export default function ArticalPage() {
  return (
    <React.Fragment>
   
    <div className='artitalpage bg-gradient-to-b from-green-200 font-mono text-black to-green-400'>
       <br />
        <SingleArtical/>
    </div>
    <SecondaryNav/>
    </React.Fragment>
  )
}
