let LogginBtn = document.querySelector("#LogginBtn");
let LogginDiv = document.querySelector("#LogginDiv");
//objekt users
let users = {};

LogginBtn.addEventListener("click", () => {
  LogginDiv.classList = "LoggStyle";

  // skapar log in form
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

  // close log in formen
  x.addEventListener("click", () => {
    LogginDiv.classList.remove("LoggStyle");
    y.remove();
  });

  // regar ny användare formen
  let RegBtn = document.querySelector("#Reg");
  RegBtn.addEventListener("click", () => {
    RegBtn.classList = "RegStyle";

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

    // stänger reg form
    x.addEventListener("click", () => {
      LogginDiv.classList.remove("LoggStyle");
      y.remove();
    });

    // regar ny användare knappen
    let Skapabtn = document.querySelector("#SkapaBtn");
    let Newuser = document.querySelector("#NewUser");
    let NewLösen = document.querySelector("#NewLösen");
    let p = document.querySelector("#error");

    Skapabtn.addEventListener("click", () => {
      //om användarnamnetin har nödiga mellanslag i sig ta bort dom trim()
      //kolla så att users inte redan har ett value med samma användarnamn value
      //kollar så att man inte försöker skapa 2 användare med samma användarnamn
      if (
        Newuser.value.trim() !== "" &&
        NewLösen.value.trim() !== "" &&
        !users.hasOwnProperty(Newuser.value)
      ) {
        users[Newuser.value] = NewLösen.value;
        sessionStorage.setItem("users", JSON.stringify(users));
        LogginDiv.classList.remove("LoggStyle");
        y.remove();
      } else {
        p.innerText = "Användarnamn upptaget eller fält tomt!";
      }
    });
  });

  // Log in knappen
  let LoggaBtn2 = document.querySelector("#LoggBtn");
  LoggaBtn2.addEventListener("click", () => {
    let Namn = document.querySelector("#Namn");
    let Lösenord = document.querySelector("#Lösenordet");
    let p = document.querySelector("#error");

    //hämtar sessionstorage med keyn alla users och lägger in detta i en variabel
    let storedUsers = JSON.parse(sessionStorage.getItem("users"));
    //om storedUsers hadownpropery(kollar så att objektet innehåller en specifik egenskap såg den kollar om storeduser innehåller likadant användarnamn som användaren har stoppat in i inputen)
    if (
      storedUsers.hasOwnProperty(Namn.value) &&
      storedUsers[Namn.value] === Lösenord.value
    ) {
      LogginDiv.classList = "LoggStyle";
      LogginDiv.innerHTML = `
            <div id="Ny">
            <button id="xBtn">X</button>
            <h1>Välkommen! <br> User: <br>${Namn.value}!</h1>
            
            </div>
            `;

      let x = document.querySelector("#xBtn");
      let y = document.querySelector("#Ny");

      x.addEventListener("click", () => {
        LogginDiv.classList.remove("LoggStyle");
        y.remove();
      });
    } else {
      p.innerText = "Felaktigt användarnamn eller lösenord!";
    }
  });
});
