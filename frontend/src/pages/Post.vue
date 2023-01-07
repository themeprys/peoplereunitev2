<template>
    <q-page>
        <div class="container" style="max-width:700px" v-if="$apollo.queries.naskahs.loading">
            <q-card flat>
                <q-skeleton height="300px" square />
                <q-item>
                    <q-item-section avatar>
                        <q-skeleton type="QAvatar" />
                    </q-item-section>
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
        <template v-if="naskahs[0].Judul && !$apollo.queries.naskahs.loading">
            <div class="container" style="max-width:700px" v-for="naskah in naskahs" :key="naskah.id">
                <q-img v-if="$q.platform.is.mobile" :src="`https://api.peoplereunite.id${naskahs[0].Cover.url}`" style="width: 100%" />
                <div v-if="$q.platform.is.mobile" class="text-right q-pr-sm text-grey-8">{{ naskahs[0].Credit }}</div>
                <q-breadcrumbs gutter="sm" class="q-pt-lg q-pl-lg">
                    <q-breadcrumbs-el label="Home" to="/" />
                    <q-breadcrumbs-el :label="naskahs[0].Kategori.Judul" />
                </q-breadcrumbs>
                <div class="ppl_post_content q-px-lg">
                    <h5 class="q-mb-none text-italic text-uppercase q-mt-lg">{{ naskahs[0].Subjudul }}</h5>
                    <h1 class="text-h5 q-mt-none text-bold ppl_post_title">{{ naskahs[0].Judul }}</h1>
                    <div v-if="naskahs[0].Player" class="ppl_post_attachment q-pb-lg text-right float-right">
                        <q-btn flat class="text-lowercase" stack @click="playMusic" id="ppl_playtop">
                            <template v-if="!seamless">
                                <q-icon name="fa fa-play text-red"/>Play
                            </template>
                            <template v-if="seamless">
                                <q-icon name="fas fa-window-close text-red" />
                                Close
                            </template>
                        </q-btn>
                </div>
                <div class="text-subtitle2 q-pb-lg ppl_post_meta">{{ naskahs[0].Kategori.Judul }} by {{ naskahs[0].kontributors[0].Nama }}<br><small>{{ naskahs[0].Published | tanggalPublikasi }}</small>
                    <div v-if="naskahs[0].Kanal" style="font-size: 18px;" class="q-pt-sm">
                        <q-icon style="font-size:10px" name="fas fa-external-link-alt" /> via
                        <q-btn flat style="font-size: 16px;top:-1px" class="text-capitalize ppl_kanal" :label="naskahs[0].Kanal" color="black" @click="confirm = true" />
                    </div>
                </div>
                <q-img v-if="$q.platform.is.desktop" :src="`https://api.peoplereunite.id${naskahs[0].Cover.url}`" style="width: 100%" />
                <div v-if="$q.platform.is.desktop" class="text-right q-pr-sm q-mb-lg text-grey-8">{{ naskahs[0].Credit }}</div>
                    <div class="ppl_post_body q-mb-xl q-pb-md">
                        <q-markdown>{{ naskahs[0].Body }}</q-markdown>
                    <div v-if="naskahs[0].Player" class="ppl_post_attachment q-pb-lg">
                        <q-btn v-if="!seamless" color="primary" icon="fa fa-play" label="Play music" class="full-width text-lowercase" id="ppl_playbottom" @click="playMusic"/>
                        <q-btn v-if="seamless" color="primary" icon="fa fa-window-close" label="Close music" class="full-width text-lowercase"  @click="playMusic"/>
                    </div>

                        <div class="ppl_share flex flex-center q-pt-lg">
                            <div class="float-left q-pr-sm">Share on</div>
                            <ShareNetwork network="twitter" :url="`https://peoplereunite.us/post/` + naskahs[0].slug" :title="naskahs[0].Judul" hashtags="peoplereunite">
                                <i class="fab fah fa-lg fa-twitter text-black"></i>
                            </ShareNetwork>
                            <ShareNetwork network="facebook" :url="`https://peoplereunite.us/post/` + naskahs[0].slug" :title="naskahs[0].Judul" hashtags="peoplereunite">
                                <i class="fab fah fa-lg fa-facebook text-black q-px-sm"></i>
                            </ShareNetwork>
                            <ShareNetwork network="telegram" :url="`https://peoplereunite.us/post/` + naskahs[0].slug" :title="naskahs[0].Judul" hashtags="peoplereunite">
                                <i class="fab fah fa-lg fa-telegram text-black"></i>
                            </ShareNetwork>
                        </div>                    
                    </div>
                    <!-- <Adsense
                        data-ad-client="ca-pub-3292103525202109"
                        data-ad-slot="1234567890">
                    </Adsense> -->
                </div>
                <div class="ppl_post_player">
                    <q-dialog v-if="$q.platform.is.mobile" v-model="seamless" seamless no-refocus position="top">
                        <q-card style="width: 550px;" class="bg-transparent" flat>
                            <q-card-section class="q-pa-none">
                                <q-linear-progress dark indeterminate color="dark" />
                                <q-markdown class="bg-dark">{{ naskahs[0].Player}}</q-markdown>
                                <q-btn class="bg-black text-white ppl_post_player_close" icon="close" v-close-popup/>
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                    <q-dialog v-if="$q.platform.is.desktop" v-model="seamless" seamless no-refocus position="right">
                        <q-card style="width: 550px;" class="bg-transparent" flat>
                            <q-card-section class="q-pa-none">
                                <!-- <q-linear-progress dark indeterminate color="dark" /> -->
                                <q-markdown class="bg-dark">{{ naskahs[0].Player}}</q-markdown>
                                <q-btn class="bg-black text-white ppl_post_player_close" icon="close" v-close-popup/>
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </div>
                <q-dialog v-model="confirm">
                    <q-card>
                        <q-card-section class="row items-center q-pt-lg q-px-lg">
                            <span class="q-ml-none q-pb-sm">Artikel ini pernah diterbitkan di <span class="text-bold">{{ naskahs[0].Kanal }}</span> </span>
                            <span style="word-break: break-all;">{{ naskahs[0].KanalUrl }}</span>
                        </q-card-section>
                        <q-card-actions align="right" class="q-pr-md q-pb-md">
                            <q-btn label="Lanjutkan Baca" color="primary" v-close-popup />
                        </q-card-actions>
                    </q-card>
                </q-dialog>    
            </div>
            <div v-if="!seamless">
                    <LatestPost />
                    <Kontribusi v-if="$q.platform.is.mobile" />
            </div>
        </template>
    </q-page>
