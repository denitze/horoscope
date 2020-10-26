function showHoroscope() {
    let sternzeichen;
    let month = document.getElementById("month").value;

    switch (month) {
    case "jan":
        sternzeichen = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png"> 
        <h1>Aquarius</h1> Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…`;
        break;
    case "feb":
        sternzeichen = `<img src="https://www.horoscopedates.com/img/icon_pisces.png"> <h1>Pisces</h1> Communication is very important today—written, spoken, and even nonverbal body language will all…`;
        break;
    case "mar":
        sternzeichen = `<img src="https://www.horoscopedates.com/img/icon_aries.png"> <h1>Aries</h1> Today your patience might be tested when one or more of your projects gets put on hold by someone…`;
        break;
    case "apr":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_taurus.png"> <h1>Taurus</h1> Your intense energy makes you a great candidate for a leadership position right now, so if you are…`;
        break;
    case "may":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_gemini.png"> <h1>Gemini</h1> If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…`;
        break;
    case "june":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_cancer.png"> <h1>Cancer</h1> Too many different elements in your life are overlapping with each other right now—and it's your…`;
        break;
    case "july":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_leo.png"> <h1>Leo</h1> The issues you'll be dealing with today are very complicated ones—you will have to navigate your…`;
        break;    
    case "aug":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_virgo.png"> <h1>Virgo</h1> You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…`;
        break;   
    case "sep":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_libra.png"> <h1>Libra</h1> Pick a cultural event that's coming up and get some tickets for it today.
        `;
        break;    
    case "oct":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_scorpio.png"> <h1>Scorpio</h1> Someone will challenge a belief that you've held for a very long time today—and they will say an…`;
        break;   
    case "nov":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_sagittarius.png"> <h1>Sagittarius</h1> Someone in your life needs to step up and take on more responsibility—and you need to tell them to....
        `;
        break;   
    case "dec":
        sternzeichen=`<img src="https://www.horoscopedates.com/img/icon_capricorn.png"> <h1>Capricorn</h1> Breaking the rules is not always a bad thing—especially if the rules limit your creativity. `;
        break;
    default: 
        sternzeichen =`<h2>Please type in a month</h2>`;
}
document.getElementById("horoscope").innerHTML = sternzeichen
document.getElementById("horoscope").style.boxShadow= "0px 10px 10px -5px rgba(0,0,0,0.5)"


}

