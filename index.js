


// books.forEach(({ title, author, publishedYear, id }) => {
    function createbookStructure({title,author,publishedYear,id}){
  document.querySelector(".booksContainer").innerHTML += `  <div class="bookcontainer">
    <img src="https://blog-cdn.reedsy.com/directories/gallery/68/large_19a00aea82e591aaa3ddb796479df0c5.jpg" alt="">
    <div>
        <h3>${title}</h3>
        <p>${author}</p>
        <p>${publishedYear}</p>
        <button onclick="deletebook(${id})">delete</button>
        <button onclick="updatebook(${id})">update</button>
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
    genere,
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
    document.querySelector(
      ".adduser"
    ).innerHTML += `<i class="fa-regular fa-circle-check check" style="color: #49b941;"></i>`;
    createbookUi()
  });
};
let searchBook = async() => {
    let searchText = document.querySelector(".Search-value").value;
    let res=await fetch(
      `https://64f6f4189d7754084952d867.mockapi.io/users?name=${searchText}`,
      {
        method: "get",
      }
    )
    let response=res.json()
    return searchBook;
}
let createbookUi=async()=>{
    let books=await getbooks();
    document.querySelector(".booksContainer").innerHTML =""
    books.forEach(element => {
        createbookStructure(element)
    });
    }
    createbookUi()

