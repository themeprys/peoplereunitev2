<template>
    <q-page class="q-pa-md" v-if="!$apollo.queries.naskahs.loading">
        <div class="row container ppl_home">
            <div class="col-12 ppl_borderbottom q-mb-sm">
                <p class="text-h6 text-bold text-uppercase"><q-icon name="fas fa-bolt" /> Latest News</p>
            </div>
            <div class="col-12 q-py-md" v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <div class="row">
                        <div class="col-4">
                            <q-img v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null" placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite" :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="1/1" />
                        </div>
                        <div class="col-8 q-pl-md">
                            <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Published | tanggalPublikasi }}</div>
                            <div class="ppl_homecard_title">{{ naskah.Judul }}</div>
                        </div>
                    </div>
    
                </router-link>
            </div>
        </div>
    </q-page>
</template>

<script>
import { date } from 'quasar'

import { latestnewsNaskahsQuery } from 'src/graphql/queries.js'

export default {

    data() {
        return {
            naskahs: [],
        }
    },
    apollo: {
        naskahs: {
            prefetch: true,
            query: latestnewsNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }
}
</script>
