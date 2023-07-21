



async function apical ()
{
    try{
const res = await fetch('https://isro.vercel.app/api/spacecrafts')
const resp = await res.json()
const resp1 = resp.spacecrafts
//console.log(resp.spacecrafts)
resp1.map((d,i)=>{
   // console.log(d);
   const liItem = document.createElement('h3')
   document.body.appendChild(liItem)
   liItem.id=`sat${i}`
   document.getElementById(`sat${i}`).innerHTML =`<p> hi<p/>`
   document.getElementById(`sat${i}`).innerText =`${d.id} .${d.name}`
   console.log(document.getElementById(`sat${i}`).style.textAlign=`center`);
})
}
catch{
    alert("error")
}

}

apical()

console.log(document.getElementById('header').setAttribute(id,thala))
