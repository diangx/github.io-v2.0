<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-card>
                <v-card-title class="font-weight-black text-h6 text-md-h5 text-lg-h4">{{ $state ?  "1" : "Who Am I ?"}}</v-card-title>
                <!-- <v-card-text>
                    Body text
                </v-card-text> -->
                <v-container class="px-10" fluid>
                    <v-divider :thickness="5">
                        <div class="font-weight-black text-subtitle-1 text-md-subtitle-1 text-lg-subtitle-2"> {{ $state ?  "1-1" : "ABOUT ME"}} </div>
                    </v-divider>
                    <aboutme-section/>

                    <v-divider :thickness="5">
                        <div class="font-weight-black text-subtitle-1 text-md-subtitle-1 text-lg-subtitle-2"> {{ $state ?  "1-2" : "SKILLS"}} </div>
                    </v-divider>
                    <skills-section/>

                    <v-divider :thickness="5">
                        <div class="font-weight-black text-subtitle-1 text-md-subtitle-1 text-lg-subtitle-2"> {{ $state ?  "1-3" : "EXPERIENCE"}}</div>
                    </v-divider>
                    <experienceSection/>
                </v-container>          
            </v-card>
        <!-- <div class="text-center text-caption">Using Props Only</div> -->
        </v-col>
    </v-row>
</template>

<script>
import aboutmeSection from "./aboutme/index.vue";
import skillsSection from "./skills/index.vue";
import experienceSection from "./experience/index.vue";

export default {
    components : {
        aboutmeSection,
        skillsSection,
        experienceSection
    }
}
</script>