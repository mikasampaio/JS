const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', FoundedOn: 1983},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', FoundedOn: 1938},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', FoundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', FoundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', FoundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', FoundedOn: 1976}
]

const newCompany = companies.reduce ((acc, company) => {
 return acc + company.marketValue
} ,0)

console.log(newCompany)