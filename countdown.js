function countdown(date, id){
    let examDate = new Date(date).getTime();
    
    let x = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = examDate - now;
        
        let days = Math.floor(timeLeft / 86400000);
        let hours = Math.floor((timeLeft % 86400000) / 3600000);
        let minutes = Math.floor((timeLeft % 3600000) / 60000);
        let seconds = Math.floor((timeLeft % 60000) / 1000);
        
        document.getElementById(id).innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
        if (timeLeft < 0) {
            clearInterval(x);
            document.getElementById(id).innerHTML = "its alr over lol";
        }
    }, 1000);
};

countdown("Oct 10, 2025 14:30:00", "EL1131");
countdown("Oct 13, 2025 08:00:00", "CL1332");
countdown("Oct 13, 2025 14:00:00", "MT");
countdown("Oct 17, 2025 08:00:00", "BL1131");
countdown("Oct 21, 2025 08:00:00", "CM1131");
countdown("Oct 22, 2025 08:00:00", "PC1131");
countdown("Oct 23, 2025 08:00:00", "MA1133");
countdown("Oct 27, 2025 08:00:00", "3rdLang");
//other
countdown("Sep 19, 2025 16:00:00", "GradedJournal");
countdown("Sep 29, 2025 10:30:00", "GT6");
countdown("Sep 15, 2025 18:00:00", "口语呈现");
countdown("Sep 24, 2025 09:30:00", "grouPresentation");
countdown("Sep 31, 2025 09:30:00", "grouPresentation2");
countdown("Sep 15, 2025 08:00:00", "GE2");





