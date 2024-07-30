<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-card subtitle="hi" title="Major Project">
                <v-container
                    class="px-3"
                    fluid
                >
                    <v-row>
                        <v-col cols="12" md="4" sm="4">
                            <kt-project></kt-project>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <kt-project></kt-project>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <kt-project></kt-project>
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

export default {
    components : {
        ktProject
    }
}
</script>