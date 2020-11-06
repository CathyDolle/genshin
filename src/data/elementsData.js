import {
  Anemo,
  Geo,
  Electro,
  Dendro,
  Hydro,
  Pyro,
  Cryo,
} from 'genshin-icon';

// CHARACTERE
import jean from '../assets/images/char/jean.png';
import ningguang from '../assets/images/char/ningguang.png';
import keqing from '../assets/images/char/keqing.png';
import barbara from '../assets/images/char/barbara.png';
import diluc from '../assets/images/char/diluc.png';
import xiangling from '../assets/images/char/xiangling.png';
import chongyun from '../assets/images/char/chongyun.png';
import qiqi from '../assets/images/char/qiqi.png';
import mona from '../assets/images/char/mona.png';
import sucrose from '../assets/images/char/sucrose.png';
import fischl from '../assets/images/char/fischl.png';
import noelle from '../assets/images/char/noelle.png';

// eslint-disable-next-line import/prefer-default-export
export const elements = [
  {
    Component: Anemo,
    name: 'anemo',
    color: 'var(--anemo-color)',
    char: jean,
    leftChar: sucrose,
  },
  {
    Component: Geo,
    name: 'geo',
    color: 'var(--geo-color)',
    char: ningguang,
    leftChar: noelle,
  },
  {
    Component: Electro,
    name: 'electro',
    color: 'var(--electro-color)',
    char: keqing,
    leftChar: fischl,
  },
  {
    Component: Dendro,
    name: 'dendro',
    color: 'var(--dendro-color)',
    char: keqing,
  },
  {
    Component: Hydro,
    name: 'hydro',
    color: 'var(--hydro-color)',
    char: barbara,
    leftChar: mona,
  },
  {
    Component: Pyro,
    name: 'pyro',
    color: 'var(--pyro-color)',
    char: diluc,
    leftChar: xiangling,
  },
  {
    Component: Cryo,
    name: 'cryo',
    color: 'var(--cryo-color)',
    char: chongyun,
    leftChar: qiqi,
  },
];
