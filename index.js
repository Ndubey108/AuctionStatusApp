let endpoint = "https://gauravgitacc.github.io/postAppData/auctionData.json";
let container = document.getElementById("container");
let colorMapping = {
    APPROVED: "blue",
    PENDING: "yellow",
    CANCELLED: "red",
    COMPLETED: "green",
}

let textColoring = {
    APPROVED: "white",
    PENDING: "blue",
    CANCELLED: "white",
    COMPLETED: "white"
}


let datacopy;
function renderdata(data) {
    // console.log(Array.isArray(data));
    data.forEach(element => {
        const card = document.createElement("div");
        card.className = "card"
     
        function navigate() {
            document.cookie = `data=${element}`;
            let a = document.createElement("a")
            a.href = `./auction.html?caseNumber=${caseNumber}`;
         
            a.click();
        
        }
        const { caseNumber, fare, fromLocation, toLocation, date, status } = element;
        card.innerHTML = `
         
        <div class="top-container">
        <div class="left">
            <span class="badge" style="color:${textColoring[status]};background-color:${colorMapping[status]}">${status}</span>
            <span>${caseNumber}</span>
        </div>
        <div class="right">${date}</div>
      </div>
    <div class="bottom-container">
        <b>${fromLocation}</b>
        <p>${toLocation}</p>
        <b class="price">${fare}</b>
    </div>`
        container.appendChild(card);
         
        card.addEventListener('click', navigate);
    });

}
async function fetchauctiondetails() {
    try {
        let res = await fetch(endpoint, { method: 'GET' });
        let data = await res.json();

     
        console.log(data);
        renderdata(data)
    }
    catch (e) {
        alert(e.message)
    }
}
fetchauctiondetails();
// const onload=()=>{

// }















































































































































































































































































































































































































































































