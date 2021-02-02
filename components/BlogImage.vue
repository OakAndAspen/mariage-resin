<template>
    <img :src="imgSrc()" :alt="alt" class="img-fluid my-4"/>
</template>

<script>
export default {
    name: "BlogImage",
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
    methods: {
        imgSrc() {
            try {
                return require("~/assets/img/" + this.src);
            } catch (e) {
                console.log(e);
            }
        }
    }
};
</script>
