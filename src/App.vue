<template>
  <div class="home">
    <img alt="Vue Logo" src="@/assets/logo.png" id="vue-logo" />
    <div class="title">What I am doing?</div>
    <md-field>
      <label>To do</label>
      <md-input v-model="myTodo"></md-input>
    </md-field>
    <md-button @click="addToDo" class="md-raised md-primary">Add</md-button>
    <div v-if="errors !== ''" id="errors">{{errors}}</div>

    <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
      <div class="title">Todos that need to be done today</div>
      <div v-for="item in this.$store.getters.getItems" :key="item.id">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import { db } from "./main";
export default {
  name: "app",
  beforeCreate: function() {
    this.$store.dispatch("setItems");
  },
  data: () => {
    return {
      myTodo: "",
      errors: ""
    };
  },
  methods: {
    addToDo: function() {
      this.errors = "";

      if (this.myTodo !== "") {
        db.collection("items")
          .add({
            title: this.myTodo,
            createdAt: Date.now()
          })
          .then(response => {
            if (response) {
              this.myTodo = "";
            }
          })
          .catch(error => {
            this.errors = error;
          });
      } else {
        this.errors = "Enter a todo";
      }
    }
  }
};
</script>

<style>
body,
html {
  /* background: #8ac8e5; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.home {
  width: 300px;
  margin: auto;
}

#vue-logo {
  width: 100px;
}

input,
button {
  border: 0;
  width: 100%;
  padding: 7px;
}

input {
  font-size: 12px;
  margin: 0 0 10px;
}

#errors {
  background: red;
  margin: 10px 0;
  padding: 5px;
  color: #fff;
  text-align: left;
}
</style>
