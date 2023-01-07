<template>
    <q-header elevated class="bg-primary text-white">
        <div class="row container">
            <q-toolbar class="col">
                <q-toolbar-title>
                    <q-btn flat to="/" class="text-lowercase">
                        <h1 class="text-h6">
                            <q-icon name="fas fa-podcast" /><span class="q-pl-sm">peoplereunite</span></h1>
                    </q-btn>
    
                    <div class="desktop-only float-right q-pt-md">
                        <q-tabs indicator-color="transparent" dense inline-label class="text-grey" active-color="white">
                            <q-route-tab exact class="text-uppercase" label="Home" to="/" />
                            <q-route-tab exact class="text-uppercase" label="News" to="/news" />
                            <q-route-tab exact class="text-uppercase" label="Review" to="/review" />
                            <q-route-tab exact class="text-uppercase" label="Story" to="/story" />                            
                            <q-route-tab exact class="text-uppercase" label="Essay" to="/essay" />
                            <q-route-tab exact class="text-uppercase" label="About" to="/about" />
                            <!-- <q-route-tab exact class="text-uppercase" label="Subscribe" to="/subscribe" /> -->
                        <q-toggle unchecked-icon="fa fa-times" checked-icon="fa fa-moon" class="desktop-only ppl_darkmode" style="width: 60px" v-model="dark" @input="changeDarkMode" color="dark" id="ppl_darkdesktop"></q-toggle>

                        </q-tabs>
    
                    </div>
    
                    <q-toggle unchecked-icon="fa fa-times" checked-icon="fa fa-moon" class="mobile-only ppl_darkmode" style="width: 60px" v-model="dark" @input="changeDarkMode" color="dark" id="ppl_darkmobile"></q-toggle>
    
                </q-toolbar-title>
            </q-toolbar>
        </div>
    </q-header>
</template>

<script>
export default {
    created() {
        this.dark = this.$q.dark.isActive;
    },
    watch: {
        '$q.dark.isActive' (val) {
            this.dark = val;
        }
    },

    data() {
        return {
            dark: false
        }
    },
    methods: {
        changeDarkMode(value) {
            this.dark = value;
            this.$q.dark.set(value);
        }
    }

}
</script>

<style>

</style>