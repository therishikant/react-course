import Todo from "./componants/Todo";

function App() {
  return (
    <div>
      <h2>My Todo</h2>
      <Todo text='Learn react' />
      <Todo text="Master React"/>
      <Todo text="Make app using React"></Todo>

    </div>
  );
}

export default App;
