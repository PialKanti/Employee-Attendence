<template>
    <div class="col-md-6">
        <h4>Employee List</h4>
        <hr>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee,i) in empList">
                    <td>
                        {{ i+1 }}
                    </td>
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.name }}</td>
                    <td>
                        <button class="btn btn-xs btn-success" 
                                @click="changeStatus(i)" 
                                :class="[{'btn-success': !employee.status}, {'btn-danger': employee.status}]">
                            {{ employee.action }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: ['empList'],
    methods: {
        changeStatus: function(i) {
            this.$emit("changeStatus",i);
        }
    }
};
</script>
<style>

</style>


