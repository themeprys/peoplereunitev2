<template>
    <div>
        <div v-if="!$apollo.queries.naskahs.loading" class="q-pt-xl">
            <div v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                <div class="row">
                    <div class="col-md-6 q-pr-md">
                        <q-img
                        v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null"
                            placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite"
                            :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />

                    </div>
                    <div class="col-md-6 q-pl-lg">
                            <q-badge class="text-subtitle2 ppl_home_meta q-px-sm" color="primary" :label="naskah.Kategori.Judul" />
                            <!-- <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} Update</div> -->
                            <div class="text-h6 ppl_home_title_desktop q-py-sm q-pt-lg">{{ naskah.Judul }}</div>
                            <div class="text-subtitle2 q-pt-sm">by {{ naskah.kontributors[0].Nama }} | {{ naskah.Published | tanggalPublikasi }}</div>
                            <div class="text-h6 q-pt-md ellipsis-3-lines">{{ naskah.MetaDescription }}</div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
</div>
</template>

<script>
import { date } from 'quasar'

import { desktopheadlineNaskahsQuery } from 'src/graphql/queries.js'

export default {

    data() {
        return {
            naskahs: [],
        }
    },
    apollo: {
        naskahs: {
            prefetch: true,
            query: desktopheadlineNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }
}
</script>
