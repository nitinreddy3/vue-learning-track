<template>
  <div class="home">
    <img alt="Vue Logo" src="@/assets/logo.png" id="vue-logo" />
    <div class="title">What I am doing?</div>
    <input v-model="myTodo" />
    <button @click="addToDo">Add</button>
    <div v-if="errors !== ''" id="errors">
      {{errors}}
    </div>
  </div>
</template>

<script>
  import { db } from '@/main';
export default {
  name: "app",
  data: () => {
    return {
      myTodo: '',
      errors: ''
    };
  },
  methods: {
    addToDo: function(){
      this.errors = '';

      if(this.myTodo !== '') {
        db.collection('items').add({
          title: this.myTodo,
          createdAt: Date.now()
        }).then(response => {
          if(response) {
            this.myTodo = ''
          }
        }).catch(error => {
          this.errors = error;
        })
      } else {
        this.errors = 'Enter a todo';
      }
    }
  }
};
</script>

<style>
body,
html {
  background: #8ac8e5;
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

button {
  background: #000;
  color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
#errors {
  background:  red;
  margin: 10px 0;
  padding: 5px;
  color: #fff;
  text-align: left;
}
</style>
