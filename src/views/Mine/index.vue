<template>
    <div id="main">
        <Header title="我的"></Header>
        <Login></Login>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
export default {
    name:'Mine',
    components : {
        Header,
        Footer,
        Login
    }
}
</script>

<style>

</style>
