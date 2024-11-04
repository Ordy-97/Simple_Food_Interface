import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import Cart from '../features/Cart';
import Total from '../features/Total';
import {Voucher} from '../features/Voucher';
import Owner from '../features/Owner';
import Menu from '../features/Menu';
import { Notes } from '../features/Notes';
import { Fidelity } from '../features/Fidelity';

 
function App() {
 return (
    <Provider store={store}>
        <div className="App">
          <Menu />
          <Cart />
          <Total />
          <Voucher />
          <Owner />
          <Notes />
          <Fidelity />
        </div>
    </Provider>
 );
}

export default App;