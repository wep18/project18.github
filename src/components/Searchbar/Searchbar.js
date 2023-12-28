import React, { useState } from 'react';
import { db } from '../../config/firebase.config';
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import './Searchbar.css';
const SearchBar =  () => {

    const [news, setNews] = useState([]);

    async function search(e){
      e.preventDefault()
      setNews(e.target.value)
  
      const firebaseConfig = db;

      const collection_ref = collection(db, 'news')
      const q = query(collection_ref, where("title", ">=", "A"), where("title", "<=", "A\uf8ff"))
      const doc_refs = await getDocs(q)
  
      const res = []
      doc_refs.forEach(news => {
           res.push({
               id: news.id, 
               ...news.data()
           })
       })
  
      setNews(res)
    }

    return (
        <div className="w-full max-w-xl flex mx-auto p-20 text-xl form span z" >
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900  "
                placeholder="Search"
                onChange={search}
            />
            <button className="bg-white ">🔍</button>
        </div>
    );
};

export default SearchBar;