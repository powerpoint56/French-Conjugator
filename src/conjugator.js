import {Enum} from './enumify.js';

const vowels = 'eaiuoéàèêyûùâîôëï';
function is_vowel(c) {
  return vowels.indexOf(c) !== -1;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

class Mood extends Enum {}
Mood.initEnum(['indicative', 'infinitive', 'participle', 'imperative', 'conditional', 'subjunctive']);

class Tense extends Enum {}
Tense.initEnum(['present', 'imperfect', 'present_perfect', 'pluperfect', 'future', 'future_perfect', 'past', 'past_anterior']);

class Voice extends Enum {}
Voice.initEnum(['passive', 'active']);

const regular_er_present = ['e', 'es', 'e', 'ons', 'ez', 'ent'];
const irregular_present = ['s', 's', 't', 'ons', 'ez', 'ent'];
const irregular_xxt_present = ['x', 'x', 't', 'ons', 'ez', 'ont'];
const avoir_present = ['i', 's', '', 'ons', 'ez', 'ont'];
const faire_present = ['s', 's', 't', 'ons', '', 'ont'];
const etre_present = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
const aller_present = ['is', 's', '', 'ons', 'ez', 'ont'];

const imperfect_endings = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];

const future_endings = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];

const er_past_endings = ['i', 's', '', 'mes', 'tes', 'rent'];
const regular_past_endings = ['s', 's', 't', 'mes', 'tes', 'rent'];

const er_past_stems = 'aaaââè';
const irregular_past_stems = 'iiiîîi';
const highly_irregular_past_stems = 'uuuûûu';

const regular_subj_present_endings = ['e', 'es', 'e', 'ions', 'iez', 'ent'];
const avoir_subj_present_endings = ['e', 'es', 't', 'ons', 'ez', 'ent'];

const subj_imperfect_endings = ['sse', 'sses', 't', 'ssions', 'ssiez', 'ssent'];

const er_etre_verbs = ['arriver', 'passer', 'rentrer', 'monter', 'entrer', 'tomber', 'rester', 'retourner'];
const irregular_etre_verbs = ['partir', 'descendre', 'devenir', 'revenir', 'venir', 'naître', 'mourir', 'sortir'];

// 11-principal part irregulars, generated from https://en.wikipedia.org/wiki/French_conjugation#Verbs_with_eleven_principal_parts
const irregular_11_verbs = [
  // inf, fut stem, 1S, 1P, 3P, PRES SUBJ S, PRES SUBJ P (''=same as S), imperative (''/subj), pres participle (''), PP, simple past _base_
  ['savoir', 'saur', 'sai', 'sav', 'sav', 'sach', '', 'subj', 'subj', 'su', 's'],
  ['avoir', 'aur', 'a', 'av', '', 'ai', 'ay', 'subj', 'subj', 'eu', 'e'],
  ['être', 'ser', '', 'ét', '', 'soi', 'soy', 'subj', '', 'été', 'f'],
  ['pouvoir', 'pourr', 'peu', 'pouv', 'peuv', 'puiss', '', '', '', 'pu', 'p'],
  ['vouloir', 'voudr', 'veu', 'voul', 'veul', 'veuill', '', 'subj', '', 'voulu', 'voul'],
  ['falloir', 'faudr', 'fau', 'fall', '——', 'faill', '——', '——', '——', 'fallu', 'fall'],
  ['valoir', 'vaudr', 'vau', 'val', 'val', 'vaill', 'val', '', '', 'valu', 'val'],
  ['faire', 'fer', 'fai', 'fais', 'f', 'fass', '', '', '','fait', 'f'],
  ['aller', 'ir', 'va', 'all', 'v', 'aill', 'all', '', '', 'allé', 'all']
];

