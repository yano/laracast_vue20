
Vue.component('my-modal',{



    // props, template, data(), methods
    // props:['title', 'body'],



    template:`
        <div class="modal is-active">
        
            <div class="modal-background"></div>
          
            <div class="modal-card">
            
                <header class="modal-card-head">
            
                    <p class="modal-card-title">
                        <slot name="header"></slot>
                    </p>
              
                    <button class="delete" aria-label="close"></button>
                </header>
            
                <section class="modal-card-body">
                    <slot>
                        Default content here.
                    </slot>
                </section>
            
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <a class="button is-primary">Okay</a>
                    </slot>
                </footer>
            
            </div>
        </div>        
    `,



    // data(){
    //     return {
    //     }
    // },

    // methods:{
    // },

    // created(){},
    // mounted(){},
    // updated(){},
    // destroyed(){},
});


new Vue({

    el:'#root',

});

