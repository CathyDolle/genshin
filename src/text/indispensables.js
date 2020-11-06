import chibiTimer from '../assets/images/chibi/chibiTimer.png';
import chibiMap from '../assets/images/chibi/chibiMap.png';

const indispensable = {
  article: [
    {
      title: 'Map interactive',
      text: 'Une map interactive pour voir le spot de chaque ressource.',
      src: chibiMap,
      hrefName: '▶ Voir la map',
      href: 'https://www.genshin-impact.fr/map/',
    },
    {
      title: 'Timer',
      text: 'Pour voir le temps de respawn des ressources.',
      src: chibiTimer,
      hrefName: '▶ Voir les timers',
      href: '/',
    },
    {
      title: 'Réactions',
      text: 'Toutes les réactions élémentaires possibles avec vos éléments.',
      src: chibiTimer,
      toName: '▶ Voir les réactions',
      to: '/indispensables/reactions',
    },
  ],
};

export default indispensable;
