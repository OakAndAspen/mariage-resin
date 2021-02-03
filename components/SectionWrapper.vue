<template>
    <div class="SectionWrapper container">
        <div class="row">
            <div class="col-12 col-md-10 mx-auto">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SectionWrapper",
};

</script>

<style>
    .SectionWrapper {
        padding-top: 100px;
        padding-bottom: 100px;
    }
</style>
