Vue.component('task',{

    template: '<li>今夜が <slot></slot> 山田</li>'

    // // data for component is instance!
    // data(){
    //     return ['hoge'];
    // }
});

Vue.component('task-list',{

    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    // data for component is instance!
    data() {
        return {
            tasks: [
                { task:'Go to the store', complete:true },
                { task:'Go to the email', complete:false },
                { task:'Go to the farm', complete:true },
                { task:'Go to work', complete:false },
            ]
        };
    }
});


new Vue({
    el:'#root'
});
