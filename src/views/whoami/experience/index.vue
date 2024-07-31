<template>
<v-timeline align="start" :direction="timelineDirection">
    <v-timeline-item
    v-for="(year, i) in years"
    :key="i"
    :dot-color="year.color"
    size="small"
    >
    <template v-slot:opposite>
        <div
        :class="`pt-1 headline font-weight-bold text-${year.color}`"
        v-text="year.year"
        ></div>
    </template>
    <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
        Lorem ipsum
        </h2>
        <div>
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </div>
    </div>
    </v-timeline-item>
</v-timeline>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
    setup() {
        const { mobile } = useDisplay()
        return { mobile }
    },
    data() {
        return {
            years: [
                {
                    color: 'cyan',
                    year: '2021.2',
                },
                {
                    color: 'green',
                    year: '2021.6',
                },
                {
                    color: 'pink',
                    year: '2021.8',
                },
                {
                    color: 'amber',
                    year: '2024.1 ~ TODAY',
                },
            ],
            timelineDirection: 'horizontal'
        }
    },
    watch : {
        'mobile' () {
            this.timelineDirection = this.mobile ? 'vertical' : 'horizontal'
        }
    },
    beforeMount() {
        this.timelineDirection = this.mobile ? 'vertical' : 'horizontal'
    },
    mounted() {

    }
}
</script>