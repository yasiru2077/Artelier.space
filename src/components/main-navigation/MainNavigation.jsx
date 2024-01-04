import React from 'react'
import './mainnavigation.css'
import { Link } from 'react-router-dom'

export default function MainNavigation() {
    return (
        <div>
            <nav class="mainNavigation flex items-center justify-between flex-wrap bg-green-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6 gap-1">
                    <span class="companyLogo font-semibold text-black font-mono text-2xl tracking-tight">AgriSync360</span>
                </div>
                <ul class="mainNavigationlinks flex gap-5">
                    <li class="">
                        <Link to="/login" class="text-gray-900 font-mono font-bold hover:text-blue-800" href="#">Login</Link>
                    </li>
                    <li class="">
                        <a class="text-gray-900 font-mono font-bold hover:text-blue-800" href="#">Register</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
