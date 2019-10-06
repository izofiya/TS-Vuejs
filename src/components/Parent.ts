import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Parent extends Vue {
    message: string = 'Hey from Parent'

    created() {
        console.log('Parent created');
    }

    clicked() {
        console.log('click from Parent');
    }

    parentClicked() {
        console.log('parent clicked');
    }
}