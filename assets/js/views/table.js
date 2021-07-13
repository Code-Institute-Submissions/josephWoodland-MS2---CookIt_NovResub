const homeHTML = document.querySelector(".home");

export async function renderDay(obj) {
  let title = Object.keys(obj);
  let id = Object.values(obj);

  homeHTML.innerHTML = `
  <div class="grid-2">
          <div class="nav">
            <div class="nav__logo">
              <img
                class="nav__logo-logo"
                src="./assets/images/png/Logo.png"
                alt="CookIt Logo"
              />
            </div>

            <div class="nav__buttons">
              <button href="#" onclick="home()" id="homeDay" class="btn nav__btn">Home</button>
              <button href="#" onclick="saveDay()" id="saveDay" class="btn nav__btn">Save</button>
              <button href="#" onclick="pdfDay()" id="pdfDay" class="btn nav__btn">Pdf</button>
            </div>
          </div>
          <div class="grid-3">
            <div class="space"></div>
            <div class="table__left">
              <div class="grid-4">
                <div class="table__meals"></div>
                <div class="table__meals">Breakfast</div>
                <div class="table__meals">Lunch</div>
                <div class="table__meals">Dinner</div>
              </div>
            </div>
            <div class="grid-daily">
            <div class="table__daily-cell days">Day</div>
            <div class="table__daily-cell" onClick="getID(this.id)" id="${id[0]}">${title[0]}</div>
            <div class="table__daily-cell" onClick="getID(this.id)" id="${id[1]}">${title[1]}</div>
            <div class="table__daily-cell" onClick="getID(this.id)" id="${id[2]}">${title[2]}</div>
            </div>
            <div class="space"></div>
        </div>`;
}

export function renderWeekly(plan) {
  homeHTML.innerHTML = `
    <div class="grid-2">
      <div class="nav">
        <div class="nav__logo">
          <img
            class="nav__logo-logo"
            src="./assets/images/png/Logo.png"
            alt="CookIt Logo"
          />
        </div>
        <div class="nav__input">
            <h2 class="nav__input-header">What name would you like to save this plan as?</h2>
        <input 
         required
         type="text"
         class="nav__input-saveName"
         name="saveName"
         id="savePlan"
         placeholder="e.g. low carb"
       />
       <input type="submit" id="nameSubmit" class="nav__save-btn btn" value="save" onclick="getSavedName()">
       </div>
        <div class="nav__buttons">
          <button href="#"  onclick="home()" id="homeWeek" class="btn nav__btn">Home</button>
          <button href="#"  onclick="saveWeekly()" id="saveWeek" class="btn nav__btn">Save</button>
          <button href="#" onclick="pdfWeekly()" id="pdfWeek" class="btn nav__btn">Pdf</button>
        </div>
      </div>
      <div class="grid-3">
      <div class="space"></div>
        <div class="table__left">
          <div class="grid-4">
            <div class="table__meals"></div>
            <div class="table__meals">Breakfast</div>
            <div class="table__meals">Lunch</div>
            <div class="table__meals">Dinner</div>
          </div>
        </div>
        <div class="table__weekly grid-weekly">
          <div class="table__weekly-cell days">Monday</div>
          <div class="table__weekly-cell days">Tuesday</div>
          <div class="table__weekly-cell days">Wednesday</div>
          <div class="table__weekly-cell days">Thursday</div>
          <div class="table__weekly-cell days">Friday</div>
          <div class="table__weekly-cell days">Saturday</div>
          <div class="table__weekly-cell days">Sunday</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.mon[0].id}">${plan.mon[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.tue[0].id}">${plan.tue[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.wed[0].id}">${plan.wed[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.thur[0].id}">${plan.thur[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.fri[0].id}">${plan.fri[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.sat[0].id}">${plan.sat[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.sun[0].id}">${plan.sun[0].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.mon[1].id}">${plan.mon[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.tue[1].id}">${plan.tue[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.wed[1].id}">${plan.wed[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.thur[1].id}">${plan.thur[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.fri[1].id}">${plan.fri[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.sat[1].id}">${plan.sat[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.sun[1].id}">${plan.sun[1].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.mon[2].id}">${plan.mon[2].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.tue[2].id}">${plan.tue[2].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.wed[2].id}">${plan.wed[2].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.thur[2].id}">${plan.thur[2].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.fri[2].id}">${plan.fri[2].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.sat[2].id}">${plan.sat[2].title}</div>
          <div class="table__weekly-cell" onClick="getID(this.id)" id="${plan.sun[2].id}">${plan.sun[2].title}</div>
        </div>
        <div class="space"></div>
      </div>
    </div>
    `;
}
