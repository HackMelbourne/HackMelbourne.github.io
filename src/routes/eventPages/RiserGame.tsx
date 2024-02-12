import React, { useRef } from 'react';
import { addDoc, collection, query, where, getDocs } from '@firebase/firestore';
import { db } from '../../firebase';

export default function RiserGame() {
  const messageRef = useRef<HTMLInputElement>(null);

  const ref = collection(db, 'messages');

  const q = query(ref);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (messageRef.current) {
      console.log(messageRef.current.value);
    }

    let data = {
      message: messageRef.current?.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-24 ">
      <form onSubmit={handleSave}>
        <label> Enter Message </label>
        <input type="text" ref={messageRef} className="text-neutral-900"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
