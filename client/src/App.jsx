
import { Provider } from "react-redux";
import store from './store.jsx';

import Index from "./pages/index.jsx";

function App() {
  

  return (
      <Provider store = {store}>
           <Index />
        </Provider>
    
  )
}

export default App
