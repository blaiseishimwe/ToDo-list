function App(){
  const [todos, setTodos] = React.useState([ //Creates new state 
    // {
    //   text: 'learn react',
    //   isCompleted: false,
    // },
    // {
    //   text: 'meet friend for lunch',
    //   isCompleted: false,
    // },
    // {
    //   text: 'build todo app',
    //   isCompleted: false,
    // }        
  ]);
  //Create a new state
  const [value, setValue]= React.useState('');
  //define handleSubmit Updates state
  const handleSubmit= (e) => {
    e.preventDefault();//Prevent page reload
    if(!value) return;//checks if a text was added, if not return
    const newTodo=[...todos, {text:value, isCompleted:false}];/*otherwise
    constructs a new array containing the existing plus new objects using distructuring method */
    setTodos(newTodo);//update states with the new array
    setValue('');//Creates a new value
    console.log(newTodo);
  };
  // remove object upon onclick
  const removeTodo = e =>{
    const index = Number(e.target.id);
    console.log(index);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
      {todos.map((todo, i) => <div key={i} id= {i} onClick={removeTodo}>{todo.text}</div>)} 
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={value}
          placeholder='add ToDo...'
          onChange= {e => setValue(e.target.value)}

          />

      </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
