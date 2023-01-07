<template>
<div>
                <template v-if="$apollo.queries.naskahs.loading">
                <div class="col-12 col-md-4">
                    <q-card flat style="height: 250px" class="q-my-md">
                        <q-skeleton height="200px" square />
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
                <div class="col-12 col-md-4">
                    <q-card flat style="height: 250px" class="q-my-md">
                        <q-skeleton height="200px" square />
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
                <div class="col-12 col-md-4">
                    <q-card flat style="height: 250px" class="q-my-md">
                        <q-skeleton height="200px" square />
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
                <div class="col-12 col-md-4">
                    <q-card flat style="height: 250px" class="q-my-md">
                        <q-skeleton height="200px" square />
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
                <div class="col-12 col-md-4">
                    <q-card flat style="height: 250px" class="q-my-md">
                        <q-skeleton height="200px" square />
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
                <div class="col-12 col-md-4">
                    <q-card flat style="height: 250px" class="q-my-md">
                        <q-skeleton height="200px" square />
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
            </template>  
        <div v-if="!$apollo.queries.naskahs.loading">
            <div v-for="naskah in naskahs" :key="naskah.id">
                <router-link :to="`/post/` + naskah.slug" class="ppl_home_router">
                    <q-card flat square>
                        <q-img
                        v-if="`https://api.peoplereunite.id${naskah.Cover.url}` !== null"
                            placeholder-src="https://via.placeholder.com/480x300.png/333/ccc/?text=%23peoplereunite"
                            :src="`https://api.peoplereunite.id${naskah.Cover.url}`" :ratio="16/9" />
                        <q-card-section>
                            <div class="text-subtitle2 ppl_home_meta q-pt-sm">{{ naskah.Kategori.Judul }} by {{ naskah.kontributors[0].Nama }}</div>
                            <div class="text-h6 ppl_home_title">{{ naskah.Judul }}</div>
                            <div class="ppl_hometext text-caption q-pt-md ellipsis-3-lines">{{ naskah.MetaDescription }} <span class="ppl_readmore">Selengkapnya...</span></div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
</div>
</template>

<script>
import { date } from 'quasar'

import { headlineNaskahsQuery } from 'src/graphql/queries.js'

export default {

    data() {
        return {
            naskahs: [],
        }
    }, 
    apollo: {
        naskahs: {
            prefetch: true,
            query: headlineNaskahsQuery

        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    }    
}
</script>
