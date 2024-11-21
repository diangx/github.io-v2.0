<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-card>
                <v-card-title class="font-weight-black text-h6 text-md-h5 text-lg-h4">{{ "Major Project"}}</v-card-title>
                <v-card-subtitle>{{ "Some of the projects undertaken"}}</v-card-subtitle>
                <v-container
                    class="px-3"
                    fluid
                >
                    <v-row>
                        <v-col cols="12" md="4" sm="4">
                            <kt-project></kt-project>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <qt-project></qt-project>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <sk-project></sk-project>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        <!-- <div class="text-center text-caption">Using Props Only</div> -->
        </v-col>
  </v-row>
</template>

<script>
import ktProject from './kt/index.vue'
import qtProject from './qt/index.vue'
import skProject from './sk/index.vue'

export default {
    components : {
        ktProject,
        qtProject,
        skProject
    }
}
</script>