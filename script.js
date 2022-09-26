setInterval(function () {
    let d = new Date()
    let h = ("0" + (d.getHours() + 1)).slice(-2)
    let m =  ("0" + (d.getMinutes() + 1)).slice(-2)
    let s = ("0" + (d.getSeconds()+ 1)).slice(-2)
    let date = d.getDate()
    Date.prototype.monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    
    Date.prototype.getMonthName = function() {
        return this.monthNames[this.getMonth()];
    };

    let month = d.getMonthName()
    let year = d.getFullYear()
    
    // console.log(h, m, s, date, month, year)
    // console.log(h, m, s)
    // console.log(d)
    
        document.getElementsByTagName('div')[1].innerHTML = h + " : "
        document.getElementsByTagName('div')[2].innerHTML = m + " : "
        document.getElementsByTagName('div')[3].innerHTML = s

    document.getElementsByTagName('div')[4].innerHTML = date + " "+ month + " , "+ year

}, 1000)