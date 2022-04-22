import axios from "axios";
async function getData(userId){

    const { data: get } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    get.posts = post[userId - 1]
    return console.log(get)
  }
  export default getData;