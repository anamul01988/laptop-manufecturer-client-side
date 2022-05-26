import React from "react";

const Blog = () => {
  return (
  <div className="blog-align flex justify-center bg-base-200 py-11 items-center">
        <div className="blogs bg-base-200 ">
        <div class="card my-6 max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          How will you improve the performance of a React Application?
        </h2>
        <p>
            To optimize the perfomance of react app we should follow some steps. <br />
            1. keeping component state local where required <br />
            2. memorize re rerenders use to prevent unnecessary rerenders <br />
            3. code splitting in react using dynamic import <br />
            4. List vairtualization use in react <br />
            5. By avoiding Anonymous function <br />
        </p>
      </div>
    </div>
    <div class="card mb-6 max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
        What are the different ways to manage a state in a React application?
        </h2>
        <p>
            There are mainly 4 kinds of react state use to manage state in react. they are local state, global state, server state, url state.
            1. Local state: Generally, it records any data and changes in react app. It can be used for storing values, form input, data also. <br />
            2. Global state: This state is used to modified withing the same component. <br />
            3. Server state: The server state handles server side data by http request.
             It holds data and request states. <br />
            4. it is set the state that belongs to the react component in the query string of the url and parse it.
        </p>
      </div>
    </div>
    <div class="card mb-6 max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
        How does prototypical inheritance work?
        </h2>
        <p>
        JavaScript is a prototype-based Object Oriented Programming Language, instead of class-based. In js, there Primitive and non primitive data types value. primitive such
        as strings, number, boolean, undefined and null. On the othe hand, non primitive are arrays ,function , date.
        In javascripts constructor or a prototype considered as a object. By creating a prototype, developers can easily create multiple unique instances of the prototype. This is a create way to keep our code clean and concise.
        Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
        </p>
      </div>
    </div>
    <div class="card mb-6 max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
        </h2>
        <p>
        React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly.
        
        </p>
      </div>
    </div>
    <div class="card mb-6 max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
        </h2>
        <p>
       we can search by query. <br />
       if i consider fake api here with data, <br />
       const temp = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');
       to search we can use given api like: <br />
       const temp = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity');

        </p>
      </div>
    </div>
  </div>
  </div>

   
  );
};

export default Blog;
