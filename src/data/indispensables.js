import chibiTimer from '../assets/images/chibi/chibiTimer.png';
import chibiMap from '../assets/images/chibi/chibiMap.png';

const indispensable = {
  posts: [
    {
      title: 'Map interactive',
      text: 'Une map interactive pour voir le spot de chaque ressource.',
      src: chibiMap,
      linkText: '▶ Voir la map',
      to: 'https://www.genshin-impact.fr/map/',
      external: true,
    },
    {
      title: 'Timer',
      text: 'Pour voir le temps de respawn des ressources.',
      src: chibiTimer,
      linkText: '▶ Voir les timers',
      to: '/',
    },
    {
      title: 'Réactions',
      text: 'Toutes les réactions élémentaires possibles avec vos éléments.',
      src: chibiTimer,
      linkText: '▶ Voir les réactions',
      to: '/indispensables/reactions',
    },
  ],
};

export default indispensable;
