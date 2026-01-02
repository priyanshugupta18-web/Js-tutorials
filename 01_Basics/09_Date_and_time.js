// Date :-

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integer that represents milliseconds since midnight at the beginning of 1 January 1970 UTC(the epoch).

// Creating Date Objects:-

let currentDate = new Date() // creates a new date object with the current date and time
console.log(currentDate) // output: 2026-01-02T13:21:44.304Z

let specificDate = new Date('2023-12-25') // creates a new date object with the specified date (25th December 2023)
console.log(specificDate) // output: 2023-12-25T00:00:00.000Z

let specificDateTime = new Date('2023-12-25T10:30:00') // creates a new date object with the specified date and time
console.log(specificDateTime) // output: 2023-12-25T5:00:00.000Z(Here, the time is shown in UTC format, IST is UTC +5:30)

let myCreatedDate = new Date(2025, 0, 2, 19, 43, 0) // creates a new date object with the specified year, month (0-indexed), date, hour, minute, second 
console.log(myCreatedDate) // output: 2025-01-02T14:13:00.000Z

// Date Methods:-

console.log(myCreatedDate.toLocaleString()) // output: 1/2/2025, 7:43:00 PM (here toLocaleString() method converts the date to a string based on the local time zone)

let myTimeStamp = Date.now() // gets the current timestamp in milliseconds since the epoch
console.log(myTimeStamp) // output: 1704216104304 (the output will vary based on the current time)

console.log(myCreatedDate.getTime()) // output: 1735989780000 (here getTime() method returns the timestamp of the date object in milliseconds since the epoch)

console.log(Math.floor(Date.now()/1000)) // output: 1704216104 (here we divided the timestamp by 1000 to convert it to seconds and used Math.floor() to get the integer value)

let newDate = new Date()
console.log(newDate.getFullYear()) // output: 2024 (here getFullYear() method returns the year of the date object)

console.log(newDate.getMonth()) // output: 0 (here getMonth() method returns the month of the date object, 0-indexed so january is 0)

console.log(newDate.getDay()) // output: 5 (here getDay() method returns the day of the week of the date object, 0-indexed so Fridaay is 5)

// customization of date and time:-

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
})

// output: Friday, January 2024 (here we customized the output of toLocaleString() method to show full weekday name, full month name and numeric year) and we used 'default' to use the default locale of the environment.





