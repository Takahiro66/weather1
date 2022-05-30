const app=new Vue({
    el:'#app',
    data: {
      selected: '',
      users: [],
      options: [
        { text: '北海道', value: '016000'},
        {text: '青森', value: '020000'}, 
        {text: '森岡', value: '030000'}, 
        {text: '仙台', value: '040000'}, 
        {text: '秋田', value: '050000'}, 
        {text: '山形', value: '060000'}, 
        {text: '福島', value: '070000'}, 
        {text: '水戸', value: '080000'}, 
        {text: '宇都宮', value: '090000'}, 
        {text: '前橋', value: '100000'}, 
        {text: '熊谷', value: '110000'}, 
        {text: '銚子', value: '120000'}, 
        {text: '東京', value: '130000'}, 
        {text: '横浜', value: '140000'}, 
        {text: '甲府', value: '190000'}, 
        {text: '長野', value: '200000'}, 
        {text: '岐阜', value: '210000'}, 
        {text: '静岡', value: '220000'}, 
        {text: '名古屋', value: '230000'}, 
        {text: '津', value: '240000'}, 
        {text: '新潟', value: '150000'}, 
        {text: '富山', value: '160000'}, 
        {text: '金沢', value: '170000'}, 
        {text: '福井', value: '180000'}, 
        {text: '彦根', value: '250000'}, 
        {text: '京都', value: '260000'}, 
        {text: '大阪', value: '270000'}, 
        {text: '神戸', value: '280000'}, 
        {text: '奈良', value: '290000'}, 
        {text: '和歌山', value: '300000'}, 
        {text: '鳥取', value: '310000'}, 
        {text: '松江', value: '320000'}, 
        {text: '岡山', value: '330000'}, 
        {text: '広島', value: '340000'}, 
        {text: '徳島', value: '360000'}, 
        {text: '高松', value: '370000'}, 
        {text: '松山', value: '380000'}, 
        {text: '高知', value: '390000'}, 
        {text: '下関', value: '350000'}, 
        {text: '福岡', value: '400000'}, 
        {text: '佐賀', value: '410000'}, 
        {text: '長崎', value: '420000'}, 
        {text: '熊本', value: '430000'}, 
        {text: '大分', value: '440000'}, 
        {text: '宮崎', value: '450000'}, 
        {text: '鹿児島', value: '460100'}, 
        {text: '沖縄', value: '471000'}
  
      ]
    }, 
    methods: { 
      getData() {
       const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/'+document.querySelector('#currentLocate').value+'.json'; 
       fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.users = data;
        
          });
      }, 
    },
  
  })
  
  
