<script setup lang="ts">
import DynamicButtonLarge from '@/components/other/DynamicButtonLarge.vue'

</script>
<template>
    <div class="subscribe">
        <h2 class="title_info">Записывайся!</h2>
        <div class="subscribe_item">
            <div class="item_num">1.</div>
            <p class="subscribe_text">
                <b>Зарегистрируйся</b> в системе курсов
            </p>
        </div>
        <div class="subscribe_item">
            <div class="item_num">2.</div>
            <p class="subscribe_text">
                <b>Заполни</b> анкету в личном кабинете
            </p>
        </div>
        <div class="subscribe_item">
            <div class="item_num">3.</div>
            <p class="subscribe_text">
                <b>Жди</b> конца отбора и обратной связи от нас!
            </p>
        </div>
    </div>
    <DynamicButtonLarge class="join-btn" @click="">
        Подать заявку
    </DynamicButtonLarge>
</template>

<style lang="scss" scoped>
.subscribe {
    margin-top: 8em;
}

.join-btn {
    font-size: 2.2em;
    display: block;
    margin: 2em auto 1em;
    background: white;
    width: 300px;
    height: 80px;
}

.item_num {
    font-size: 6.5em;
    color: transparent;
    font-family: "Roboto";
    -webkit-text-stroke: 2px #000;
}

.subscribe_item {
    display: grid;
    align-items: center;
    margin-top: 1em;
    grid-template-columns: 3.5em 1fr;
}

.subscribe_text {
    margin: 0 0 0 2em;
    color: black;
    font-weight: 400;
    font-size: 3em;
}

@media screen and (max-width: 1300px) {
    .subscribe_text {
        font-size: 3em;
    }

    .item_num {
        font-size: 5em;
    }
}

@media screen and (max-width: 900px) {
    .subscribe_text {
        font-size: 2.5em;
        margin: 0 0 0 1em;
    }

    .item_num {
        font-size: 5em;
    }

    .join-btn {
        font-size: 2.2em;
        width: 250px;
        height: 60px;
    }
}

@media screen and (max-width: 600px) {
    .subscribe_text {
        font-size: 2em;
        margin: 0 0 0 0.5em;
    }

    .item_num {
        font-size: 3em;
    }

    .join-btn {
        font-size: 2em;
        width: 200px;
        height: 50px;
    }
}

.title_info {
    color: black;
    font-weight: 600;
    margin: 0.3em 0 0.2em;
    font-size: 3.8em;

    @media screen and (max-width: 600px) {
        font-size: 2em;
    }
}
</style>