// 7-principal-part irregulars, generated from https://en.wikipedia.org/wiki/French_conjugation#First_sub-conjugation:_Verbs_with_seven_principal_parts and https://en.wiktionary.org/wiki/Appendix:French_irregular_verbs
const irregular_7_verbs = [
  // inf, fut stem, 1S, 1P, 3P, PP, Simple PAST
  ['envoyer', 'enverr', 'envoi', 'envoy', 'envoi', 'envoyé', 'envoya'],

  ['vrir', 'vrir', 'vr', 'vr', 'vr', 'vert', 'vri'],
  ['frir', 'frir', 'fr', 'fr', 'fr', 'fert', 'fri'],

  ['faillir', 'faillir', 'fau', 'faill', 'faill', 'failli', 'failli'],
  ['aillir', 'aillir', 'aill', 'aill', 'aill', 'ailli', 'ailli'],
  ['cueillir', 'cueiller', 'cueill', 'cueill', 'cueill', 'cueilli', 'cueilli'],
  ['bouillir', 'bouillir', 'bou', 'bouill', 'bouill', 'bouilli', 'bouilli'],
  ['fuir', 'fuir', 'fui', 'fuy', 'fui', 'fui', 'fu'],

  ['acquérir', 'acquerr', 'acqui', 'acquér', 'acquièrent', 'acquis', 'acqu'],
  ['vêtir', 'vêtir', 'vêt', 'vêt', 'vêt', 'vêtu', 'vêti'],
  ['haïr', 'haïr', 'hai', 'haïss', 'haïss', 'haï', 'haï'],
  ['rtir', 'rtir', 'r', 'rt', 'rt', 'rti', 'rti'],
  ['entir', 'entir', 'en', 'ent', 'ent', 'enti', 'enti'],
  ['rmir', 'rmir', 'r', 'rm', 'rm', 'rmi', 'rmi'],
  ['rvir', 'rvir', 'r', 'rv', 'rv', 'rvi', 'rvi'],

  ['asseoir', 'assiér', 'assied', 'assey', 'assey', 'assis', 'assi'],
  ['choir', 'choir', 'choi', 'choy', 'choi', 'chu', 'chu'],
  ['enir', 'iendr', 'ien', 'en', 'ienn', 'enu', 'i'],
  ['devoir', 'devr', 'doi', 'dev', 'doiv', 'dû', 'du'],
  ['cevoir', 'cevr', 'çoi', 'cev', 'çoiv', 'çu', 'çu'],
  ['émouvoir', 'émouvr', 'émeu', 'émouv', 'émeuv', 'ému', 'ému'],
  ['promouvoir', 'promouvr', 'promeu', 'promouv', 'promeuv', 'promu', 'promu'],
  ['pleuvoir', 'pleuvr', 'pleu', 'pleuv', 'pleuv', 'plu', 'plu'],
  ['mouvoir', 'mouvr', 'meu', 'mouv', 'meuv', 'mû', 'mu'],
  ['mourir', 'mourr', 'meur', 'mour', 'meur', 'mort', 'mouru'],
  ['pourvoir', 'pourvoir', 'pourvoi', 'pourvoy', 'pourvoi', 'pourvu', 'pourvu'],
  ['prévoir', 'prévoir', 'prévoi', 'prévoy', 'prévoi', 'prévu', 'prévi'],
  ['voir', 'verr', 'voi', 'voy', 'voi', 'vu', 'vi'],
  ['courir', 'courr', 'cour', 'cour', 'cour', 'couru', 'couru'],

  ['ir', 'ir', 'i', 'iss', 'iss', 'i', 'i'],

  ['dire', 'dir', 'di', 'dis', 'dis', 'dit', 'di'],
  ['lire', 'lir', 'li', 'lis', 'lis', 'lu', 'lu'],
  ['crire', 'crir', 'cri', 'criv', 'criv', 'crit', 'crivi'],
  ['rire', 'rir', 'ri', 'ri', 'ri', 'ri', 'ri'],
  ['suffire', 'suffir', 'suffi', 'suffis', 'suffis', 'suffi', 'suffi'],
  ['confire', 'confir', 'confi', 'confis', 'confis', 'confit', 'confi'],
  ['boire', 'boir', 'boi', 'buv', 'boiv', 'bu', 'bu'],
  ['croire', 'croir', 'croi', 'croy', 'croi', 'cru', 'cru'],
  ['inclure', 'inclur', 'inclu', 'inclu', 'inclu', 'inclus', 'inclu'],
  ['clure', 'clur', 'clu', 'clu', 'clu', 'clu', 'clu'],
  ['taire', 'tair', 'tai', 'tais', 'tais', 'tu', 'tu'],
  ['plaire', 'plair', 'plai', 'plais', 'plais', 'plu', 'plu'],
  ['clore', 'clor', 'clo', 'clos', 'clos', 'clos', '——'],
  ['prendre', 'prendr', 'prend', 'pren', 'prenn', 'pris', 'pri'],
  ['vivre', 'vivr', 'vi', 'viv', 'viv', 'vécu', 'vécu'],
  ['suivre', 'suivr', 'sui', 'suiv', 'suiv', 'suivi', 'suivi'],

  ['renaître', 'renaîtr', 'renai', 'renaiss', 'renaiss', 'rené', 'renaqui'],
  ['naître', 'naîtr', 'nai', 'naiss', 'naiss', 'né', 'naqui'],
  ['aître', 'aîtr', 'ai', 'aiss', 'aiss', 'u', 'u'],

  ['décroître', 'décroîtr', 'décroi', 'décroiss', 'décroiss', 'décru', 'décru'],
  ['accroître', 'accroîtr', 'accroi', 'accroiss', 'accroiss', 'accru', 'accru'],
  ['oître', 'oîtr', 'oî', 'oiss', 'oiss', 'û', 'û'],

  ['mettre', 'mettr', 'met', 'mett', 'mett', 'mis', 'mi'],

  ['foutre', 'foutr', 'fou', 'fout', 'fout', 'foutu', 'fouti'],
  ['battre', 'battr', 'bat', 'batt', 'batt', 'battu', 'batti'],
  ['rompre', 'rompr', 'romp', 'romp', 'romp', 'rompu', 'rompi'],
  ['vaincre', 'vaincr', 'vainc', 'vainqu', 'vainqu', 'vaincu', 'vainqui'],
  ['traire', 'trair', 'trai', 'tray', 'trai', 'trai', '——'],
  ['coudre', 'coudr', 'coud', 'cous', 'cous', 'cousu', 'cousu'],
  ['moudre', 'moudr', 'moud', 'moul', 'moul', 'moulu', 'moulu'],
  ['résoudre', 'résoudr', 'résou', 'résolv', 'résolv', 'résolu', 'résolu'],
  ['absoudre', 'absoudr', 'absou', 'absolv', 'absolv', 'absous', 'absolu'],
  ['indre', 'indr', 'in', 'ign', 'ign', 'int', 'igni'],
  ['dre', 'dr', 'd', 'd', 'd', 'du', 'di'],

  ['bruire', 'bruir', 'brui', 'bruiss', 'bruiss', 'brui', 'bru'],
  ['nuire', 'nuir', 'nui', 'nuis', 'nuis', 'nui', 'nuisi'],
  ['luire', 'luir', 'lui', 'luis', 'luis', 'lui', 'lui'],
  ['uire', 'uir', 'ui', 'uis', 'uis', 'uit', 'uisi'],
];

