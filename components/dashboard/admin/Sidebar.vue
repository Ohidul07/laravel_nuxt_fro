<template>
    <div class="sidebar">
        <ul class="list-unstyled">
            <nuxt-link to="/dashboard">
                <li><span><i class="fa-solid fa-gauge me-2"></i>Dashboard</span></li>
            </nuxt-link>
            <nuxt-link to="/categories">
                <li><span><i class="fa-solid fa-gauge me-2"></i>Categories</span></li>
            </nuxt-link>
            <nuxt-link to="/products">
                <li><span><i class="fa-solid fa-gauge me-2"></i>Product</span></li>
            </nuxt-link>
            <nuxt-link to="/orders">
                <li><span><i class="fa-solid fa-gauge me-2"></i>Orders</span></li>
            </nuxt-link>
        </ul>
    </div>    
</template>

<style scoped>
    .sidebar {
        background: #fff;
    }
    .sidebar ul a {
        text-decoration: none;
        color: #000;
    }
    .sidebar ul a li {
        border-bottom: 1px solid #f1f1f1;
    }
    .sidebar ul li span{
        padding: 10px 15px;
        display: block;
    }
    .sidebar ul li {
        border-left: 3px solid #fff;    
    }
    .sidebar ul li:hover {
        background: green;
        cursor: pointer;
        border-left: 3px solid red;
    }
</style>