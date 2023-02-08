import {  createSlice } from "@reduxjs/toolkit"
const data  = [
 { id: 3, name: "Anna", post: '', liked: false, date: Date.now() },
{ id: 2, name: "Sergey", post: '', liked: false, date: 1675679286888 },
{ id: 1, name: "Boris", post: '', liked: false, date: 16756792868879 },
];
const initialCount ={
data: data ,
}

const PostSlice  = createSlice({
name: 'posts',  
initialState:initialCount,  
reducers: {
// добавлям юзера
addUser: (state, action) => {
  // разные варианты синтаксиса
  // return { data: [...state.data, {id: data.length+1, name: action.payload, post: '', liked: false, date: Date.now()} ]}  
  state.data = [...state.data , {id: data.length+1, name: action.payload, post: '', liked: false, date: Date.now()} ]
},
  // удаляем юзера
  deleteUser : (state, {type, payload})=> {
// разные варианты синтаксиса
  // state.data= state.data.filter((itemName)=> itemName.name !== payload.name )
  return {
    data: [ ...state.data.filter((itemName)=> itemName.name !== payload.name )] 
  }
  },
// добавляем посты
addPost: (state, action) => {
const {newPostValue, item} = action.payload
// Два варианта синтакиса
//  state.data = state.data.map((itemName) => {
   //  if (itemName.name === item.name) {
  //    return { ...itemName, post: newPostValue };
  //        }  return itemName;  });
  return { data: [ ...state.data.map((itemName) => {
         if (itemName.name === item.name) {
            return { ...itemName, post: newPostValue };
          }  return itemName;  }
          )]
      }   
    },
    // очищаем посты
    clearPost: (state, {type, payload}) => {
    return { data: [...state.data.map((itemName) => {
        if (itemName.name === payload.name) {
           return { ...itemName, post: '' };
         }  return itemName;  }
         )]
     }
    },
    // Тоглим лайки
    toggleLike: (state, {type, payload}) => {
    return { 
      data: [...state.data.map((itemName) => {
        if (itemName.name === payload.name) {
           return { ...itemName, liked: !itemName.liked };
         }  return itemName; }
         )]
     }
    },
    
    sortUsers: (state, {type, payload}) => {
       state.data = [...state.data.sort((a,b)=> payload === 'liked' || payload === 'post' ? b[payload] > a[payload]  ? 1 : -1 : a[payload]  > b[payload]  ? 1 : -1 )]
     },
 
  }
  })
 
  export const {addPost, addUser, clearPost, deleteUser, toggleLike, sortUsers } = PostSlice.actions; 
  export default PostSlice.reducer 
 

 