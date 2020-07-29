var app = new Vue({
    el: '#app',
    data:{
        message: 'Here is my First Vuejs Apps',
        name: 'GI Fortress Author and Developer',
        value: 100,
        price: '2000',
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
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  });

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
});

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
});

var twoway = new Vue({
    el: '#twoway',

    data : {
        message: '',
        status: false,
    }
});

var gateapp = new Vue({
    el: '#gateapp',

    data : {
        gate: false,
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.name }}, Score: {{ todo.score }}</li>'
  });

var loopapp = new Vue({
    el: '#loopapp',

    data : {
        students: ['Jim', 'Rob', 'Kyle', 'John'],
        players:[
            {id: 0, name:'Jim', score:15},
            {id: 1, name:'Rob', score:10},
            {id: 2, name:'Kyle', score:30},
            {id: 3, name:'John', score:85},

        ]
    }
});

var vueinstan = new Vue({
    el: '#vueinstan',

    data : {
       value: 200,
        
    },
    methods: {
        f1: function() {
            return app.price;
        }

    }
});


Vue.component('mycomponent',{
    template: '<p>This is my component {{ name }} - temp:{{ temprature }}<sup>0</sup>C <br/><button v-on:click="decTemp()" class="status">decrease Temp</button> - <button v-on:click="changeTemp()" class="status">Increase Temp</button> </p>',
    data:function(){
        return{
            name: 'John',
            temprature: 100,
        }
    },
    methods: {
        changeTemp:function(){
            this.temprature = this.temprature + 5;            
        },
        decTemp:function(){
            this.temprature = this.temprature - 5;            
        },

    },

})


var compapp = new Vue({
    el: '#compapp',

    data : {
       value: 200,
       price: 2500,
        
    },
    methods: {
        

    }
});

Vue.component('fontsize',{
        template: '<p style="{font-size: }">{{ fontsz }} Lorem ipsum dolor <br/><button v-on:click="incFontsz()">Incr.</button> Font Size <button v-on:click="decFontsz()">Decr.</button></p>',
        data:function(){
            return{
                fontsz: 14,
            }
        },
        methods: {
            incFontsz:function(){
                this.fontsz = this.fontsz + 2;  
            },
            decFontsz:function(){
                this.fontsz = this.fontsz - 2;  
            },
    
        },

    })

var vref = new Vue({
    el: '#vref',

    data : {
        years: 36/12,
        rate: 12/100,
        inter: '',
                        
    },
    methods: {
        interest: function(){
            this.inter = this.$refs.principal.value * this.years * this.rate;
            console.log(this.inter);
        }
    }
    
})