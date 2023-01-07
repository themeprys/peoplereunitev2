<template>
    <div class="ppl_wrapper_story q-pt-lg" v-if="!$apollo.queries.naskahs.loading">
        <div class="col-12 text-center">
            <p class="text-h5 text-bold"><q-icon name="fas fa-feather-alt"/>  Feature Story</p>
        </div>
        <div class="ppl_wrapper_hori">
            <div class="ppl_hori q-pl-lg">
                <div v-for="naskah in naskahs" :key="naskah.id">
                    <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                        <q-card  style="width:250px;" class="q-my-md">
                            <q-img v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null" placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite" :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />
                            <q-card-section>
                                <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                                <div class="text-subtitle2 ppl_home_meta q-pt-sm">by {{ naskah.kontributors[0].Nama }}</div>
                            </q-card-section>
                        </q-card>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { date } from 'quasar'

import { latestfeatureNaskahsQuery } from 'src/graphql/queries.js'

export default {

    data() {
        return {
            naskahs: [],
        }
    },
    apollo: {
        naskahs: {
            prefetch: true,
            query: latestfeatureNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }
}
</script>
