

    function createbookStructure({title,author,publishedYear,id,coverImageUrl}){
        
  document.querySelector(".books-container").innerHTML += `  <div class="bookcontainer">
    <img src="${coverImageUrl}" alt="">
    <div>
        <h3>${title}</h3>
        <p>${author}</p>
        <p>${publishedYear}</p>
        <button class="delete" onclick="deleteUser(${id})"><i class="fa-solid fa-trash deleteIcon" style="color: #f41010;"></i></button>
        <button  class="update" onclick="updatebook(${id})"><i class="fa-solid fa-pen"></i></button>
    </div>
</div>`;}
// });


let getbooks = async () => {
  let getallbooks = await fetch(
    "https://64f6f4189d7754084952d867.mockapi.io/users"
  );
  let allbooks = await getallbooks.json();
  return allbooks;
};
let updateBookdetails = async () => {
  let getallbooks = await fetch(
    "https://64f6f4189d7754084952d867.mockapi.io/users"
  );
  let allbooks = await getallbooks.json();
  return allbooks;
};
let passdeletebook = async (id) => {
  let deletebook = await fetch(
    `https://64f6f4189d7754084952d867.mockapi.io/users/${id}`,
    {
      method: "delete",
    }
  );
  let res = deletebook.json();
  return res;
};
let deletebook=async(id)=>{
   let res=await passdeletebook(id);
    createbookUi()
}
let createbook = () => {
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let genre = document.querySelector(".genre").value;
  let publishedYear = document.querySelector(".publishedYear").value;
  let coverImageUrl = document.querySelector(".coverImageUrl").value;
  let description = document.querySelector(".description").value;
  const data = {
    title,
    coverImageUrl,
    description,
    author,
    genre,
    publishedYear,
  };
  fetch(`https://64f6f4189d7754084952d867.mockapi.io/users/`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => {
     title.value="";
   author.value="";
   genre.value="";
   publishedYear.value="";
   coverImageUrl.value="";
   description.value="";
}).then(()=>createbookUi())
    

};
let searchBook = async() => {
    let searchText = document.querySelector(".searchText").value;
    let res=await fetch(
      `https://64f6f4189d7754084952d867.mockapi.io/users?title=${searchText}`,
      {
        method: "get",
      }
    )
    let response=res.json()
    return response;
}
let searchBookByName=async()=>{
    let res= await searchBook()
   
    document.querySelector(".books-container").innerHTML =""
    res.forEach((e)=>createbookStructure(e))
}
let createbookUi=async()=>{
    let books=await getbooks();
    document.querySelector(".books-container").innerHTML =""
    books.forEach(element => {
        createbookStructure(element)
    });
    }
    createbookUi()

