
Vue.component('my-modal',{

    // props:['title', 'body'],

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `,

    // data for component is instance!
    // data() {
    //     return {
    //         isVisible: false
    //     };
    // },

    // methods:{
    //     'hideModal':function () {
    //         this.isVisible = true;
    //     }
    // }

});


new Vue({
    el:'#root',
    data:{
        modalIsVisible: false,
    },
    methods:{
        'showModal':function () {
            this.modalIsVisible = true;
        },
        'hideModal':function () {
            this.modalIsVisible = false;
        }
    }
});

