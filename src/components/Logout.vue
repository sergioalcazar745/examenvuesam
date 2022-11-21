<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'LogoutComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        localStorage.removeItem("token");
        this.$router.push("/")
    },

};
</script>

<style scoped>

</style>