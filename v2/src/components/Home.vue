<template>
    <div>
        <emp-reg @newEmp="insert($event)"></emp-reg>
        <div class="row">
            <emp-list :empList = "employees" @changeStatus= "status($event)"></emp-list>
            <emp-active :empList = "employees" :active="activeEmpNum"></emp-active>
        </div>
    </div>
</template>
<script>
import Register from './Register.vue';
import EmpList from './EmpList.vue';
import ActiveEmp from './ActiveEmp.vue';
export default {
    data: function(){
        return{
            activeEmpNum: 0,
            employees:[
            {
                name:"Avijit Biswas",
                id: "7005",
                status: false,
                action: "Enter"
            },
            {
                name:"Tanay Roy",
                id: "7006",
                status: false,
                action: "Enter"
            }
        ]
        }
    },
    methods:{
        insert($event){
            this.employees.push({
                name: $event.empName,
                id: $event.empId,
                status: false,
                action: "Enter"
            });
        },
        status: function(i){
            if(this.employees[i].status == false){
                this.activeEmpNum++;
                this.employees[i].action = "Leave";
            }else{
                this.activeEmpNum--;
                this.employees[i].action = "Enter"        
            }
            this.employees[i].status = !this.employees[i].status;
        }
    },
    components:{
        'emp-reg' : Register,
        'emp-list' : EmpList,
        'emp-active' : ActiveEmp 
    }
};
</script>
<style>

</style>


