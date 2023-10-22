const jock=document.querySelector('.jock');
const next=document.querySelector('.b3');

const jocks=()=>
{
    const setheader={
        headers:{
            Accept:"application/json"
        }
    }
    fetch("https://icanhazdadjoke.com/",setheader)
    .then((res)=>res.json()
    )
    .then((data)=>
    {
        jock.innerHTML=data.joke;
    }
    ).catch((err)=>
    {
        console.log(err);

    })
}

next.addEventListener('click',jocks);
jocks();