<template>
    <div>
        <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
</template>
<script>
import { AmplifyEventBus } from 'aws-amplify-vue';
export default {
    data(){
        return {
            authConfig:{

            }
        }
    }
}
</script>
