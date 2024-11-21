<template>
    <v-card
        class="mx-auto"
        max-width="500"
    >
        <v-hover v-slot="{ isHovering, props }">
            <v-img
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 12 : 2"
            v-bind="props"
                :src="items[0].img"
                height="225px"
                cover
            >
                <div class="center-btn">
                    <!-- <v-btn
                        :class="[{ 'show-btns': isHovering }]"
                        :color="transparent"
                        :icon="icons[0]"
                        variant="text"
                    ></v-btn> -->
                    <v-dialog max-width="1000">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn
                                v-bind="activatorProps"
                                text="Open Dialog"
                                :class="[{ 'show-btns': isHovering }]"
                                :color="transparent"
                                :icon="icons[0]"
                                variant="text"
                            ></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card title="Quantum WIDE">
                                <v-card-text>
                                        <v-row>
                                            <v-col
                                            v-for="(list, index) in imglist"
                                            :key="index"
                                            class="d-flex child-flex"
                                            cols="6"
                                            >
                                            <v-img
                                                :src="list.img"
                                                aspect-ratio="1"
                                                class="bg-grey-lighten-2"
                                                
                                            >
                                                <template v-slot:placeholder>
                                                <v-row
                                                    align="center"
                                                    class="fill-height ma-0"
                                                    justify="center"
                                                >
                                                    <v-progress-circular
                                                    color="grey-lighten-5"
                                                    indeterminate
                                                    ></v-progress-circular>
                                                </v-row>
                                                </template>
                                            </v-img>
                                            </v-col>
                                        </v-row>
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
            </v-img>
        </v-hover>

        <v-card-title>
        {{ "Quantum WIDE" }}
        </v-card-title>

        <v-card-subtitle>
        {{ "..." }}
        </v-card-subtitle>

        <v-card-actions>
        <!-- <v-btn
            color="orange-lighten-2"
            text="Explore"
        ></v-btn> -->

        <v-spacer></v-spacer>

        <!-- <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
        ></v-btn> -->
        </v-card-actions>

        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        icons: ['mdi-plus', 'mdi-play', 'mdi-fast-forward'],
        items: [
            {
                title: 'New Releases',
                text: `It's New Release Friday`,
                subtext: 'Newly released songs.',
                img: ''
            }
        ],
        transparent: 'rgba(255, 255, 255, 0)',
        show: false,
        imglist : [],
        desc : ''
    }),
    mounted () {
        this.items[0].img = this.$images.QT_PC_DASHBOARD_2

        this.imglist = Object.keys(this.$images).filter(key => key.startsWith('QT_'))
            .map(key => ({ name: key, img: this.$images[key] }));
    }
  }
</script>

<style scoped>
    .v-card {
        transition: opacity .4s ease-in-out;
    }

    .v-img.on-hover {
        opacity: 0.6;
    }

    .show-btns {
        color: rgb(1, 1, 1) !important;
    }
    .center-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>