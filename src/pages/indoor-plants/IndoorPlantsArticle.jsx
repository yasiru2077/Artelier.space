import React from 'react';

export default function IndoorPlantsArticle() {
  return (
    <div className="bg-gradient-to-b from-green-200 font-mono text-black to-green-400 min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-8 text-black text-center">
        🌿 Transform Your Home with These Amazing Indoor Plants 🌿
      </h1>
      <p className="text-lg mb-8 text-black text-center">
        Indoor plants not only add a touch of nature to your living spaces but also bring numerous health benefits. From improving air quality to reducing stress, these plants are not just decorative but also functional. Let's explore some popular indoor plants that you can consider for your home:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plantCards.map((plant, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">{plant.name}</h2>
            <p className="mb-6">{plant.description}</p>
          </div>
        ))}
      </div>

      <p className="text-lg text-black mt-8">
        Incorporating these indoor plants into your home not only enhances its aesthetic appeal but also promotes a healthier and more relaxing environment. Experiment with different combinations to create your own indoor oasis.
      </p>
    </div>
  );
}

const plantCards = [
    {
        id: 1,
        name: 'Spider Plant',
        description: 'The Spider Plant is known for its arching leaves and is an excellent air-purifying plant.',
      },
      {
        id: 2,
        name: 'Peace Lily',
        description: 'The Peace Lily is prized for its elegant white flowers and ability to thrive in low-light conditions.',
      },
      {
        id: 3,
        name: 'Rubber Plant',
        description: 'With its glossy leaves, the Rubber Plant adds a touch of sophistication to any indoor space.',
      },
      {
        id: 4,
        name: 'Elephant Ear Plants',
        description: 'Known for their large, striking leaves, Elephant Ear Plants are a bold and beautiful choice for indoor gardening.',
      },
      {
        id: 5,
        name: 'Snake Plants',
        description: 'Snake Plants are hardy, resilient, and known for their vertical sword-shaped leaves.',
      },
      {
        id: 6,
        name: 'Ferns',
        description: 'Ferns are delicate and lacy plants that bring a touch of nature\'s charm indoors.',
      },
      {
        id: 7,
        name: 'Pothos',
        description: 'Pothos, or Devil\'s Ivy, is a versatile and easy-to-care-for trailing plant, perfect for beginners.',
      },
      {
        id: 8,
        name: 'English Ivy',
        description: 'English Ivy is a classic vine that adds an element of timeless beauty to any indoor space.',
      },
      {
        id: 9,
        name: 'Succulents',
        description: 'Succulents are known for their unique shapes and low-maintenance care, making them popular indoor choices.',
      },
      {
        id: 10,
        name: 'Cacti',
        description: 'Cacti are iconic for their ability to thrive in arid conditions, adding a touch of the desert to your home.',
      },
  // Add more plants as needed
];
