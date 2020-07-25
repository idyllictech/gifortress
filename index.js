var app = new Vue({
    el: '#app',
    data:{
        message: 'Here is my First Vuejs Apps',
        name: 'GI Fortress Author and Developer',
        price: '1000',
        path: 'imgs/somie.jpg',
        link: 'http://localhost:8080/newdoglord/paypal',
    },
    
    methods:{
        discount:function(d){
            // cost = this.price - 100;
            cost = this.price - d;
            return cost;
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  var tempapp = new Vue({
    el: '#tempapp',
    data : {
        temp: 0,
    },
    methods:{
        inc:function() {
            this.temp++;
        },
        dec:function(){
            this.temp--;
        },

    }
})

var kbapp = new Vue({
    el: '#kbapp',
    data : {
        temp: 0,
    },
    methods:{
        keypressed:function() {
            console.log('key pressed')
        }
    }
})

var twoway = new Vue({
    el: '#twoway',
    data : {
        message: '',
    },
    methods:{
                
    }
})