//https://www.lawlessfrench.com/grammar/stem-changing-verbs/
const consonant_double_verbs = ['appeler', 'chanceler', 'épeler', 'rappeler', 'renouveler', 'ruisseler', 'feuilleter', 'hoqueter', 'jeter', 'projeter', 'rejeter'];

class Verb {
  constructor(inf) {
    if (inf) {
      this.set_infinitive(inf);
    }
  }

  set_infinitive(inf) {
    if (inf.length < 2 || !(inf.endsWith('er') || inf.endsWith('ir') || inf.endsWith('re'))) {
      return false;
    }
    if (this.full_infinitive === inf) {
      return true;
    }
    this.infinitive = inf;
    this.full_infinitive = inf;

    this.is_reflexive = true;
    if (this.infinitive.startsWith("s'en ")) {
      this.infinitive = this.infinitive.substring(5);
    } else if (this.infinitive.startsWith("s'")) {
      this.infinitive = this.infinitive.substring(2);
    } else if (this.infinitive.startsWith('se ')) {
      this.infinitive = this.infinitive.substring(3);
    } else {
      this.is_reflexive = false;
    }

    if (this.is_reflexive) {
      this.auxiliary = etre;
    } else {
      this.auxiliary = avoir || this; // if avoir ain't defined yet it bein' defined ri here
    }

    this.essential = '';
    this.subjunctive_endings = regular_subj_present_endings;
    this.past_endings = regular_past_endings;
    this.past_stems = irregular_past_stems;
    this.is_imperative_subj = false;
    this.is_present_participle_subj = false;
    this.is_2p_irregular = false;
    this.is_circumflex_third = false;

    if (this.infinitive.endsWith('er') && this.infinitive !== 'aller' && this.infinitive !== 'envoyer') {
      this.ending = 'er';
      this.present_endings = regular_er_present;

      const base = this.infinitive.substr(0, this.infinitive.length - this.ending.length);

      this.past_participle = base;
      this.past_participle += 'é';

      this.past_endings = er_past_endings;
      this.past_stems = er_past_stems;

      if (this.auxiliary !== etre) {
        for (const verb of er_etre_verbs) {
          if (this.infinitive === verb) {
            this.auxiliary = etre;
            break;
          }
        }
      }

      this.stem_s = base;
      this.stem_1p = base;
      this.stem_2p = base;
      this.stem_3p = base;

      this.future_base = this.stem_s;

      if (this.stem_1p.slice(-1) === 'y') {
        this.stem_s[this.stem_s.length - 1] = 'i';
        this.stem_3p[this.stem_3p.length - 1] = 'i';
        this.future_base = this.stem_s;
      } else if (!is_vowel(this.stem_1p.slice(-1))) {
        if (this.stem_1p.slice(-1) === 'g') {
          this.stem_1p += 'e';
        } else if (this.stem_1p.slice(-1) === 'c') {
          this.stem_1p[this.stem_1p.length - 1] = 'ç';
        }

        let is_double_consonant = false;
        if ((this.stem_1p.slice(-1) === 'l' || this.stem_1p.slice(-1) === 't') && this.stem_1p[this.stem_1p.length - 2] === 'e') {
          if (consonant_double_verbs.indexOf(infinitive) !== -1) {
            is_double_consonant = true;
            this.stem_s += this.stem_s.slice(-1);
            this.stem_3p += this.stem_s.slice(-1);
            this.future_base = this.stem_s;
          }
        }

        if (!is_double_consonant) {
          if (this.stem_2p[this.stem_2p.length - 2] === 'é') { // single consonant stem-changing
            this.stem_3p[this.stem_2p.length - 2] = 'è';
            this.stem_s[this.stem_2p.length - 2] = 'è';
            this.future_base = this.stem_2p;
          } else if (this.stem_2p[this.stem_2p.length - 2] === 'e') {
            this.stem_3p[this.stem_2p.length - 2] = 'è';
            this.stem_s[this.stem_2p.length - 2] = 'è';
            this.future_base = this.stem_s;
          } else if (this.stem_2p.slice(-1) === 'r' && !is_vowel(this.stem_2p[this.stem_2p.length - 2])
            && (this.stem_2p[this.stem_2p.length - 3] === 'é' || this.stem_2p[this.stem_2p.length - 3] === 'e')) { // double consonant stem-changing
            this.stem_s[this.stem_2p.length - 3] = 'è';
            this.stem_3p[this.stem_2p.length - 3] = 'è';
            this.future_base = this.stem_2p;
          }
        }
      }

      this.future_base += this.ending;

      this.subjunctive_stem_1p = this.stem_2p;
      this.subjunctive_stem_3p = this.stem_3p;

      return true;
    } else {
      for (const parts of irregular_11_verbs) {
        if (this.infinitive.endsWith(parts[0])) {
          this.ending = parts[0];

          this.stem_s = parts[2];
          this.stem_1p = parts[3];
          this.stem_2p = parts[3];
          this.stem_3p = parts[4];

          this.present_endings = irregular_xxt_present;
          this.past_stems = highly_irregular_past_stems;
          if (this.ending === 'être') {
            this.present_endings = etre_present;
            this.subjunctive_endings = irregular_present;
          } else if (this.ending === 'savoir') {
            this.present_endings = irregular_present;
          } else if (this.ending === 'avoir') {
            this.present_endings = avoir_present;
            this.subjunctive_endings = avoir_subj_present_endings;
          } else if (this.ending === 'faire') {
            this.is_2p_irregular = true;
            this.present_endings = faire_present;
            this.stem_2p = 'faites';
            this.past_stems = irregular_past_stems;
          } else if (this.ending === 'aller') {
            this.present_endings = aller_present;
            this.past_stems = er_past_stems;
            this.past_endings = er_past_endings;
            this.auxiliary = etre;
          }

          this.future_base = this.essential;
          this.future_base += parts[1];

          this.past_base = this.essential;
          this.past_base += parts[10];

          this.subjunctive_stem_1p = parts[6].length ? parts[6] : parts[5];
          this.subjunctive_stem_3p = parts[5];

          this.is_imperative_subj = (parts[7] === 'subj');
          this.is_present_participle_subj = (parts[8] === 'subj');

          this.past_participle = parts[9];

          return true;
        }
      }

      for (const parts of irregular_7_verbs) {
        if (this.infinitive.endsWith(parts[0])) {
          this.ending = parts[0];
          this.essential = this.infinitive.substr(0, this.infinitive.length - this.ending.length);

          this.stem_s = parts[2];
          this.stem_1p = parts[3];
          this.stem_2p = parts[3];
          this.stem_3p = parts[4];

          this.present_endings = irregular_present;

          if (this.ending === 'frir' || this.ending === 'vrir') {
            this.present_endings = regular_er_present;
          } else {
            if (this.infinitive === 'dire' || this.infinitive === 'redire') {
              this.is_2p_irregular = true;
              this.stem_2p = 'dites';
            } else if (this.infinitive === 'plaire' || this.infinitive === 'clore' || this.infinitive === 'naître' || this.infinitive === 'connaître') {
              this.is_circumflex_third = true;
            } else if (this.ending === 'aillir') {
              this.present_endings = regular_er_present;
            } else if (this.ending === 'faillir') {
              this.present_endings = irregular_xxt_present;
            }
          }

          this.future_base = this.essential;
          this.future_base += parts[1];

          this.past_base = this.essential;
          this.past_base += parts[6];

          this.past_base = this.past_base.slice(0, -1);
          if (parts[6].slice(-1) === 'u') {
            this.past_stems = highly_irregular_past_stems;
          }

          this.past_participle = this.essential;
          this.past_participle += parts[5];

          this.subjunctive_stem_1p = this.stem_2p;
          this.subjunctive_stem_3p = this.stem_3p;

          if (this.auxiliary !== etre) {
            for (const verb of irregular_etre_verbs) {
              if (this.infinitive === verb) {
                this.auxiliary = etre;
                break;
              }
            }
          }

          return true;
        }
      }
    }

    return false;
  }

