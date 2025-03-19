<script setup>
import CrudView from "./view/CrudView_update.vue";
import SignUpView from "./view/SignUpView.vue";
import LoginView from "./view/LoginView.vue";
import LogoutButton from "./components/LogoutButton.vue";
import bootEx from "./components/bootEx.vue";
import dateEx from "./components/dateEx.vue";
</script>

<template>
  <bootEx />
  <dateEx />
  <CrudView />
  <SignUpView />
  <LoginView />
  <LogoutButton />
</template>

<style scoped></style>
