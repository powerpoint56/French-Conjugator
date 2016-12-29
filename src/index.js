"use strict";

import {Verb} from "./conjugator.js";

const ui = {};
ui.form = document.querySelector(".form");
ui.input = ui.form.querySelector("input");
ui.logger = {
  el: document.querySelector(".logger"),
  log(text) {
    const p = document.createElement("p");
    p.textContent = text;
    this.el.appendChild(p);
    this.el.scrollTop = this.el.scrollHeight;
  }
};

ui.input.focus();

ui.logger.log(`Les Paroles Sages de Weiss
Enter the infinitive of a verb, and then optionally any of the following in any order:
- [Mood] (indicative*, infinitive, participle, conditional, subjunctive, imperative
- [Tense] (present*, imperfect, future, future_perfect, perfect (i.e., present perfect), pluperfect, past, past_anterior)
- [Person][Number] (e.g. 1p [1st person plural])
- [Voice] (active*, passive)
* default
Type 'examples' for sample input.`);

let verb = new Verb();
ui.form.addEventListener("submit", e => {
  e.preventDefault();
  let line = ui.input.value.toLowerCase();
  ui.input.value = "";

  if (line === "examples") {
    ui.logger.log(`
manger => all forms of manger
manger subjunctive passive => all subjunctive passive forms of manger
manger imperfect 3p => third-plural imperfect active indicative of manger`);
  } else {
    ui.logger.log(verb.process_args(line.split(" ")));
  }
  return false;
});
