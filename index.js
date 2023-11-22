let LogginBtn = document.querySelector("#LogginBtn");
let LogginDiv = document.querySelector("#LogginDiv");
let Usernamn;
let Lösen;

LogginBtn.addEventListener("click", () => {
    LogginDiv.classList = ("LoggStyle");

    // Skapar allt som den ska innehålla
    LogginDiv.innerHTML = `
        <div id="Ny">
            <button id="xBtn">X</button>
            <h1>Välkommen</h1>
            <div class="box">
                <h2>Användarnamn</h2>
                <input id= "Namn" type="text" placeholder="Användarnamn">
            </div>
            <div class="box">
                <h2>Lösenord</h2>
                <input id= "Lösenordet" type="password" placeholder="Lösenord">
            </div>
            <button id="LoggBtn">Logga in</button>
            <button id="Reg">New user</button>
            <p id="error"></p>
        </div>
    `;

    let x = document.querySelector("#xBtn");
    let y = document.querySelector("#Ny");
    
    
    // När du klickar på x-knappen, ta bort klassen från loggindiven och sedan ta bort den ny skapade parent diven med id #Ny så försvinner children också
    x.addEventListener("click", () => {
        LogginDiv.classList.remove("LoggStyle");
        y.remove();
    });
    
    // Går vi in på reg-knappen och vad den ska göra
    //vi skapar bara nästan likadan som första
    let RegBtn = document.querySelector("#Reg");
    RegBtn.addEventListener("click", () => {
        RegBtn.classList = ("RegStyle");
        
        LogginDiv.innerHTML = `
        <div id="Ny">
        <button id="xBtn">X</button>
        <h1>Skapa konto</h1>
        <div class="box">
        <h2>Användarnamn</h2>
        <input id="NewUser" type="text" placeholder="Välj användarnamn">
        </div>
        <div class="box">
        <h2>Lösenord</h2>
        <input id="NewLösen" type="password" placeholder="Välj lösenord">
        </div>
        <h3>
        Godkänner villkor
        <input id="check" type="checkbox">
        </h3>
        <button id="SkapaBtn">Skapa</button>
        <p id="error"></p>
        </div>
        `;
        
        let x = document.querySelector("#xBtn");
        let y = document.querySelector("#Ny");
        
        // När du klickar på x knappen ta bort classen från loggindiven och sedan ta bort den ny skapade parent diven med id #Ny så försvinner children också
        x.addEventListener("click", () => {
            LogginDiv.classList.remove("LoggStyle");
            y.remove();
        });
        
        let box = document.querySelector("#check");
        let Skapabtn = document.querySelector("#SkapaBtn");
        let Newuser = document.querySelector("#NewUser");
        let NewLösen = document.querySelector("#NewLösen");
        let p = document.querySelector("#error");
        
        Skapabtn.addEventListener("click", () => {
            if (box.checked && NewLösen.value.length > 0 && Newuser.value.length > 0) {
                Usernamn = Newuser.value;
                Lösen = NewLösen.value;
                LogginDiv.classList.remove("LoggStyle");
                y.remove();
                
            } else {
                p.innerText = "Glömt nåt ovanför!";
            }
        });
    });
    
    //yes då skapar vi vad som händer om man klickar på logga in andra gången
    let LoggaBtn2 = document.querySelector("#LoggBtn");
    //skapar vi ett eventlistener
    LoggaBtn2.addEventListener("click",()=>{
        //målet med denna är att kolla om användarnamn inputen = Usernamn variabeln
        //kolla om Lösenords inputen är = Lösen variablen
        //om dessa stämmer så ska man kunna skapa upp en ny div som är tom och hälsar användarnamnet välkommen
        
        //man kan även kanske lägga in en checkbox kom ihåg mig och göra en if sats vid första logg in knappen om Usernamn.length är större än 0 lägg in användarnamn.value till Usernamn
        let Namn = document.querySelector("#Namn");
        let Lösenord = document.querySelector("#Lösenordet");
        let p = document.querySelector("#error");

        if(Namn.value === Usernamn && Lösenord.value === Lösen){
            
            LogginDiv.classList = ("LoggStyle");
            
            // Skapar allt som den ska innehålla
            LogginDiv.innerHTML = `
            <div id="Ny">
            <button id="xBtn">X</button>
            <h1>Välkommen! <br> User: <br>${Usernamn}!</h1>
            </div>
            `;
            
            let x = document.querySelector("#xBtn");
            let y = document.querySelector("#Ny");
            
            // När du klickar på x-knappen, ta bort klassen från loggindiven och sedan ta bort den ny skapade parent diven med id #Ny så försvinner children också
            x.addEventListener("click", () => {
                LogginDiv.classList.remove("LoggStyle");
                y.remove();
            });
        }else{
            p.innerText = "User Undefined";

        }
        
    });
});