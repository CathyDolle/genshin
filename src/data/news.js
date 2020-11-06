import chibiMap from '../assets/images/chibi/chibiMap.png';
import chibiTimer from '../assets/images/chibi/chibiTimer.png';

const newsData = {
  posts: [
    {
      title: 'Nouveauté de la 1.1',
      linkText: '▶ Regarder le trailer',
      to: 'https://twitter.com/Genshin_7/status/1322148834001129473',
      external: true,
      src: chibiMap,
      text: 'La maj est prévue pour le 11 novembre, aucune région n\'a été annoncée. Pour plus d\'infos :',
    },
    {
      title: 'Timer',
      text: 'Pour voir le temps de respawn des ressources',
      //   href:"https://genshin.mihoyo.com/fr/gift"
      linkText: '▶ Voir les timers',
      to: '/',
      src: chibiTimer,
    },
    {
      title: 'Test',
      text: 'Pour voir le temps de respawn des ressources',
      //   href:"https://genshin.mihoyo.com/fr/gift"
      linkText: '▶ Voir les timers',
      to: '/',
      src: chibiTimer,
    },
  ],
};

export default newsData;
