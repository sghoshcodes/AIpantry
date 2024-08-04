'use client'
import React, {useState, useEffect} from 'react';

export default function Home() {
  const[items, setItems] = useState([
    {name: 'Coffee', price: '$4.95'},
    {name: 'Coffee', price: '$4.95'},
    {name: 'Coffee', price: '$4.95'}
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm: p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
    <h1 className = 'text-4xl p-4 text-center'>
      Let's track your pantry!
    </h1>
    <div className = 'bg-slate-800 p-4 rounded-lg flex'>
      <form className = 'grid grid-cols-6 items-center text-black'>
        <input className = "col-span-3 p-3 border"type="text" placeholder='Enter Item'/>
        <input className = "col-span-2 p-3 border mx-3" type="text" placeholder='Enter $'/>
        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700  p-2 rounded ml-4 mt-1 mb-1 "> ADD </button>
      </form>
    </div>
      </div>
    </main>
  );
}
