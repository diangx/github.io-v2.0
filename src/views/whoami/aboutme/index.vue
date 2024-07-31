<template>
    <v-list lines="one">
        <v-list-item v-for="a in profileData"
            :key="a"
            :title="a.title"
            :subtitle="a.subtitle"
        ></v-list-item>
    </v-list>
</template>

<script>
export default {
	data() {
		return {
            profileData : [
                {
                    title : 'KIM JIWAN',
                    subtitle : '김 지 완'
                },
                {
                    title : '1996.10.04 / Male',
                    subtitle : 'Made in Korea'
                }
            ]
        }
    }
}
</script>