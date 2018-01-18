// share this Event instance
window.Event = new class {

    constructor(){
        this.vue = new Vue();
    }

    fire(event, data=null){
        this.vue.$emit(event, data);
    }

    listen(event, callback){
        this.vue.$on(event, callback);
    }
};


Vue.component('my-coupon',{

    // props, template, data(), methods

    template:`
        <input placeholder="Enter your coupon code." @blur="onCouponApplied"/>
    `,

    data(){
        return {
            tabs : [],
        }
    },

    methods:{
        'onCouponApplied':function () {
            //this.$emit('applied');
            Event.fire('applied');
        }
    },

    created(){},
    mounted(){},
    updated(){},
    destroyed(){},
});


new Vue({

    el:'#root',

    data:{
        couponApplied: false,
    },

    methods:{
        'onCouponApplied':function () {
            this.couponApplied = true;
        }
    },

    created() {
        Event.listen('applied', () => alert('Handling it!')) //$on('applied', () => alert('Handling it!'))
    }

});

