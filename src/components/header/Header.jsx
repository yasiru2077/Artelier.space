import React from 'react'
import MainNavigation from '../main-navigation/MainNavigation'

export default function Header() {
  return (
    <div>
        <MainNavigation/>
        <img className='welcomeImage w-full' src="./images/8aeafd7f-97cf-4920-8b66-aa8142ade893--2019-1210_groceries-winter-produce-2_3x2_rocky-luten_010.jpg" alt="" />
    </div>
  )
}
