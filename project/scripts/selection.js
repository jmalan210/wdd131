const services = [
  {
        interest: "business branding",
        id: "busbrand"
  },
  {
      interest: "webpage development",
      id: "webdev"
      
  },
  {
      interest: "content creation",
      id: "contcreate"
    },
    {
        interest: "wedding or event stationery",
        id: "stationery"
        
  },
    {
        interest: "something else",
        id: "other"

    }
];

const name = services.interest;

populateSelectionList(services);

function populateSelectionList(services) {
    services.forEach(service => {
        const selectionList = document.getElementById("interest");
        const option = document.createElement("option");
        option.value = service.id;
        option.textContent = service.interest;
        selectionList.appendChild(option);

    }
    )
};

let count = localStorage.getItem("totalVisits") || 0;
document.getElementById("submitbutton");
submitbutton.addEventListener('click', () => {
localStorage.setItem("totalVisits", String(++count))
window.location.href = "thanks.html"

});