<template>
  <div class="login">
    <h3> Sign in </h3>
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
    <Button @click="signIn">Login</Button>
    <p>
      Don't have an account?
      <router-link to="/signup">
        Click here to sign up!
      </router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace('hello');
          },
          (err) => {
            alert(err.message);
          },
        );
    },
  },
};
</script>

<style scoped>
  .login {
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
</style>
