<template>
    <header id="Banner" :style="cssVars">
        <div id="BannerVeil" class="d-flex justify-content-center align-items-center h-100">
            <slot/>
        </div>
    </header>
</template>

<script>

export default {
    name: "Banner",
    props: ["background", "veil"],
    mounted() {
        this.height = window.innerHeight;
    },
    data() {
        return {
            height: "700"
        };
    },
    computed: {
        cssVars() {
            let url = require('~/assets/img/' + this.background);
            return {
                '--banner-bg': 'url("' + url + '")',
                '--banner-height': this.height + "px",
                '--banner-veil': this.veil
            }
        }
    }
}
</script>

<style type="scss">
#Banner {
    background-image: var(--banner-bg);
    background-position: center center;
    background-size: cover;
    margin-bottom: 100px;
    height: var(--banner-height);
}

#Banner #BannerVeil {
    background-color: var(--banner-veil);
}
</style>
