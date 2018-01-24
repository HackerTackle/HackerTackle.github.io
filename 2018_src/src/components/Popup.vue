<template>
    <transition name="popup">
        <div class="popup" @click="closePopup">
            <!-- PRESENTATION POPUP -->
            <div class="presentation-detail" v-if="popupType == 1" @click.stop="">
                <h1>{{ presentation.presentation_name }}</h1>
                <div v-if="presentation.presentation_info" class="presentation-info">
                    <p v-for="s in presentation.presentation_info.split('\n')">{{ s }}</p>
                </div>
                <i @click="closePopup" class="popup-close"></i>
            </div>
            <!-- PRESENTER POPUP -->
            <div class="presenter-detail" v-else @click.stop="">
                <div class="popup-header">
                    <img :src="presentation.img" :alt="presentation.presenter_name">
                    <h1>{{ presentation.presenter_name }}</h1>
                    <ul class="presenter-links">
                        <li v-for="(value, key) in presentation.links" class="icon" :class="key"><a :href="value" target="_blank">{{ key }}</a></li>
                    </ul>
                </div>
                <div v-if="presentation.presenter_info" class="presenter-info">
                    <p v-for="s in presentation.presenter_info.split('\n')">{{ s }}</p>
                </div>
                <i @click="closePopup" class="popup-close"></i>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'popup',
    props: ['presentation', 'popup', 'popupType'],
    methods: {
        closePopup() {
            this.popup = false;
            this.$emit('popupWasClosed', this.popup);
        }
    }
}
</script>
