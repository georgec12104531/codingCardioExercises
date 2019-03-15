const person = { 
  name: "Harinath",
  address: {
    city: "Bengaluru",
    countries: ["India"]
  },
  color: "green"
};

const update = {
  name: "George",
  address: { countries: ["America"] }
}

const employee = {
  ...person, 
  ...update,
  address: {
    city: person.address.city,
    countries: [...person.address.countries, ...update.address.countries]
  }
}

console.log(employee)
