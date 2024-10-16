import React, { useState } from 'react';
import Card1 from './Components/Card1';

function App() {
  const data = [
    {
      name: "John",
      profession: "Painter",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      friends: false
    },
    {
      name: "Jane",
      profession: "Writer",
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",
      friends: false
    },
    {
      name: "Mike",
      profession: "Engineer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      friends: false
    }
  ];

  const [realdata, setdata] = useState(data);

  const toggleFriendship = (index) => {
    setdata((prev) => {
      return prev.map((item, idx) => {
        if (idx === index) {
         
          return {...item, friends: !item.friends};
        }
        return item;
      });
    });
  };
   

  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {realdata.map((item, index) => (
        <Card1 values={item} key={index} handle={() => toggleFriendship(index)} />
      ))}
    </div>
  );
}

export default App;
