export default {
    state: {        
      news: [{
          id: 1,
          title: 'Começa, os treinos para a nova temporada',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus, earum fugit cum ipsam laborum quo consequuntur est debitis voluptate aperiam corrupti alias quia in quidem esse soluta dolor accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iste nemo suscipit voluptatem quae autem architecto animi illum facere rerum dicta est, odio consequatur expedita molestias sint? Commodi, odit vel!',
          date: '2021-03-09',
          img: 'news1.jpg',
          imgInfo: 'Noticícia 1',
      }, {
          id: 2,
          title: 'Jogo de quarta-feira termina empatado',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus, earum fugit cum ipsam laborum quo consequuntur est debitis voluptate aperiam corrupti alias quia in quidem esse soluta dolor accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iste nemo suscipit voluptatem quae autem architecto animi illum facere rerum dicta est, odio consequatur expedita molestias sint? Commodi, odit vel!',
          date: '2021-03-10',
          img: 'news2.jpg',
          imgInfo: 'Noticícia 2',
      }, {
          id: 3,
          title: 'A inauguração do novo será na semana que vem',
          content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus, earum fugit cum ipsam laborum quo consequuntur est debitis voluptate aperiam corrupti alias quia in quidem esse soluta dolor accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iste nemo suscipit voluptatem quae autem architecto animi illum facere rerum dicta est, odio consequatur expedita molestias sint? Commodi, odit vel!',
          date: '2021-03-11',
          img: 'news3.jpg',
          imgInfo: 'Noticícia 3',
      }]
    },
    getters: {
      getNews(state) {
        return state.news;
      },
      getNewsFromId: state => id => {
        let notice = state.news.find(item => {
          return (item.id == id);
        });

        return notice;
      }
    }
}