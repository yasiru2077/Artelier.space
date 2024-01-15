import React from 'react'
import './secondary-navigation.css';
import { Link } from 'react-router-dom';

export default function secondaryNavigation() {
  return (
    <div className='secondaryNavigation'>
        <div className="secondary-navigation p-5 bg-white rounded-lg shadow-md">
            <ul className="flex flex-row gap-5 justify-center text-center">
              <li>
                <span className="material-symbols-outlined">home</span>
              </li>
              <li>
               
                <span style={{cursor:'pointer'}} className="material-symbols-outlined">yard</span>
             
              </li>
              <li>
                <span className="material-symbols-outlined">potted_plant</span>
              </li>
              <li>
                <span className="material-symbols-outlined">move_item</span>
              </li>
            </ul>
          </div>
    </div>
  )
}
