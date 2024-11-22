<template>
<v-timeline align="start" :direction="timelineDirection">
    <v-timeline-item
    v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        :size="year.size"
    >
    <template v-slot:opposite>
        <div
        :class="`pt-1 headline font-weight-bold text-${year.color}`"
        v-text="year.year"
        ></div>
    </template>
    <div>
        <h4 v-if="year.size=='small'" :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
            <strong>
                {{ year.title }}
            </strong>
        </h4>
        <h3 v-else :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
            <strong>
                {{ year.title }}
            </strong>
            <br>
            <strong>
                {{ year.subtitle}}
            </strong>
        </h3>
        <div>
            {{ year.desc }}
        </div>

        <v-dialog max-width="500" v-if="i==0">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                    v-bind="activatorProps"
                    color="cyan"
                    text="Detail"
                    variant="outlined"
                ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="">
                <v-card-text>
                    <div v-for="(curriculum, i) in curriculumData" :key="i" style="margin-bottom: 8px;">
                        <strong>{{ curriculum.title }}</strong><br>
                            {{ curriculum.data[0] }}<br>
                            {{ curriculum.data[1] }}
                        <hr>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Close"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
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
                    year: '2021.2 - 2021.5',
                    title: 'IoT System Embedded Boot Camp',
                    size: 'small',
                    desc: ''
                },
                {
                    color: 'green',
                    year: '2021.6',
                    title: 'KAON BROADBAND',
                    subtitle : 'DOCSIS TEAM',
                    size: 'large',
                    desc: 'Development of network service and management program based on DOCSIS cable network'
                },
                {
                    color: 'pink',
                    year: '2021.8',
                    title: 'College graduation',
                    size: 'small',
                    desc: 'Graduated from college while working'
                },
                {
                    color: 'amber',
                    year: '2024.1 ~ TODAY',
                    title: 'KAON BROADBAND',
                    subtitle : 'PLATFORM TEAM',
                    size: 'large',
                    desc: 'Development of advanced projects and development of Kaon Broadband own technology platform'
                },
            ],
            timelineDirection: 'horizontal',
            curriculumData: [
                {
                    title: '1. Embedded system programming',
                    data: [
                        'Goal: Acquire high-performance, small program development skills embedded in IoT objects',
                        'Content: C language based on Ubuntu Linux Basic programming skills training (beginner)'
                    ]
                },
                {
                    title: '2. Algorithm design',
                    data: [
                        'Goal: Program for efficient energy management, Acquire algorithm design skills',
                        'Content: Improving C language utilization ability and data structure, Ability to design algorithms such as tree search'
                    ]
                },
                {
                    title: '3. Low-power communication interface',
                    data: [
                        'Goal: Communication protocol and low-power MCU Utilization practice',
                        'Contents: Using 1 set of ingredients per person, Hardware production and firmware implementation practice'
                    ]
                },
                {
                    title: '4. Internet of Things Communication',
                    data: [
                        'Goal: The basics of Internet of Things communication, TCP, UDP communication programming practice',
                        'Content: Multithreading based on Ubuntu Linux, Server programming, mutual exclusion implementation'
                    ]
                },
                {
                    title: '5. IoT Cloud Server',
                    data: [
                        'Goal: Use the C language and IoT firmware learned earlier, Server programming project for communication',
                        'Contents: Propose free ideas and, Project progress and results announcement'
                    ]
                },
                {
                    title: '6. Object-oriented programming',
                    data: [
                        'Goal: Object-oriented programming through Java language, basic education',
                        'Content: The most widely used language along with C language, Acquire Java language utilization skills (beginner)'
                    ]
                },
                {
                    title: '7. Utilization of smartphone development platform',
                    data: [
                        'Goal: Use the Java language learned earlier, Conducted Android app development technology training',
                        'Content: Internet of Things user interface, Most used smartphone platforms'
                    ]
                },
                {
                    title: '8. Prototype development',
                    data: [
                        'Goal: Everything learned during this training course, A comprehensive team project',
                        'Content: Successful commercialization over two weeks, IoT product-level development practice'
                    ]
                }
            ],
            show: false
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