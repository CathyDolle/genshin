import React, { useContext } from 'react';

// LOGO TYPES
import { Anemo } from 'genshin-icon';
import { Geo } from 'genshin-icon';
import { Electro } from 'genshin-icon';
import { Dendro } from 'genshin-icon';
import { Hydro } from 'genshin-icon';
import { Pyro } from 'genshin-icon';
import { Cryo } from 'genshin-icon';
import colorContext from '../contexts/element';

// CHAR
import jean from '../assets/images/char/jean.png';
import ningguang from '../assets/images/char/ningguang.png';
import keqing from '../assets/images/char/keqing.png';
import barbara from '../assets/images/char/barbara.png';
import diluc from '../assets/images/char/diluc.png';
import xiangling from '../assets/images/char/xiangling.png';
import chongyun from '../assets/images/char/chongyun.png';

export const elements = [
  {
    Component: Anemo,
    name: 'anemo',
    color: 'var(--anemo-color)',
    char: jean,
  },
  {
    Component: Geo,
    name: 'geo',
    color: 'var(--geo-color)',
    char: ningguang,
  },
  {
    Component: Electro,
    name: 'electro',
    color: 'var(--electro-color)',
    char: keqing,
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
  },
];

function Elements() {
  const { current, setColor } = useContext(colorContext);

  return (
    <div className="elements_container">
      {/* éléments */}
      {elements.map(({ Component, color, name }) => (
        <Component
          key={color}
          className={`elements ${current === name ? '' : ' elements_inactive'}`}
          onClick={() => setColor(name)}
          size="35"
          color={color}
        />
      ))}
    </div>
  );
}

export default Elements;
