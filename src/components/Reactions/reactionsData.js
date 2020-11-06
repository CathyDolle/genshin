import {
  Anemo,
  Geo,
  Electro,
  Dendro,
  Hydro,
  Pyro,
  Cryo,
} from 'genshin-icon';

const reactions = [
  {
    Element: Anemo,
    color: 'var(--anemo-color)',
    Reaction: {
      Swirl: [Pyro, Hydro, Cryo, Electro],
    },
  },
  {
    Element: Geo,
    color: 'var(--geo-color)',
    Reaction: {
      Crystallize: [Pyro, Hydro, Cryo, Electro],
    },
  },
  {
    Element: Electro,
    color: 'var(--electro-color)',
    Electrocution: [Electro, Hydro],
    Superconduct: [Electro, Cryo],
    Overload: [Electro, Pyro],
  },
  {
    Element: Dendro,
    color: 'var(--dendro-color)',
    Reaction: {
      Burning: [Dendro, Pyro],
    },
  },
  {
    Element: Hydro,
    color: 'var(--hydro-color)',
    Reaction: {
      Electrocution: [Hydro, Electro],
      Vaporize: [Hydro, Pyro],
      Freeze: [Hydro, Cryo],
    },
  },
  {
    Element: Pyro,
    color: 'var(--pyro-color)',
    Reaction: {
      Melt: [Pyro, Cryo],
      Burning: [Pyro, Dendro],
      Vaporize: [Pyro, Hydro],
      Overload: [Pyro, Electro],
    },
  },
  {
    Element: Cryo,
    color: 'var(--cryo-color)',
    Reaction: {
      Melt: [Cryo, Pyro],
      Superconduct: [Cryo, Electro],
      Freeze: [Cryo, Hydro],
    },
  },
];

export default reactions;
