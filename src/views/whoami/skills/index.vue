<template>
    <v-card-text>
        <span class="subheading">FRONT STACK</span>
        <div class="d-flex justify-center mb-6">
            <v-chip-group column class="justify-center">
                <v-chip v-for="item in frontSkill" :key="item.name">
                    <svg-icon type="mdi" :path="item.icon"/> {{ item.name }}
                </v-chip>
            </v-chip-group>
        </div>

        <span class="subheading">BACK STACK</span>
        <div class="d-flex justify-center mb-6">
            <v-chip-group column>
                <v-chip v-for="item in backSkill" :key="item.name">
                    <svg-icon type="mdi" :path="item.icon"/> {{ item.name }}
                </v-chip>
            </v-chip-group>
        </div>

        <span class="subheading">ENVIRONMENT</span>
        <div class="d-flex justify-center mb-6">
            <v-chip-group column>
                <v-chip v-for="item in envSkill" :key="item.name">
                    <svg-icon type="mdi" :path="item.icon"/> {{ item.name }}
                </v-chip>
            </v-chip-group>
        </div>

        <span class="subheading">CODE & VERSION MANAGEMENT</span>
        <div class="d-flex justify-center mb-6">
            <v-chip-group column>
                <v-chip v-for="item in mgmtSkill" :key="item.name">
                    <svg-icon type="mdi" :path="item.icon"/> {{ item.name }}
                </v-chip>   
            </v-chip-group>
        </div>

        <span class="subheading">ISSUE MANAGEMENT</span>
        <div class="d-flex justify-center mb-6">
            <v-chip-group column>
                <v-chip v-for="item in issueSkill" :key="item.name">
                    <svg-icon type="mdi" :path="item.icon"/> {{ item.name }}
                </v-chip>
            </v-chip-group>
        </div>

        <span class="subheading">NETWORK / WIRELESS CHIP CODE</span>
        <div class="d-flex justify-center mb-6">
            <v-chip-group column>
                <v-chip v-for="item in etcSkill" :key="item.name">
                    <svg-icon type="mdi" :path="item.icon"/> {{ item.name }}
                </v-chip>
            </v-chip-group>
        </div>
    </v-card-text>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { 
    mdiVuejs,mdiNuxt,mdiAlphaL,mdiJquery,
    mdiNodejs,mdiAlphaE,mdiAlphaU,mdiAlphaR,mdiAlphaJ,mdiAlphaS,
    mdiWifi,mdiLinux,
    mdiGit,mdiBitbucket,
    mdiJira,mdiAlphaC,
    mdiDomain,
    mdiDatabase,mdiAlphaV
} from '@mdi/js';

export default {
	components: {
		SvgIcon
	},

	data() {
		return {
            frontSkill: [
                {
                    name: 'VUEJS',
                    icon: mdiVuejs
                },
                {
                    name: 'NUXTJS',
                    icon: mdiNuxt
                },
                {
                    name: 'LUCI',
                    icon: mdiAlphaL
                },
                {
                    name: 'JQUERY',
                    icon: mdiJquery
                },
            ],
            backSkill: [
                {
                    name: 'NODEJS',
                    icon: mdiNodejs
                },
                {
                    name: 'EXPRESS',
                    icon: mdiAlphaE
                },
                {
                    name: 'UBUS',
                    icon: mdiAlphaU
                },
                {
                    name: 'REST-API',
                    icon: mdiAlphaR
                },
                {
                    name: 'JSON-RPC',
                    icon: mdiAlphaJ
                },
                {
                    name: 'LIBWEBSOCKET',
                    icon: mdiAlphaS
                },
                {
                    name: 'MYSQL',
                    icon: mdiDatabase
                },
                {
                    name: 'VUEX',
                    icon: mdiAlphaV
                },
            ],
            envSkill: [
                {
                    name: 'OPENWRT(LINUX)',
                    icon: mdiWifi
                },
                {
                    name: 'GNU/LINUX',
                    icon: mdiLinux
                }
            ],
            mgmtSkill : [
                {
                    name: 'GIT',
                    icon: mdiGit
                },
                {
                    name: 'SVN',
                    icon: mdiAlphaS
                },
                {
                    name: 'BITBUCKET',
                    icon: mdiBitbucket
                },
                {
                    name: 'JENKINS',
                    icon: mdiAlphaJ
                }
            ],
            issueSkill : [
                {
                    name: 'JIRA',
                    icon: mdiJira
                },
                {
                    name: 'CONFLUENCE',
                    icon: mdiAlphaC
                }
            ],
            etcSkill : [
                {
                    name: 'BROADCOM',
                    icon: mdiDomain
                },
                {
                    name: 'QUALCOMM',
                    icon: mdiDomain
                }
            ]
		}
	}
}
</script>