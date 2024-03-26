function getDate() {
    const today = new Date();
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById("day").innerHTML = weekdays[day];
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = monthsName[month];
    document.getElementById("year").innerHTML = year;
}

getDate()