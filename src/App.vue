<template>
  <div>
    <nav class="navbar-custom">
      <ul class="navbar-ul">
        <li>
          <button>Log In</button>
        </li>
        <li>
          <button>Sign Up</button>
        </li>
        <li>Name</li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
    <div class="container pt-1" id="addressbook-app">
      <div class="add-box">
        <router-link id="addContactBtn" to="/add" />
      </div>
      <h1 class="text-center" id="title">Address Book</h1>
      <div class="underline" />
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("./css/main.css");
</style>