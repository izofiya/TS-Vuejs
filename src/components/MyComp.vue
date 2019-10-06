<template>
    <h3 class="message">{{msg}}</h3>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MyComp extends Vue {
    @Prop() private msg: string;
}
</script>
