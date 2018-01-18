<template>
<div id="app">
    <nav id="nav_app">
        <div class="nav-top">
            <h1><a href="./" class="nav-title"><img src="static/images/nav-title.png" alt="HACKER TACKLE"></a></h1>
            <ul>
                <li class="nav-link"><a href="#concept">CONCEPT</a></li>
                <li class="nav-link"><a href="#timetable-speakers">TIMETABLE &amp; SPEAKERS</a></li>
                <li class="nav-lang-select">
                    <select v-model="$i18n.locale">
                        <option selected value="JA">JA</option> 
                        <option value="EN">EN</option>
                    </select>
                </li>
                <li class="nav-lang-select-sp" @click="switchLang">
                    <p>{{ $i18n.locale }}</p>
                </li>
            </ul>
        </div>
    </nav>

    <header>
        <p class="header-subtitle">{{ $t("header.subtitle") }}</p>
        <h1 class="header-title">{{ $t("header.title") }}</h1>
        <p class="header-date">2018.02.17</p>
        <p class="header-time">10:30-21:30 (OPEN 10:00)</p>
        <p class="header-place">ACCESS: {{ $t("access") }}</p>
        <a class="apply-btn" href="#" target="_blank">{{ $t("btn") }}</a>
    </header>

    <section id="concept">
        <div class="concept">
            <h2 class="title">CONCEPT</h2>
            <p>{{ $t("concept.main_text") }}</p>
            <p>{{ $t("concept.sub_text") }}</p>
        </div>
    </section>

    <Timetable></Timetable>

    <section class="map-container">
        <div id="map"></div>
        <div class="map-overlay"><div class="map-overlay-inner">
            <h2 class="title">ACCESS</h2>
            <h3 class="map-overlay-title">{{ $t("access") }}</h3>
            <p><strong>{{ $t("map.address") }}</strong></p>
            <p>{{ $t("map.directions") }}</p>
            <a href="https://goo.gl/maps/4U66r3saUvr" target="_blank" class="map-overlay-btn"><strong>{{ $t("map.btn") }}</strong></a>
        </div></div>
    </section>

    <footer><small>© 2018 {{ $t("footer.organizer") }}</small></footer>

    <a href="#" class="sp-apply-btn" target="_blank"><strong>{{ $t("btn") }}</strong></a>
</div>
</template>

<script>
import Timetable from './components/Timetable'

export default {
    name: 'app',
    components: {
        Timetable
    },
    methods: {
        switchLang() {
            if (this.$i18n.locale === 'JA') {
                return this.$i18n.locale = 'EN'
            } else {
                return this.$i18n.locale = 'JA'
            }
        }
    }
}
</script>
