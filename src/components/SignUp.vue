<template>
  <div class="signup">
    <p> Sign up to start budgeting! </p>
    <input
      v-model="email"
      type="text"
      placeholder="Email"
    ><br>
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    ><br>
    <button @click="signup">Sign up</button><br>
    <span>already have an account? <router-link to="/login"> Go back </router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      firebase.auth()
        .createUserAndRetrieveDataWithEmailAndPassword(
          this.email,
          this.password,
        ).then(
          (err) => {
            alert(err.message);
          },
        );
    },
  },
};
</script>


<style scoped>
  .signup {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    cursor: pointer;
    width: 15%;
    padding: 10px;
    background-color: #41b883;
    margin-top: 15px;
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>

