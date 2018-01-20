<template>
    <transition name="popup">
        <div class="popup" @click="handleClickCloseButton">
            <!-- PRESENTATION POPUP -->
            <div class="presentation-detail" v-if="popupType === popupTypes.PRESENTATION_CONTENTS">
                <h1>{{ presentation.presentation_name }}</h1>
                <p>{{ presentation.presentation_info }}</p>
                <i @click="handleClickCloseButton" class="popup-close"></i>
            </div>
            <!-- PRESENTER POPUP -->
            <div class="presenter-detail" v-else-if="popupType === popupTypes.PRESENTATION_PRESENTER">
                <div class="popup-header">
                    <img :src="presentation.img" :alt="presentation.presenter_name">
                    <h1>{{ presentation.presenter_name }}</h1>
                    <ul class="presenter-links">
                        <li v-for="(value, key) in presentation.links" class="icon" :class="key"><a :href="value" target="_blank">{{ key }}</a></li>
                    </ul>
                </div>
                <p v-if="presentation.presenter_info">{{ presentation.presenter_info }}</p>
                <i @click="handleClickCloseButton" class="popup-close"></i>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'popup',
    props: [
      'presentation',
      'popupType',
      'popupTypes',
    ],
    methods: {
        handleClickCloseButton: function () {
            this.$emit('click:closeButton');
        },
    },
}
</script>
