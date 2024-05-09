const hompage = document.querySelector(".hompage")
const onlyToday = document.querySelector(".onlyToday")
const t3 = document.querySelector(".t-3")
const t = document.querySelector("#t3")
const allToods = document.querySelector(".allToods")
const tasks = document.querySelector(".tasks")
const forToday = document.querySelector(".forToday")

hompage.style.color ="#FFC700"
hompage.onclick =() =>{
    hompage.style.color ="#FFC700"
    onlyToday.style.color ="#A5A5B4"
    Tomorrow.style.display = "flex"
    LATER10.style.display = "flex"
    allToods.innerHTML = "ALL TODOS"
    t3.style.display = "block"
    t.style.display = "block"
    tasks.style.display = "block"
    forToday.style.display = "block"
}
onlyToday.onclick =() =>{
    onlyToday.style.color ="#FFC700"
    hompage.style.color ="#A5A5B4"
    Tomorrow.style.display = "none"
    LATER10.style.display = "none"
    allToods.innerHTML = "ONLY TODAY TODOS"
    t3.style.display = "none"
    t.style.display = "none"
    tasks.style.display = "none"
    forToday.style.display = "none"
}
let users =[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        left: 12
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false,
        left: 0
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false,
        left: 1
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true,
        left: 41
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false,
        left: 22
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false,
        left: 21
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false,
        left: 4
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false,
        left: 3
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true,
        left: 2
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true,
        left: 8
    },
    {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true,
        left: 6
    },
    {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true,
        left: 4
    },
    {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false,
        left: 2
    },
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": false,
        left: 0
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": false,
        left: 0
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": true,
        left: 0
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true,
        left: 1
    },
    {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false,
        left: 1
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false,
        left: 23
    },
    {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true,
        left: 1
    },
    {
        "userId": 2,
        "id": 26,
        "title": "aliquam aut quasi",
        "completed": true,
        left: 26
    },
    {
        "userId": 2,
        "id": 27,
        "title": "veritatis pariatur delectus",
        "completed": true,
        left: 29
    },
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false,
        left: 12
    },
    {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false,
        left: 6
    },
    {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true,
        left: 0
    },
    {
        "userId": 2,
        "id": 31,
        "title": "repudiandae totam in est sint facere fuga",
        "completed": false,
        left: 52
    },
    {
        "userId": 2,
        "id": 32,
        "title": "earum doloribus ea doloremque quis",
        "completed": false,
        left: 21
    },
    {
        "userId": 2,
        "id": 33,
        "title": "sint sit aut vero",
        "completed": false,
        left: 41
    },
    {
        "userId": 2,
        "id": 34,
        "title": "porro aut necessitatibus eaque distinctio",
        "completed": false,
        left: 31
    },
    {
        "userId": 2,
        "id": 35,
        "title": "repellendus veritatis molestias dicta incidunt",
        "completed": true,
        left: 1
    }
]
const content = document.querySelector(".content");
const today = document.querySelector(".today")
const Tomorrow = document.querySelector(".Tomorrow")
const LATER10 = document.querySelector(".LATER-10")
function createUsers() {
    for (let item of users) {
        
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h1");
        let h3 = document.createElement("h1");
        let check = document.createElement("input")
        console.log(check);



    check.setAttribute("type", "checkbox")

    // design
    div.classList.add("box");
    h1.classList.add("px");
    h2.classList.add("bigpx");
    h3.classList.add("px2");
    check.classList.add("inp")
 

    // inner HTMLS
    h1.innerHTML = "Buy S Plaid!";
    h2.innerHTML = item.title
    h3.innerHTML = item.left
    if (item.left == 1) {
        h3.innerHTML = "Tomorrow"
        Tomorrow.append(div);
    }else if (item.left > 2) {
       LATER10.append(div);
   }else if (item.left == 0) {
    h3.innerHTML = "today"
    today.append(div);
    check.checked = item.completed
    check.style.backgroundColor = "red"
   }

    // content.append(div);
    div.append(check)
    div.append(h1)
    div.append(h2)
    div.append(h3)
  }
}

createUsers();
