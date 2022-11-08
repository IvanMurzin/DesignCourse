<template>
    <div class="search_rect">
        <h2 class="search_text">
            <slot />
        </h2>
        <img class="search_icon" src="@/assets/search.svg" alt="" />
    </div>
</template>

<style lang="scss" scoped>
.search_rect {
    position: relative;
    width: 100%;
    height: 6em;
    margin-top: 8em;
    border: 2px solid black;
    background: white;
}

.search_text {
    position: absolute;
    top: -5%;
    left: 0.8em;
    font-size: 3em;
    color: black;
    font-weight: 600;
    margin: 0.3em 0 0.2em;

    @media screen and (max-width: 1400px) {
        top: 0;
        font-size: 2.8em;
    }

    @media screen and (max-width: 1160px) {
        top: 5%;
        font-size: 2.5em;
    }

    @media screen and (max-width: 600px) {
        top: 18%;
        font-size: 1.8em;
    }
}

.search_icon {
    position: absolute;
    height: 50%;
    top: 25%;
    right: 0.8em;
}
</style>
