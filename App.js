

const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement('h1',{id:"heading"},"Hello world from react!"); 
// root.render(heading)


// CREATING A HIEARCHY DOM

const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "Hello in hierarchy")]));
root.render(parent);