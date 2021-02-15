<template>
    <div :id="code" class="Carousel b-dark">
        <no-ssr>
            <siema class="SlideWrapper"
                   :ref="code" :options="siemaOptions" @init="setAutoplay">
                <slot/>
            </siema>
        </no-ssr>
        <div v-if="displayArrows"
             :class="'Controls w-100 d-flex align-items-center justify-content-between t-'+(controlsColor||'dark')">
            <fa class="Left display-3 pointer"
                :icon="['fas', 'chevron-left']"
                @click="prev"/>
            <fa class="Right display-3 pointer"
                :icon="['fas', 'chevron-right']"
                @click="next"/>
        </div>
    </div>
</template>

<script>

export default {
    name: "Carousel",
    props: {
        code: {
            type: String,
            required: true
        },
        options: Object,
        controlsColor: String,
        autoplayInterval: Number,
        displayArrows: Boolean
    },
    data() {
        return {
            defaultOptions: {
                loop: true,
                duration: 500,
                easing: "ease-in-out"
            }
        }
    },
    computed: {
        siemaOptions() {
            return {...this.defaultOptions, ...this.options};
        }
    },
    methods: {
        next() {
            this.$refs[this.code].next();
        },
        prev() {
            this.$refs[this.code].prev();
        },
        setAutoplay() {
            if (this.autoplayInterval) {
                setTimeout(this.autoplay, this.autoplayInterval);
            }
        },
        autoplay() {
            this.next();
            setTimeout(this.autoplay, this.autoplayInterval);
        }
    }
}
</script>

<style>
.Carousel {
    display: grid;
}

.Carousel .SlideWrapper {
    z-index: 10;
    grid-column: 1;
    grid-row: 1;
}

.Carousel .Controls {
    grid-column: 1;
    grid-row: 1;
}

.Carousel .Controls .Left, .Carousel .Controls .Right {
    z-index: 20;
}
</style>
