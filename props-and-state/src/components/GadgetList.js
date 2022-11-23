import React from 'react';

const Gadget = ({item}) => {

  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <img src={item.src} alt={item.title}/>
    </div>
  );
}


const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones colour {props.color} </h2>
      {props.items.map((item) => (<Gadget key={item.title} item={item}/>))}
    </main>
  );
};

export default GadgetList;