  get_stem(person) {
    switch (person) {
    case 3:
      return this.stem_1p;
    case 4:
      return this.stem_2p;
    case 5:
      return this.stem_3p;
    default:
      return this.stem_s;
    }
  }

  forms(mood, voice, tense, person) { // can also do forms(voice)
    let result;
    if (mood instanceof Voice) {
      voice = mood;
      result = this.forms(Mood.infinitive, voice);
      result += this.forms(Mood.participle, voice);
      result += this.forms(Mood.indicative, voice);
      result += this.forms(Mood.subjunctive, voice);
      result += this.forms(Mood.conditional, voice);
      result += this.forms(Mood.imperative, voice);
    } else if ((mood instanceof Mood) && voice === undefined) {
      result = this.forms(mood, Voice.active);
    } else if (tense === undefined) {
      result = '\n==== ';
      result += capitalize(mood.name);
      result += ' ====\n';
      if (mood === Mood.indicative) {
        result += this.forms(mood, voice, Tense.present);
        result += this.forms(mood, voice, Tense.imperfect);
        result += this.forms(mood, voice, Tense.future);
        result += this.forms(mood, voice, Tense.past);
        result += this.forms(mood, voice, Tense.present_perfect);
        result += this.forms(mood, voice, Tense.pluperfect);
        result += this.forms(mood, voice, Tense.future_perfect);
        result += this.forms(mood, voice, Tense.past_anterior);
      } else if (mood === Mood.subjunctive) {
        result += this.forms(mood, voice, Tense.present);
        result += this.forms(mood, voice, Tense.imperfect);
        result += this.forms(mood, voice, Tense.past);
        result += this.forms(mood, voice, Tense.pluperfect);
      } else if (mood === Mood.conditional) {
        result += this.forms(mood, voice, Tense.present);
        result += this.forms(mood, voice, Tense.present_perfect);
      } else if (mood === Mood.imperative) {
        result += this.forms(mood, voice, Tense.present);
      } else if (mood === Mood.participle) {
        result += this.forms(mood, voice, Tense.present);
        result += this.forms(mood, voice, Tense.past);
        result += this.forms(mood, voice, Tense.present_perfect);
        result += '\n';
      } else if (mood === Mood.infinitive) {
        result += this.forms(mood, voice, Tense.present);
        result += this.forms(mood, voice, Tense.past);
        result += '\n';
      }
    } else if (person === undefined) {
      result = '\n';
      result += capitalize(tense.name);
      if (mood === Mood.participle || mood === Mood.infinitive) {
        result += '\t\t';
        result += this.form(mood, voice, tense);
      } else {
        for (let i = 0; i < 6; ++i) {
          result += '\n  ';
          result += this.form(mood, voice, tense, i);
        }
        result += '\n';
      }
    }
    return result;
  }

