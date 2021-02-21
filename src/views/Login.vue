<template>
  <div class="login">
    <h1 class="login-text">sign in to your account</h1>

    <form @submit.prevent="login">
      <div class="input-container">
        <input
          type="text"
          v-model="username"
          class="input"
          required
          placeholder="peoray"
        />
      </div>

      <div class="input-container">
        <input
          type="password"
          v-model="password"
          class="input"
          required
          placeholder="**************"
        />
      </div>

      <div class="input-container input-container-checkbox">
        <input type="checkbox" id="keep-me" />
        <label for="keep-me">Keep me signed in</label>
      </div>

      <div class="login-btn-container">
        <button type="submit" class="login-btn">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("login");
      if (this.username !== "admin" && this.password !== "1234") {
        alert("incorrect");
        return false;
      }
      localStorage.setItem("user", true);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.login {
  width: 30%;
  margin: 0 auto;
  margin-top: 120px;
}

.login-text {
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2rem;
  font-size: 2.4rem;
}

form {
  margin-top: 3.2rem;
  font-size: 1.6rem;
}

.input-container:not(:nth-child(1)) {
  margin-top: 16px;
}

.input {
  width: 100%;
  padding: 12px 16px;
  background: #f4f4f4;
  font-size: 1.6rem;
  border: none;
}

.input-container-checkbox {
  display: flex;
  align-items: center;
}

.input-container-checkbox input {
  margin-right: 0.8rem;
}

.login-btn-container {
  margin-top: 3.2rem;
}

.login-btn {
  width: 100%;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #fff;
  padding: 12px 16px;
  border: none;
  outline: none;
  background: #746bde;
  cursor: pointer;
}
</style>
