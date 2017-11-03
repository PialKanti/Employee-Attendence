new Vue({
    el: "#root",
    data:{
        empName:'',
        empId: '',
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
    },
    methods:{
        insert: function(){
            this.employees.push({
                name: this.empName,
                id: this.empId,
                status: false,
                action: "Enter"
            });
            this.empName = '';
            this.empId='';
        },
        changeStatus: function(i){
            if(this.employees[i].status == false){
                this.activeEmpNum++;
                this.employees[i].action = "Leave";
            }else{
                this.activeEmpNum--;
                this.employees[i].action = "Enter"        
            }
            this.employees[i].status = !this.employees[i].status;
        }
    }
});