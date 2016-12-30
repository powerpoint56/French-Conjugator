"use strict";System.register(["./enumify.js"],function(i,t){function e(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function s(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?i:t}function r(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}function n(i){return h.indexOf(i)!==-1}function u(i){return i.charAt(0).toUpperCase()+i.slice(1)}var a,o,h,l,p,f,c,v,m,_,d,b,g,y,j,x,k,w,O,q,z,W,A,E,P,S,V,C,I,T,R;return{setters:[function(i){a=i.Enum}],execute:function(){o=function(){function i(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}return function(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}}(),h="eaiuoéàèêyûùâîôëï",l=function(i){function t(){return e(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,i),t}(a),l.initEnum(["indicative","infinitive","participle","imperative","conditional","subjunctive"]),p=function(i){function t(){return e(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,i),t}(a),p.initEnum(["present","imperfect","present_perfect","pluperfect","future","future_perfect","past","past_anterior"]),f=function(i){function t(){return e(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,i),t}(a),f.initEnum(["passive","active"]),c=["e","es","e","ons","ez","ent"],v=["s","s","t","ons","ez","ent"],m=["x","x","t","ons","ez","ont"],_=["i","s","","ons","ez","ont"],d=["s","s","t","ons","","ont"],b=["suis","es","est","sommes","êtes","sont"],g=["is","s","","ons","ez","ont"],y=["ais","ais","ait","ions","iez","aient"],j=["ai","as","a","ons","ez","ont"],x=["i","s","","mes","tes","rent"],k=["s","s","t","mes","tes","rent"],w="aaaââè",O="iiiîîi",q="uuuûûu",z=["e","es","e","ions","iez","ent"],W=["e","es","t","ons","ez","ent"],A=["sse","sses","t","ssions","ssiez","ssent"],E=["arriver","passer","rentrer","monter","entrer","tomber","rester","retourner"],P=["partir","descendre","devenir","revenir","venir","naître","mourir","sortir"],S=[["savoir","saur","sai","sav","sav","sach","","subj","subj","su","s"],["avoir","aur","a","av","","ai","ay","subj","subj","eu","e"],["être","ser","","ét","","soi","soy","subj","","été","f"],["pouvoir","pourr","peu","pouv","peuv","puiss","","","","pu","p"],["vouloir","voudr","veu","voul","veul","veuill","","subj","","voulu","voul"],["falloir","faudr","fau","fall","——","faill","——","——","——","fallu","fall"],["valoir","vaudr","vau","val","val","vaill","val","","","valu","val"],["faire","fer","fai","fais","f","fass","","","","fait","f"],["aller","ir","va","all","v","aill","all","","","allé","all"]],V=[["envoyer","enverr","envoi","envoy","envoi","envoyé","envoya"],["vrir","vr","vr","vr","vr","vert","vri"],["frir","fr","fr","fr","fr","fert","fri"],["faillir","faillir","fau","faill","faill","failli","failli"],["aillir","aillir","aill","aill","aill","ailli","ailli"],["cueillir","cueiller","cueill","cueill","cueill","cueilli","cueilli"],["bouillir","bouillir","bou","bouill","bouill","bouilli","bouilli"],["fuir","fuir","fui","fuy","fui","fui","fu"],["acquérir","acquerr","acqui","acquér","acquièrent","acquis","acqu"],["vêtir","vêtir","vêt","vêt","vêt","vêtu","vêti"],["haïr","haïr","hai","haïss","haïss","haï","haï"],["rtir","rtir","r","rt","rt","rti","rti"],["entir","entir","en","ent","ent","enti","enti"],["rmir","rmir","r","rm","rm","rmi","rmi"],["rvir","rvir","r","rv","rv","rvi","rvi"],["asseoir","assiér","assied","assey","assey","assis","assi"],["choir","choir","choi","choy","choi","chu","chu"],["enir","iendr","ien","en","ienn","enu","i"],["devoir","devr","doi","dev","doiv","dû","du"],["cevoir","cevr","çoi","cev","çoiv","çu","çu"],["émouvoir","émouvr","émeu","émouv","émeuv","ému","ému"],["promouvoir","promouvr","promeu","promouv","promeuv","promu","promu"],["pleuvoir","pleuvr","pleu","pleuv","pleuv","plu","plu"],["mouvoir","mouvr","meu","mouv","meuv","mû","mu"],["mourir","mourr","meur","mour","meur","mort","mouru"],["pourvoir","pourvoir","pourvoi","pourvoy","pourvoi","pourvu","pourvu"],["prévoir","prévoir","prévoi","prévoy","prévoi","prévu","prévi"],["voir","verr","voi","voy","voi","vu","vi"],["courir","courr","cour","cour","cour","couru","couru"],["ir","ir","i","iss","iss","i","i"],["dire","dir","di","dis","dis","dit","di"],["lire","lir","li","lis","lis","lu","lu"],["crire","crir","cri","criv","criv","crit","crivi"],["rire","rir","ri","ri","ri","ri","ri"],["suffire","suffir","suffi","suffis","suffis","suffi","suffi"],["confire","confir","confi","confis","confis","confit","confi"],["boire","boir","boi","buv","boiv","bu","bu"],["croire","croir","croi","croy","croi","cru","cru"],["inclure","inclur","inclu","inclu","inclu","inclus","inclu"],["clure","clur","clu","clu","clu","clu","clu"],["taire","tair","tai","tais","tais","tu","tu"],["plaire","plair","plai","plais","plais","plu","plu"],["clore","clor","clo","clos","clos","clos","——"],["prendre","prendr","prend","pren","prenn","pris","pri"],["vivre","vivr","vi","viv","viv","vécu","vécu"],["suivre","suivr","sui","suiv","suiv","suivi","suivi"],["renaître","renaîtr","renai","renaiss","renaiss","rené","renaqui"],["naître","naîtr","nai","naiss","naiss","né","naqui"],["aître","aîtr","ai","aiss","aiss","u","u"],["décroître","décroîtr","décroi","décroiss","décroiss","décru","décru"],["accroître","accroîtr","accroi","accroiss","accroiss","accru","accru"],["oître","oîtr","oî","oiss","oiss","û","û"],["mettre","mettr","met","mett","mett","mis","mi"],["foutre","foutr","fou","fout","fout","foutu","fouti"],["battre","battr","bat","batt","batt","battu","batti"],["rompre","rompr","romp","romp","romp","rompu","rompi"],["vaincre","vaincr","vainc","vainqu","vainqu","vaincu","vainqui"],["traire","trair","trai","tray","trai","trai","——"],["coudre","coudr","coud","cous","cous","cousu","cousu"],["moudre","moudr","moud","moul","moul","moulu","moulu"],["résoudre","résoudr","résou","résolv","résolv","résolu","résolu"],["absoudre","absoudr","absou","absolv","absolv","absous","absolu"],["indre","indr","in","ign","ign","int","igni"],["dre","dr","d","d","d","du","di"],["bruire","bruir","brui","bruiss","bruiss","brui","bru"],["nuire","nuir","nui","nuis","nuis","nui","nuisi"],["luire","luir","lui","luis","luis","lui","lui"],["uire","uir","ui","uis","uis","uit","uisi"]],C=["appeler","chanceler","épeler","rappeler","renouveler","ruisseler","feuilleter","hoqueter","jeter","projeter","rejeter"],i("Verb",I=function(){function i(t){e(this,i),t&&this.set_infinitive(t)}return o(i,[{key:"set_infinitive",value:function(i){if(i.length<2||!(i.endsWith("er")||i.endsWith("ir")||i.endsWith("re")))return!1;if(this.full_infinitive===i)return!0;if(this.infinitive=i,this.full_infinitive=i,this.is_reflexive=!0,this.infinitive.startsWith("s'en ")?this.infinitive=this.infinitive.substring(5):this.infinitive.startsWith("s'")?this.infinitive=this.infinitive.substring(2):this.infinitive.startsWith("se ")?this.infinitive=this.infinitive.substring(3):this.is_reflexive=!1,this.is_reflexive?this.auxiliary=R:this.auxiliary=T||this,this.essential="",this.subjunctive_endings=z,this.past_endings=k,this.past_stems=O,this.is_imperative_subj=!1,this.is_present_participle_subj=!1,this.is_2p_irregular=!1,this.is_circumflex_third=!1,this.infinitive.endsWith("er")&&"aller"!==this.infinitive&&"envoyer"!==this.infinitive){this.ending="er",this.present_endings=c;var t=this.infinitive.substr(0,this.infinitive.length-this.ending.length);if(this.past_participle=t,this.past_participle+="é",this.past_endings=x,this.past_stems=w,this.auxiliary!==R){var e=!0,s=!1,r=void 0;try{for(var u,a=E[Symbol.iterator]();!(e=(u=a.next()).done);e=!0){var o=u.value;if(this.infinitive===o){this.auxiliary=R;break}}}catch(i){s=!0,r=i}finally{try{!e&&a.return&&a.return()}finally{if(s)throw r}}}if(this.stem_s=t,this.stem_1p=t,this.stem_2p=t,this.stem_3p=t,this.future_base=this.stem_s,"y"===this.stem_1p.slice(-1))this.stem_s[this.stem_s.length-1]="i",this.stem_3p[this.stem_3p.length-1]="i",this.future_base=this.stem_s;else if(!n(this.stem_1p.slice(-1))){"g"===this.stem_1p.slice(-1)?this.stem_1p+="e":"c"===this.stem_1p.slice(-1)&&(this.stem_1p[this.stem_1p.length-1]="ç");var h=!1;"l"!==this.stem_1p.slice(-1)&&"t"!==this.stem_1p.slice(-1)||"e"!==this.stem_1p[this.stem_1p.length-2]||C.indexOf(infinitive)!==-1&&(h=!0,this.stem_s+=this.stem_s.slice(-1),this.stem_3p+=this.stem_s.slice(-1),this.future_base=this.stem_s),h||("é"===this.stem_2p[this.stem_2p.length-2]?(this.stem_3p[this.stem_2p.length-2]="è",this.stem_s[this.stem_2p.length-2]="è",this.future_base=this.stem_2p):"e"===this.stem_2p[this.stem_2p.length-2]?(this.stem_3p[this.stem_2p.length-2]="è",this.stem_s[this.stem_2p.length-2]="è",this.future_base=this.stem_s):"r"!==this.stem_2p.slice(-1)||n(this.stem_2p[this.stem_2p.length-2])||"é"!==this.stem_2p[this.stem_2p.length-3]&&"e"!==this.stem_2p[this.stem_2p.length-3]||(this.stem_s[this.stem_2p.length-3]="è",this.stem_3p[this.stem_2p.length-3]="è",this.future_base=this.stem_2p))}return this.future_base+=this.ending,this.subjunctive_stem_1p=this.stem_2p,this.subjunctive_stem_3p=this.stem_3p,!0}var l=!0,p=!1,f=void 0;try{for(var y,j=S[Symbol.iterator]();!(l=(y=j.next()).done);l=!0){var A=y.value;if(this.infinitive.endsWith(A[0]))return this.ending=A[0],this.stem_s=A[2],this.stem_1p=A[3],this.stem_2p=A[3],this.stem_3p=A[4],this.present_endings=m,this.past_stems=q,"être"===this.ending?(this.present_endings=b,this.subjunctive_endings=v):"savoir"===this.ending?this.present_endings=v:"avoir"===this.ending?(this.present_endings=_,this.subjunctive_endings=W):"faire"===this.ending?(this.is_2p_irregular=!0,this.present_endings=d,this.stem_2p="faites",this.past_stems=O):"aller"===this.ending&&(this.present_endings=g,this.past_stems=w,this.past_endings=x,this.auxiliary=R),this.future_base=this.essential,this.future_base+=A[1],this.past_base=this.essential,this.past_base+=A[10],this.subjunctive_stem_1p=A[6].length?A[6]:A[5],this.subjunctive_stem_3p=A[5],this.is_imperative_subj="subj"===A[7],this.is_present_participle_subj="subj"===A[8],this.past_participle=A[9],!0}}catch(i){p=!0,f=i}finally{try{!l&&j.return&&j.return()}finally{if(p)throw f}}var I=!0,U=!1,B=void 0;try{for(var D,F=V[Symbol.iterator]();!(I=(D=F.next()).done);I=!0){var G=D.value;if(this.infinitive.endsWith(G[0])){if(this.ending=G[0],this.essential=this.infinitive.substr(0,this.infinitive.length-this.ending.length),this.stem_s=G[2],this.stem_1p=G[3],this.stem_2p=G[3],this.stem_3p=G[4],this.present_endings=v,"frir"===this.ending||"vrir"===this.ending?this.present_endings=c:"dire"===this.infinitive||"redire"===this.infinitive?(this.is_2p_irregular=!0,this.stem_2p="dites"):"plaire"===this.infinitive||"clore"===this.infinitive||"naître"===this.infinitive||"connaître"===this.infinitive?this.is_circumflex_third=!0:"aillir"===this.ending?this.present_endings=c:"faillir"===this.ending&&(this.present_endings=m),this.future_base=this.essential,this.future_base+=G[1],this.past_base=this.essential,this.past_base+=G[6],this.past_base=this.past_base.slice(0,-1),"u"===G[6].slice(-1)&&(this.past_stems=q),this.past_participle=this.essential,this.past_participle+=G[5],this.subjunctive_stem_1p=this.stem_2p,this.subjunctive_stem_3p=this.stem_3p,this.auxiliary!==R){var H=!0,J=!1,K=void 0;try{for(var L,M=P[Symbol.iterator]();!(H=(L=M.next()).done);H=!0){var N=L.value;if(this.infinitive===N){this.auxiliary=R;break}}}catch(i){J=!0,K=i}finally{try{!H&&M.return&&M.return()}finally{if(J)throw K}}}return!0}}}catch(i){U=!0,B=i}finally{try{!I&&F.return&&F.return()}finally{if(U)throw B}}return!1}},{key:"get_stem",value:function(i){switch(i){case 3:return this.stem_1p;case 4:return this.stem_2p;case 5:return this.stem_3p;default:return this.stem_s}}},{key:"forms",value:function(i,t,e,s){var r=void 0;if(i instanceof f)r=this.forms(l.infinitive,t),r+=this.forms(l.participle,t),r+=this.forms(l.indicative,t),r+=this.forms(l.subjunctive,t),r+=this.forms(l.conditional,t),r+=this.forms(l.imperative,t);else if(i instanceof l&&!t)r=this.forms(i,f.active);else if(e){if(!s)if(r="\n",r+=u(e.name),i===l.participle||i===l.infinitive)r+="\t\t",r+=this.form(i,t,e);else{for(var n=0;n<6;++n)r+="\n  ",r+=this.form(i,t,e,n);r+="\n"}}else r="\n==== ",r+=u(i.name),r+=" ====\n",i===l.indicative?(r+=this.forms(i,t,p.present),r+=this.forms(i,t,p.imperfect),r+=this.forms(i,t,p.future),r+=this.forms(i,t,p.past),r+=this.forms(i,t,p.present_perfect),r+=this.forms(i,t,p.pluperfect),r+=this.forms(i,t,p.future_perfect),r+=this.forms(i,t,p.past_anterior)):i===l.subjunctive?(r+=this.forms(i,t,p.present),r+=this.forms(i,t,p.imperfect),r+=this.forms(i,t,p.past),r+=this.forms(i,t,p.pluperfect)):i===l.conditional?(r+=this.forms(i,t,p.present),r+=this.forms(i,t,p.present_perfect)):i===l.imperative?r+=this.forms(i,t,p.present):i===l.participle?(r+=this.forms(i,t,p.present),r+=this.forms(i,t,p.past),r+=this.forms(i,t,p.present_perfect),r+="\n"):i===l.infinitive&&(r+=this.forms(i,t,p.present),r+=this.forms(i,t,p.past),r+="\n");return r}},{key:"form",value:function(i,t,e,s){if(!t)return this.form(i,f.active);var r=void 0;if(2!==s&&void 0!==s&&"—"===this.stem_3p.charAt(0))return"——";if(t===f.passive)return r=R.form(i,f.active,e,s),r+=" ",r+=this.past_participle,s>2&&(r+="s"),r;if(e===p.present_perfect||e===p.pluperfect||e===p.past_anterior||e===p.future_perfect||i===l.subjunctive&&e===p.past){var n=void 0;return e===p.present_perfect&&(n=p.present),e===p.pluperfect&&(n=p.imperfect),e===p.past_anterior&&(n=p.past),e===p.future_perfect&&(n=p.future),e===p.past&&(n=p.present),r=this.auxiliary.form(i,f.active,n,s),r+=" ",r+=this.past_participle,s>2&&this.auxiliary===R&&(r+="s"),r}switch(i){case l.infinitive:switch(e){case p.past:r=this.auxiliary.form(l.infinitive),r+=" ",r+=this.past_participle;break;case p.present:default:r=this.infinitive}return r;case l.participle:switch(e){case p.present:r=this.essential,r+=this.is_present_participle_subj?this.subjunctive_stem_1p:this.stem_1p,r+="ant";break;case p.present_perfect:r=this.auxiliary.form(l.participle,t,p.present),r+=this.past_participle;break;case p.past:r=this.past_participle;break;default:r="——"}return r;case l.imperative:if(1!==s&&3!==s&&4!==s){r="——";break}if(r=this.essential,this.is_imperative_subj)1===s?(r+=this.subjunctive_stem_3p,r+=this.infinitive===R.form(l.infinitive)?"s":"e"):(r+=this.subjunctive_stem_1p,r+=c[s]);else{if(this.is_2p_irregular&&4===s){r+=this.stem_2p;break}r+=this.get_stem(s),1===s&&"es"===this.present_endings[1]?r+="e":1===s&&"aller"===this.infinitive||(r+=this.present_endings[s])}break;case l.conditional:r=this.future_base,r+=y[s];break;case l.subjunctive:switch(e){case p.imperfect:r="er"===this.ending?this.stem_1p:this.past_base,r+=2===s?this.past_stems[3]:this.past_stems[0],r+=A[s];break;case p.present:default:r=this.essential,r+=3===s||4===s?this.subjunctive_stem_1p:this.subjunctive_stem_3p,r+=this.subjunctive_endings[s]}break;case l.indicative:default:switch(e){case p.imperfect:r=this.essential,r+=3===s||4===s?this.stem_2p:this.stem_1p,r+=y[s];break;case p.future:r=this.future_base,r+=j[s];break;case p.past:r="er"===this.ending?5===s?this.stem_2p:this.stem_1p:this.past_base,r+=this.past_stems[s],"enir"===this.ending&&(r+="n"),r+=this.past_endings[s];break;case p.present:default:if(r=this.essential,this.ending!==R.form(l.infinitive)){if(this.is_2p_irregular&&4===s){r+=this.stem_2p;break}r+=this.get_stem(s)}(2!==s||"t"!==this.present_endings[2].charAt(0)||"d"!==this.stem_s.slice(-1)&&"t"!==this.stem_s.slice(-1)&&"c"!==this.stem_s.slice(-1))&&(r+=this.present_endings[s]),this.is_circumflex_third&&2===s&&(r+="/ît")}}return r}},{key:"process_args",value:function(i){for(var t=void 0,e=void 0,s=void 0,r=void 0,n=void 0,u=0;u<i.length;++u){var a=i[u];0===u?n="se"===a?"se ":"s'en"===a?"s'en ":a:1!==u||"se "!==n&&"s'en "!==n?(2!==a.length||"p"!==a.charAt(1)&&"s"!==a.charAt(1)||(r=parseInt(a.charAt(0),10)-1,"p"===a.charAt(1)&&(r+=3)),void 0===s&&(s=f.enumValueOf(a)),void 0===t&&(t=l.enumValueOf(a)),void 0===e&&(e=p.enumValueOf(a))):n+=a}var o=void 0;if(n===R.form(l.infinitive))o=R;else if(n===T.form(l.infinitive))o=T;else if(o=this,!o.set_infinitive(n))return"Invalid infinitive.";return s===f.null&&(s=f.active),void 0===r?void 0===t&&void 0===e?o.forms(s):void 0===e&&void 0!==t?o.forms(t,s):void 0!==e&&void 0===t?o.forms(l.indicative,s,e):o.forms(t,s,e):o.form(t,s,e,r)}}]),i}()),T=new I("avoir"),R=new I("être"),i("Verb",I)}}});
