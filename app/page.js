'use client'
import React, {useState, useEffect} from 'react';
import { collection, addDoc, getDoc, querySnapshot, query, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import {db} from './firebase'

export default function Home() {
  const[items, setItems] = useState([
    {name: 'Coffee Grounds', quantity: '2'},
    {name: 'Nuts', quantity: '999999'},
    {name: 'iPhone 16', quantity: '1'}
  ]);

  const [newItem, setNewItem] = useState({name: '', quantity: ''})
  const [total, setTotal] = useState(0);

  const addItem = async(e) => {
    e.preventDefault()
    if(newItem.name !== '' && newItem.quantity !==''){
      setItems([...items, newItem])
      await addDoc(collection(db,'items'), {
        name: newItem.name.trim(),
        quantity: newItem.quantity,
      });
      setNewItem({name: '', quantity: ''});
    }
  };

  useEffect(() => {
    const q = query(collection(db,'items'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = []

      querySnapshot.forEach((doc)=>{
        itemsArr.push({...doc.data(), id: doc.id})
      })
      setItems(itemsArr)

      const calculateTotal = () => {
        const totalQuant = itemsArr.reduce((sum, item) => sum + parseFloat(item.quantity), 0 )
        setTotal(totalQuant)
      }
      calculateTotal();
      return () => unsubscribe();
    }); 
  }, []);

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id));
  }
  return (
    <main className="bg-gradient-to-r from-red-400 to-orange-300 flex min-h-screen flex-col items-center justify-between sm: p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
    <h1 className = 'font-poppins font-medium font-semibold text-4xl p-4 text-center'>
      Let's track your pantry!
    </h1>
    <div className = 'bg-slate-800 p-4 rounded-lg'>
      <form className = 'grid grid-cols-6 items-center text-black'>
        <input value = {newItem.name} onChange={(e) =>setNewItem({...newItem, name: e.target.value})} className = "col-span-3 p-3 border"type="text" placeholder='Enter Item'/>
        <input value = {newItem.quantity} onChange={(e) =>setNewItem({...newItem, quantity: e.target.value})} className = "col-span-2 p-3 border mx-3" type="text" placeholder='Enter Quantity'/>
        <button onClick = {addItem} type="submit" className="text-white bg-blue-500 hover:bg-blue-700  p-2 rounded ml-4 mt-1 mb-1 "> ADD </button>
      </form>
      <ul>
        {items.map((items, id) => (
            <li key={id} className = 'my-4 w-full flex justify-between bg-slate-950'>
              <div className='p-4 w-full flex justify-between'>
                <span>
                  {items.name}
                </span>
                <span>
                  x{items.quantity}
                </span>
              </div>
              <button type ="submit" onClick = {() => deleteItem(items.id)}className="text-white bg-red-500 hover:bg-red-700  p-2 rounded">DELETE</button>
            </li>

        )
        )}
      </ul>

        {items.length < 1 ? ('') : (
          <div className = "p-3">
            <span>Total # of items: {total}</span>
          </div>
        )}

    </div>
      </div>
    </main>
  );
}
