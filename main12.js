
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
            this.$emit('applied');
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
            // alert('hoge');
            this.couponApplied = true;
        }
    },

});

