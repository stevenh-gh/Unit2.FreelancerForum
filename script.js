
// create an array of objects that represents the freelancers
// by default include alice and bob
const freelancers = [
        {
                name: "Alice",
                occupation: "Writer",
                price: 30,
                render: false
        },
        {
                name: "Bob",
                occupation: "Teacher",
                price: 50,
                render: false
        }
];

const inLine = [{ name: "Carol", occupation: "Programmer", price: 70, render: false },
{ name: "John", occupation: "Software Engineer", render: false },
{ name: "Emily", occupation: "Graphic Designer", render: false },
{ name: "Michael", occupation: "Teacher", render: false },
{ name: "Sarah", occupation: "Data Analyst", render: false },
{ name: "David", occupation: "Chef", render: false },
{ name: "Olivia", occupation: "Marketing Specialist", render: false },
{ name: "William", occupation: "Accountant", render: false },
{ name: "Ava", occupation: "Nurse", render: false },
{ name: "James", occupation: "Artist", render: false },
{ name: "Sophia", occupation: "Doctor", render: false },
{ name: "Benjamin", occupation: "Mechanical Engineer", render: false },
{ name: "Mia", occupation: "Lawyer", render: false },
{ name: "Elijah", occupation: "Architect", render: false },
{ name: "Charlotte", occupation: "Social Worker", render: false },
{ name: "Alexander", occupation: "Financial Analyst", render: false },
{ name: "Emma", occupation: "Product Manager", render: false },
{ name: "Daniel", occupation: "Photographer", render: false },
{ name: "Grace", occupation: "Teacher", render: false },
{ name: "Henry", occupation: "Dentist", render: false },
{ name: "Lily", occupation: "Software Developer", render: false }
]


const addFreelancersIntervalId = setInterval(addFreelancers, 1100);

render();


// method to get avg price
function getAveragePrice() {
        return freelancers.reduce((acc, obj) => acc + obj.price, 0) / freelancers.length;
}

// method to render
function render() {
        // get table element
        const table = document.querySelector("table tbody");
        // for each freelancer, create a table row
        freelancers.forEach(fl => {
                if (!fl.render) {
                        // create random number between 10-100 as price
                        if (!fl.hasOwnProperty("price")) {
                                fl.price = Math.floor(Math.random() * (100 - 10) + 10);
                        }
                        const tablerow = document.createElement("tr");
                        for (let key in fl) {
                                if (key !== "render") {
                                        // for each key-value pair, create a table data
                                        const tabledata = document.createElement("td");
                                        tabledata.innerText = `${key === "price" ? "$" : ""}${fl[key]}`;
                                        // then append table data to table row
                                        tablerow.appendChild(tabledata);
                                }
                        }
                        // finally append table row to table
                        table.appendChild(tablerow);
                        fl.render = true;
                }
        })
        // render average price
        const avg = document.getElementById("average-price");
        avg.innerText = `The average starting price is \$${getAveragePrice().toFixed(2)}`;
}

// method to add freelancers
function addFreelancers() {
        freelancers.push(inLine.shift());
        render();
        if (inLine.length === 0) {
                clearInterval(addFreelancersIntervalId);
        }
}