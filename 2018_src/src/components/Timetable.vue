<template>
<section id="timetable-speakers">
    <div class="timetable-speakers">
        <h2 class="title">TIMETABLE &amp; SPEAKERS</h2>
        <p class="sub-title">{{ $t("timetable.reg_time") }}　10:00-10:30</p>
        <div id="timetable_app">
            <ul class="timetable">
                <li v-for="presentation of $t('presentations')">
                    <div class="presentation" @click="pop(presentation.id, 1)">
                        <strong>{{presentation.presentation_name}}</strong>
                        <span>{{presentation.time}}</span>
                    </div>
                    <div class="presenter" @click="pop(presentation.id, 2)">
                        <img :src="presentation.img">
                        <p>
                            <span v-if="presentation.company" class="company">{{presentation.company}}</span>
                            <span>{{presentation.presenter_name}}</span>
                        </p>
                    </div>
                </li>
                <li>
                    <div class="event">
                        <strong>{{ $t("timetable.beer_bash") }}</strong>
                        <span>18:40 - 21:00</span>
                    </div>
                </li>
            </ul>
            <Popup v-if="popup" :presentation="$t('presentations')[ind]" :popup="popup" :popupType="popupType" @popupWasClosed="popup = $event"></Popup>
            <!-- <a href="static/pdf/2018timetable.pdf" target="_blank" class="pdf-download-btn">{{ $t("pdf_download") }}</a> -->
        </div>
        <a class="apply-btn" href="https://hakat.connpass.com/event/76855" target="_blank">{{ $t("btn") }}</a>

        <h3 class="sub-title">SPONSORS</h3>

        <ul class="sponsor-list">
            <li class="sponsor-line"><a href="https://linecorp.com/" target="_blank"><img src="static/images/line.png" alt="LINE"></a></li>
            <li class="sponsor-mozilla"><a href="https://www.mozilla.org/" target="_blank"><img src="static/images/moz-logo-bw-rgb.png" alt="Mozilla"></a></li>
            <li class="sponsor-ulsystems"><a href="https://www.ulsystems.co.jp/" target="_blank"><img src="static/images/ul-logo.png" alt="Ulsystems"></a></li>
        </ul>
    </div>
</section>
</template>

<script>
import Popup from './Popup'

export default {
    name: 'timetable',
    components: {
        Popup
    },
    data() {
    	return {
	        popup: false,
	        ind: 1
	    }
	},
	methods: {
		pop(index, popupType) {
			this.ind = index;
			this.popup = true;
			this.popupType = popupType;
		}
	}
}
</script>
