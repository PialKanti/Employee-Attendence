<template>
    <div class="row">
        <div class="col-md-3">
            <input class="form-control" placeholder="Employee Name..." v-model="name">
        </div>
        <div class="col-md-2">
            <input class="form-control" placeholder="Employee ID..." v-model="id">
        </div>
        <div class="col-md-1">
            <button class="btn btn-md btn-primary" @click="insert">Add</button>
        </div>
    </div>
</template>
<script>
    export default{
        data: function(){
            return {
                name : '',
                id : ''
            }
        },
        methods: {
            insert: function(){
                this.$emit('newEmp',{
                    empName: this.name,
                    empId: this.id
                });
                this.name = '';
                this.id = '';
            }
        }
    }
</script>