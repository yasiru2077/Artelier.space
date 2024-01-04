import React from 'react'
import Header from '../../components/header/Header'

export default function Welcome() {
  const sectionStyle = {
    backgroundImage: `url('./images/purple-daisy-17176-1920x1200.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
    <div>
      <Header/>
      <div className="Welcome font-mono">
      <div class="flex flex-col h-screen justify-between">
        <header class="bg-green-500 text-white p-4">
            <h1 class="text-4xl font-bold">Welcome to Garden Haven</h1>
            <p class="text-lg mt-2">Your perfect companion for gardening bliss!</p>
        </header>

        <main class="flex-grow flex items-center justify-center" style={sectionStyle}>
            <div class="text-center">
                <h2 class="text-3xl text-gray-100 font-bold mb-4">Get ready to grow!</h2>
                <p class="text-lg text-gray-100 mb-6">Discover the joy of gardening with Garden Haven. Whether you're a
                    seasoned gardener or just starting, we've got everything you need.</p>
                <a href="./images/images (1).jpg" class="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600">Download
                    Now</a>
            </div>
        </main>

        <footer class="bg-green-500 text-white p-4 text-center">
            <p>&copy; 2024 Garden Haven. All rights reserved.</p>
        </footer>
    </div>
      </div>
    </div>
  )
}
