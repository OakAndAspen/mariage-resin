<template>
    <div :class="'ContentWrapper '+ wrapperClasses">
        <component :is="link ? 'nuxt-link' : 'span'"
                   :to="link ? link : null"
                   class="Container" @click="$emit('click')">
            <div class="Background">
                <img v-if="imgSquare"
                     :src="require('~/assets/img/'+imgSquare)"
                     :class="squareClasses"
                     :alt="alt">
                <img v-if="imgRectangle"
                     :src="require('~/assets/img/'+imgRectangle)"
                     :class="rectangleClasses"
                     :alt="alt">
            </div>
            <div class="Overlay d-flex justify-content-center align-items-center"
                 :style="overlayStyle" @click="$emit('click')">
                <div class="text-center p-4">
                    <slot/>
                </div>
            </div>
        </component>
    </div>
</template>

<script>

export default {
    name: "ContentWrapper",
    props: {
        imgSquare: {
            type: String,
            default: "transparent-square.png"
        },
        imgRectangle: {
            type: String
        },
        link: {
            type: [String, Object],
            default: null
        },
        alt: {
            type: String,
            default: "Image"
        },
        hoverOnly: {
            type: Boolean,
            defaut: false
        },
        veil: {
            type: String,
            defaut: "transparent"
        }
    },
    computed: {
        wrapperClasses() {
            return "col-12 mb-4" + (this.imgRectangle ? "" : " col-md-6");
        },
        squareClasses() {
            return "img-fluid" + (this.imgRectangle ? " d-md-none" : "");
        },
        rectangleClasses() {
            return "img-fluid d-none" + (this.imgRectangle ? " d-md-block" : "");
        },
        overlayStyle() {
            return {
                opacity: this.hoverOnly ? 0 : 1,
                backgroundColor: this.veil
            }
        }
    }
}
</script>

<style>

.ContentWrapper .Container {
    display: grid;
}

.ContentWrapper .Background {
    grid-column: 1;
    grid-row: 1;
}

.ContentWrapper .Overlay {
    grid-column: 1;
    grid-row: 1;
    transition: .5s ease;
}

.ContentWrapper:hover .Overlay {
    opacity: 1 !important;
}

.ContentWrapper > a, .ContentWrapper:hover > a {
    color: inherit;
    text-decoration: none;
}

</style>