  form(mood, voice, tense, person) {
    if (voice === undefined) {
      return this.form(mood, Voice.active);
    }

    let result;
    if (person !== 2 && person !== undefined && this.stem_3p.charAt(0) === '—') {
      return '——';
    }

    if (voice === Voice.passive) {
      result = etre.form(mood, Voice.active, tense, person);
      result += ' ';
      result += this.past_participle;
      if (person > 2) {
        result += 's';
      }
      return result;
    }

    if (tense === Tense.present_perfect || tense === Tense.pluperfect || tense === Tense.past_anterior || tense === Tense.future_perfect || (mood === Mood.subjunctive && tense === Tense.past)) {
      let auxiliary_tense;
      if (tense === Tense.present_perfect) auxiliary_tense = Tense.present;
      if (tense === Tense.pluperfect) auxiliary_tense = Tense.imperfect;
      if (tense === Tense.past_anterior) auxiliary_tense = Tense.past;
      if (tense === Tense.future_perfect) auxiliary_tense = Tense.future;
      if (tense === Tense.past) auxiliary_tense = Tense.present;

      result = this.auxiliary.form(mood, Voice.active, auxiliary_tense, person);
      result += ' ';
      result += this.past_participle;
      if (person > 2 && this.auxiliary === etre) {
        result += 's';
      }
      return result;
    }

    switch (mood) {
    case Mood.infinitive:
      switch(tense) {
      case Tense.past:
        result = this.auxiliary.form(Mood.infinitive);
        result += ' ';
        result += this.past_participle;
        break;
      case Tense.present:
      default:
        result = this.infinitive;
        break;
      }
      return result;

    case Mood.participle:
      switch(tense) {
      case Tense.present:
        result = this.essential;
        if (this.is_present_participle_subj) {
          result += this.subjunctive_stem_1p;
        } else {
          result += this.stem_1p;
        }
        result += 'ant';
        break;
      case Tense.present_perfect:
        result = this.auxiliary.form(Mood.participle, voice, Tense.present);
        result += this.past_participle;
        break;
      case Tense.past:
        result = this.past_participle;
        break;
      default:
        result = '——';
        break;
      }
      return result;

    case Mood.imperative:
      if (person !== 1 && person !== 3 && person !== 4) {
        result = '——';
        break;
      }
      result = this.essential;
      if (this.is_imperative_subj) {
        if (person === 1) {
          result += this.subjunctive_stem_3p;
          result += this.infinitive === etre.form(Mood.infinitive) ? 's' : 'e';
        } else {
          result += this.subjunctive_stem_1p;
          result += regular_er_present[person];
        }
      } else {
        if (this.is_2p_irregular && person === 4) {
          result += this.stem_2p;
          break;
        } else {
          result += this.get_stem(person);
        }

        if (person === 1 && this.present_endings[1] === 'es') {
          result += 'e';
        } else {
          if (!(person === 1 && this.infinitive === 'aller')) {
            result += this.present_endings[person];
          }
        }
      }
      break;

    case Mood.conditional:
      result = this.future_base;
      result += imperfect_endings[person];
      break;

    case Mood.subjunctive:
      switch (tense) {
      case Tense.imperfect:
        result = (this.ending === 'er' ? this.stem_1p : this.past_base);
        result += (person === 2 ? this.past_stems[3] : this.past_stems[0]);
        result += subj_imperfect_endings[person];
        break;
      case Tense.present:
      default:
        result = this.essential;
        result += ((person === 3 || person === 4) ? this.subjunctive_stem_1p : this.subjunctive_stem_3p);
        result += this.subjunctive_endings[person];
        break;
      }
      break;

    case Mood.indicative:
    default:
      switch(tense) {
      case Tense.imperfect:
        result = this.essential;
        result += (person === 3 || person === 4) ? this.stem_2p : this.stem_1p;
        result += imperfect_endings[person];
        break;
      case Tense.future:
        result = this.future_base;
        result += future_endings[person];
        break;
      case Tense.past:
        result = (this.ending === 'er' ? (person === 5 ? this.stem_2p : this.stem_1p) : this.past_base);
        result += this.past_stems[person];
        if (this.ending === 'enir') {
          result += 'n';
        }
        result += this.past_endings[person];
        break;
      case Tense.present:
      default:
        result = this.essential;
        if (this.ending !== etre.form(Mood.infinitive)) {
          if (this.is_2p_irregular && person === 4) {
            result += this.stem_2p;
            break;
          } else {
            result += this.get_stem(person);
          }
        }

        if (!(person === 2 && this.present_endings[2].charAt(0) === 't' && (this.stem_s.slice(-1) === 'd' || this.stem_s.slice(-1) === 't' || this.stem_s.slice(-1) === 'c'))) {
          result += this.present_endings[person];
        }

        if (this.is_circumflex_third && person === 2) {
          result += '/ît';
        }
        break;
      }
      break;
    }

    return result;
  }

