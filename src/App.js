import './App.css';

import data from "./json/data.json";
import friends from "./json/friends.json";

import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";

function App() {
  return (
    <div className="App">
      <section className="Task1">
        <h2>Task 1</h2>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section className="task2">
        <h2>Task 2</h2>
        <FriendList friends={friends} />
      </section>
    </div>
  );
}

export default App;