</template>

<script>
import LatestPost from 'components/LatestPost';
import Kontribusi from 'components/Kontribusi';

import gql from 'graphql-tag'
import { date } from 'quasar'


export default {
    name: 'PostPage',
    components: {
        LatestPost,
        Kontribusi
    },

    meta() {
        return {
            title: this.metaTitle,
            meta: {
                description: { name: 'description', content: this.metaDesc },
                keywords: { name: 'keywords', content: this.metaKeywords },
                ogTitle: { property: 'og:title', content: this.metaTitle },
                ogDescription: { property: 'og:description', content: this.metaDesc },
                ogImage: { property: 'og:image', content: this.metaImage },
                ogUrl: { property: 'og:url', content: this.metaUrl },
                ogType: { property: 'og:type', content: "website" },
                ogAppId: { property: 'fb:app_id', content: '1238781586591702' },
                twitterCard: { property: 'twitter:card', content: "summary_large_image" },
                twitterUrl: { property: 'twitter:url', content: this.metaUrl },
                twitterTitle: { property: 'twitter:title', content: this.metaTitle },
                twitterDescription: { property: 'twitter:description', content: this.metaDesc },
                twitterImage: { property: 'twitter:image', content: this.metaImage },
            },
        }
    },
    computed: {
        metaTitle() {
            return this.naskahs[0].Judul
        },
        metaDesc() {
            return this.naskahs[0].MetaDescription
        },
        metaKeywords() {
            return this.naskahs[0].Keywords
        },
        metaUrl() {
            return `https://peoplereunite.us/post/` + this.naskahs[0].slug
        },
        metaImage() {
            return `https://api.peoplereunite.id` + this.naskahs[0].Cover.url
        }
    },
    methods: {
        playMusic() {
            this.seamless = !this.seamless;
        },
    },
    data() {
        return {
            seamless: null,
            confirm: false,
            tanggalPublikasi: '',
            naskahs: [{
                Judul: '',
                id: '',
                Subjudul: [],
                slug: [],
                Cover: {
                    url: ''
                },
                Kategori: [],
                kontributors: [{
                    Nama: ''
                }],
                Published: [],
                Body: '',
                Kanal: '',
                KanalUrl: [],
                Credit: [],
                Player: [],
                MetaDescription: [],
                Keywords: [],
            }],
        }
    },
    apollo: {
        naskahs: {
            query: gql `
        query getNaskah($slug: String!) {
          naskahs(where: {slug: $slug}) {
            id
            Judul
            Subjudul
            slug
            Cover {
              url
            }
            Kategori {
              Judul
            }
            kontributors {
              Nama
            }
            Published
            Body
            Kanal
            KanalUrl
            Credit
            Player
            MetaDescription
            Keywords
          }
        }      
      `,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    },
    filters: {
        tanggalPublikasi: function(value) {
            return date.formatDate(value, 'D MMM YYYY');
        }
    },
    // beforeMount() {
    //     console.log('before mount')

    // },
    // mounted() {
    //     console.log('mounted')
    // },
    beforeUpdate() {
        //        console.log('before update')
        this.$q.loadingBar.start()

    },
    updated() {
        this.$q.loadingBar.stop()
        //        console.log('updated')
    }
}
</script>

<style>
.ppl_kanal .col {
    padding: 0px !important;
}
</style>