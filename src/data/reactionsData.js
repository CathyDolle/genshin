const reactions = [
  {
    name: 'Swirl',
    description: `Absorbe le premier élément entrant en contact avec celle-ci 
                  et déclenche des dégâts élémentaires propres aux éléments 
                  utilisés qui ont générer plusieurs autres réactions élémentaires.`,
    search: ['anemo'],
    types: ['pyro', 'hydro', 'cryo', 'electro', 'anemo'],
  },
  {
    name: 'Crystallize',
    description: `Génère des fragments élémentaires qui fournissent des boucliers des 
                  éléments correspondants, qui vont eux, réduire les dommages 
                  élémentaires à venir.`,
    search: ['geo'],
    types: ['pyro', 'hydro', 'cryo', 'electro', 'geo'],
  },
  {
    name: 'Electrocution',
    description: 'Déclenche des dégâts electro sur la durée pendant un certain temps',
    search: ['hydro', 'electro'],
    types: ['hydro', 'electro'],
  },
  {
    name: 'Superconduct',
    description: `Déclenche des dégâts CRYO en 
                  zone et réduit La Défense de la 
                  cible`,
    search: ['cryo', 'electro'],
    types: ['cryo', 'electro'],
  },
  {
    name: 'Overload',
    description: 'Crée une explosion qui réalise des dégâts Pyro en zone et permet de détruire les boucliers de types GEO',
    search: ['pyro', 'electro'],
    types: ['pyro', 'electro'],
  },
  {
    name: 'Burning',
    description: 'Déclenche des dégâts Pyro sur la durée.',
    search: ['pyro', 'dendro'],
    types: ['pyro', 'dendro'],
  },
  {
    name: 'Vaporize',
    description: 'Déclenche des dégâts élémentaires additionnels, l’effet se dissipe une fois déclenché',
    search: ['pyro', 'hydro'],
    types: ['pyro', 'hydro'],
  },
  {
    name: 'Freeze',
    description: `Le gel empêche les cibles de 
                  bouger, brisé est déclenché si des 
                  dégâts physiques sont déclenchés 
                  sur des cibles gelées.`,
    search: ['cryo', 'hydro'],
    types: ['cryo', 'hydro'],
  },
  {
    name: 'Melt',
    description: 'Déclenche une fusion venant des éléments Cryo ou Pryo, augmentant les dommages effectués ',
    search: ['cryo', 'pyro'],
    types: ['cryo', 'pyro'],
  },
];

export default reactions;
