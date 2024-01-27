import './App.css';
import { Provider } from "react-redux";
import store from './Stores/store';
import Todolist from './todolist';

function App() {
    
    return(<Provider store={store}>
      <div>
        <h1>Hello counter</h1>
        <Todolist></Todolist>
      </div>
    </Provider>)
}

export default App;
