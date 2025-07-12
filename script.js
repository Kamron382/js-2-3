let div = document.querySelector('div')
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>{
    data.map((item)=>{
        div.innerHTML+=`
        <div class='item2'>
        <h1>Ism:${item.name}</h1><br><br>
        <p>Username:${item.username}</p><br><br><br><br>
        <p>Manzil:${item.street}</p><br><br>
        <p>Email:${item.email}</p>
        </div>
        
        `
    })
})