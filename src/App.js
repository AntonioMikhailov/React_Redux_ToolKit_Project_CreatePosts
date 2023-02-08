import React   from "react";
import { Provider, } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PostsRedux from "./Posts";
 import store, { persistor }  from "./store";

export const ThemeContext = React.createContext()
function App() {
   return (
<>
  <Provider store={store}>  
  <PersistGate loading={null} persistor={persistor}> 
   <PostsRedux/>
   </PersistGate>
   </Provider>
</>
  );
}
export default App;
