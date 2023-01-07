<template>
    <div class="q-px-md q-pt-md" v-if="!$apollo.queries.naskahs.loading">
        <div class="row container ppl_home">
            <div class="col-12 ppl_borderbottom">
                <p class="text-h6 text-uppercase text-bold"><q-icon name="fas fa-coffee"/>&nbsp;&nbsp;Essay</p>
            </div>
            <div class="col-12 col-md-4" v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <q-card flat style="min-height: 350px" class="q-my-md transparent">
                        <q-img
                        v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null"
                            placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite"
                            :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />
                        <q-card-section>
                            <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                            <div class="text-subtitle2 ppl_home_meta q-pt-sm">by {{ naskah.kontributors[0].Nama }} on {{ naskah.Published | tanggalPublikasi }}</div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
    </div >
</template>

<script>
import { date } from 'quasar'

import { latestessayNaskahsQuery } from 'src/graphql/queries.js'

export default {

    data() {
        return {
            naskahs: [],
        }
    }, 
    apollo: {
        naskahs: {
            prefetch: true,
            query: latestessayNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }    
}
</script>
