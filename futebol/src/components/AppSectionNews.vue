<template>
    <section class="section-news">
        <div class="container">
            <AppSectionNewsIndividual 
                v-for="notice in news"
                :key="notice.id"
                :img-name="notice.img"
                :img-info="notice.imgInfo"
                :news-date="notice.date"
            >      
                <template #title>
                    <router-link :to="{ name: 'notice', params: { idnotice: notice.id } }" tag="h2">{{ notice.title }}</router-link>
                </template>         
                <p>{{ notice.content | truncate(200) }}</p>
            </AppSectionNewsIndividual>

        </div>
    </section>
</template>

<script>
import AppSectionNewsIndividual from './AppSectionNewsIndividual'
import { mapGetters } from 'vuex'

export default {
    components: {
        AppSectionNewsIndividual
    },
    data() {
        return {
          
        }
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })
    }
}
</script>

<style>
.section-news {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
}
</style>
