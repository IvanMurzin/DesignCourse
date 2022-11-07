<script setup lang="ts"></script>

<template>
    <footer>
        <img src="@/assets/logo/design_logo.svg" style="width: 6%; margin-bottom: 2em;" alt="design logo" />
        <p class="footer_text" style="grid-area: a; text-decoration: underline;">По всем вопросам писать:</p>
        <div>
            <a class="footer_item" style="grid-area: c;text-decoration:none;" href="https://t.me/mdportnov">
                <img src="@/assets/logo/tg_logo.svg" style="width: 120%" alt="mail logo" />
                <p class="footer_text">@mdportnov</p>
            </a>
            <a class="footer_item" style="grid-area: b;text-decoration:none;" href="https://t.me/ohssova">
                <img src="@/assets/logo/tg_logo.svg" style="width: 120%;" alt="telegram logo" />
                <p class="footer_text">@ohssova</p>
            </a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    margin: 8em 0 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer_text {
        margin: 0 0 0 0.5em;
        font-size: 1.6em;
        font-weight: 600;
    }

    .footer_item {
        display: grid;
        grid-template-columns: 1.4em auto;
        gap: 0.8em;
        margin-top: 2em;
        align-items: center;
        color: #000;
    }
}
</style>
