<template>
    <div class="skills">
        <h1>Skills</h1>

        <ul class="view-grid v-column">
            
            <!-- display skills provided from data object-->
            <li v-for="(skill, index) of skills" :key="index" >
                <router-link v-bind:to="{ name: 'skill-detail', params: { id: skill.id.$oid } }" >
                    <p>{{skill.name}}</p>
                    <img v-bind:src="skill.image"> 
                </router-link>
            </li>
        </ul>

    </div>
</template>

<style>
    @import url('./_skills.scss');
</style>

<script src="./skills.js"></script>