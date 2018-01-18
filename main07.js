Vue.component('task',{

    template: '<li>Foo<slot></slot>Bar</li>'

    // // data for component is instance!
    // data(){
    //     return ['hoge'];
    // }
});

new Vue({
    el:'#root'
});
