<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent click</button>
    <MyComp msg="It is MyComp"></MyComp>
  </div>
</template>

<script lang="ts">
import Parent from './Parent';
// import Component from 'vue-class-component';
import { Component, Prop, Vue } from 'vue-property-decorator';
import MyComp from './MyComp.vue';

@Component({
  components: {
    MyComp
  }
})
export default class Hello extends Parent {

  created() {
    console.log('child created!');
  }

  clicked() {
    console.log('clicked');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
