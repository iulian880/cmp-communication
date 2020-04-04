<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User name: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>

    </div>
</template>

<script>
    import {eventBus} from "@/main"; //importing named exports

    export default {
        props: {
            myName: {
                type: String,
                required: true,
                //default: 'username'
            },

            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                this.myName = 'Petcu'
                this.$emit('nameWasReset', this.myName)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
