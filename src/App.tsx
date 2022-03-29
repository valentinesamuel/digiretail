import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootStore } from './store/store';
import { GetUsers } from './store/actions/UserActions'

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootStore) => state.user)

  const handleSubmit = () => {
    dispatch(GetUsers())
  }


  console.log(userState);

  return (
    <div className="App">
      <button onClick={handleSubmit}>Get USers</button>
      {userState.users?.map(user =>
        <>
          <h3>{user.name}</h3>

        </>
      )}
    </div>
  );
}

export default App;
