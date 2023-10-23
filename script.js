
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
{ name: "John", occupation: "Software Engineer", price: 19, render: false },
{ name: "Emily", occupation: "Graphic Designer", price: 40, render: false },
{ name: "Michael", occupation: "Teacher", price: 38, render: false },
{ name: "Sarah", occupation: "Data Analyst", price: 33, render: false },
{ name: "David", occupation: "Chef", price: 38, render: false },
{ name: "Olivia", occupation: "Marketing Specialist", price: 20, render: false },
{ name: "William", occupation: "Accountant", price: 73, render: false },
{ name: "Ava", occupation: "Nurse", price: 81, render: false },
{ name: "James", occupation: "Artist", price: 90, render: false },
{ name: "Sophia", occupation: "Doctor", price: 70, render: false },
{ name: "Benjamin", occupation: "Mechanical Engineer", price: 44, render: false },
{ name: "Mia", occupation: "Lawyer", price: 26, render: false },
{ name: "Elijah", occupation: "Architect", price: 83, render: false },
{ name: "Charlotte", occupation: "Social Worker", price: 58, render: false },
{ name: "Alexander", occupation: "Financial Analyst", price: 79, render: false },
{ name: "Emma", occupation: "Product Manager", price: 66, render: false },
{ name: "Daniel", occupation: "Photographer", price: 18, render: false },
{ name: "Grace", occupation: "Teacher", price: 27, render: false },
{ name: "Henry", occupation: "Dentist", price: 53, render: false },
{ name: "Lily", occupation: "Software Developer", price: 65, render: false }
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