
Vue.component('my-tabs',{

    // props, template, data(), methods

    template:`
        <div>
        
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{'is-active': tab.isActive }">
                        <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
        
            <div class="tabs-details">
            
                <slot></slot>
            
            </div>
                    
        </div>
    `,

    data(){
        return {
            tabs : [],
        }
    },

    methods:{
        'selectTab':function (selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === selectedTab.name);
            });
        }
    },

    created(){
        this.tabs = this.$children;
    }

});


Vue.component('tab',{

    // props, template, data(), methods
    // created, mounted, updated, destroyed

    props:{
        name: { required:true },
        activated: false,
    },

    data(){
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase();
        }
    },

    mounted(){
        this.isActive = this.activated;
    },

    template:`
        <div v-if="isActive"><slot></slot></div>
    `,

});





new Vue({
    el:'#root',

    // data, methods, template?, props?

    // data:{
    //     modalIsVisible: false,
    // },
    //
    // methods:{
    //     'showModal':function () {
    //         this.modalIsVisible = true;
    //     },
    //     'hideModal':function () {
    //         this.modalIsVisible = false;
    //     }
    // }

});

