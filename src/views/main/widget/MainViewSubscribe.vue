<script setup lang="ts">
import GradientButton from '@/components/other/GradientButton.vue'

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
    <GradientButton class="join-btn" @click="">
        Подать заявку
    </GradientButton>
</template>

<style lang="scss" scoped>
b {
    font-weight: 600;
}

.subscribe {
    margin-top: 8em;
}

.item_num {
    font-size: 6.5em;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
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

@media screen and (max-width: 900px) {
    .subscribe_text {
        font-size: 2.5em;
        margin: 0 0 0 1em;
    }

    .item_num {
        font-size: 5em;
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
}

.title_info {
    color: black;
    font-weight: 600;
    margin: 0.3em 0 0.2em;
    font-size: 4em;

    @media screen and (max-width: 600px) {
        font-size: 2em;
    }
}

.join-btn {
    font-size: 1.8em;
    display: block;
    margin: 2em auto 1em;
    background: transparent;
}
</style>
