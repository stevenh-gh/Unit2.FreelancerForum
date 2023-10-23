
// create an array of objects that represents the freelancers
// by default include alice and bob
const freelancers = [
        {
                name: "Alice",
                occupation: "Writer",
                price: 30
        },
        {
                name: "Bob",
                occupation: "Teacher",
                price: 70
        }
];

// method to get avg price
function getAveragePrice() {
        return freelancers.reduce((acc, obj) => acc.price + obj.price) / freelancers.length;
}

// method to render

// method to add freelancers