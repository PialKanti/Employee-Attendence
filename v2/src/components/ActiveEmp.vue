<template>
    <div class="col-md-6">
        <h4>At office({{active}})</h4>
        <hr>
        <!-- <p>No Employee in office</p> -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in empList" v-if="employee.status">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: ['empList','active']
}
</script>
<style>

</style>


