import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItemRedux from './PostItem'
import {  addUser, sortUsers } from './PostsSlice'
 
 export default function PostsRedux() {
 const data = useSelector(state => state.PostSlice.data )
 
  const dispatch = useDispatch()
 const [inputValue, setInputValue] = useState('')
   const [searchValue, setSearchValue] = useState('')
   const [sortPosts, setSortPosts] = useState()
    
 // Добавляем юзера
   function addNewUser() {
    // убираем пробелы + переводим первый символ в Заглавный 
    let trimmed = inputValue.trim() 
    // через slice или concat trimmed[0].toUpperCase().concat(trimmed.slice(1)) 
    let firstSymbolName =trimmed[0].toUpperCase() + trimmed.slice(1)  
    // или через RegExp // trimmed.replace(/^./, trimmed[0].toUpperCase());
    if(firstSymbolName){
    // теперь всегда в разметке имена будут в заглавной буквы - это поможет правильно сортировать по именам
      dispatch(addUser(firstSymbolName))
      setInputValue('')  }
    }
 
   // показываем кол-во лайков
   let totalLikes = data.filter((item)=> {
    return (item.liked === true) }).length
 // сортировка постов
   function handleSort(e) {
   setSortPosts(e.target.value)
   dispatch(sortUsers(e.target.value))   
     }
 
    return (
   <>
   <div>All users: {data.length} Liked: {totalLikes}</div>
 <hr />
<h3>Add User</h3>
<input value ={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" />
 <button onClick={addNewUser}>Add User</button> 
 <h3>Find by User&Post</h3>
  <input onChange={(e)=> setSearchValue(e.target.value)}  type="text" value={searchValue}  />
  <div className="searchRow">
<h2>Sort by</h2>
<select onChange={(e)=> handleSort(e)} name="" id="">
 <option value="" > - - -</option>
<option value="name" >name</option>
<option value="id">id</option>
<option value="post">post</option>
    <option value="liked" >liked</option>
    <option value="date" >date</option>
   </select>
      </div>
 {
     data.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.post.toLowerCase().includes(searchValue.toLowerCase()) }).map((item, i)=> { 
    return (  
    <PostItemRedux key={i} item={item}  />
      )})  
    }
   </>
  )
}
