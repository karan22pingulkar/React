import React from 'react';

import './Main.css'
export default function Main() {

  return(

<div class="center">

   <img 
          src={require('./logo.PNG')} 
          alt="logo"
          height={200}
             
    />
    <p class="p">
          !Welcome to the Main Page!
    </p>


<div class="content">


<p>
React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
React code is made of entities called components. These components are modular and reusable . React applications typically consist of many layers of components. The components are rendered to a root element in the DOM using the React DOM library. When rendering a component, values are passed between components through props (short for "properties"). Values internal to a component are called its state.

The two primary ways of declaring components in React are through function components and class components.
</p>


</div>


   
</div>

  );

}