  process_args(args) {
    let mood, tense, voice, person, inf;

    for (let i = 0; i < args.length; ++i) {
      let arg = args[i];

      if (i === 0) {
        if (arg === 'se') {
          inf = 'se ';
        } else if (arg === "s'en") {
          inf = "s'en ";
        } else {
          inf = arg;
        }
      } else if (i === 1 && (inf === 'se ' || inf === "s'en ")) {
        inf += arg;
      } else {
        if (arg.length === 2 && (arg.charAt(1) === 'p' || arg.charAt(1) === 's')) {
          person = parseInt(arg.charAt(0), 10) - 1;
          if (arg.charAt(1) === 'p') {
            person += 3;
          }
        }

        if (voice === undefined) {
          voice = Voice.enumValueOf(arg);
        }

        if (mood === undefined) {
          mood = Mood.enumValueOf(arg);
        }

        if (tense === undefined) {
          tense = Tense.enumValueOf(arg);
        }
      }
    }

    let current_verb;
    if (inf === etre.form(Mood.infinitive)) {
      current_verb = etre;
    } else if (inf === avoir.form(Mood.infinitive)) {
      current_verb = avoir;
    } else {
      current_verb = this;
      if (!current_verb.set_infinitive(inf)) {
        return 'Invalid infinitive.';
      }
    }

    if (voice === undefined) {
      voice = Voice.active;
    }

    if (person === undefined) {
      if (mood === undefined && tense === undefined) {
        return current_verb.forms(voice);
      } else if (tense === undefined && mood !== undefined) {
        return current_verb.forms(mood, voice);
      } else if (tense !== undefined && mood === undefined) {
        return current_verb.forms(Mood.indicative, voice, tense);
      } else {
        return current_verb.forms(mood, voice, tense);
      }
    } else {
      return current_verb.form(mood, voice, tense, person);
    }
  }
}

const avoir = new Verb('avoir');
const etre = new Verb('être');

export {Verb};
