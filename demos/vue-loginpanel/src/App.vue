<template>
    <ext-container
      v-on:ready="viewReady($event)"
      padding="10"
      platformConfig='{ "desktop": { "maxWidth": "400" } }'
    >
      <ext-formpanel
        extname="formpanel"
        padding="10"
        shadow="true"
        margin="0 0 20 0"
        title="Login"
      >
        <ext-emailfield
          extname="email"
          label="Email"
          required=true
          validators="email"
        >
        </ext-emailfield>
        <ext-passwordfield
          extname="password"
          label="Password"
          required=true
          revealable="true"
        >
        </ext-passwordfield>
        <ext-toolbar docked="bottom">
          <ext-spacer></ext-spacer>
          <ext-button text="Get Started" v-on:tap="signin($event)"></ext-button>
        </ext-toolbar>
      </ext-formpanel>
    </ext-container>
</template>

<script>

export default {
  name: 'App',
  created () {
    console.log('created')
  },
  updated () {
    console.log('updated')
  },
  methods: {

    extnameToProperty (cmpObj) {
      for (var prop in cmpObj) {
          this[prop] = cmpObj[prop];
      }
    },

    viewReady (event) {
      console.log('viewReady')
      var cmpObj = event.detail.cmpObj;
      console.log(cmpObj)
      this.extnameToProperty(cmpObj);
    },

    signin (event) {

      if (this.formpanel.isValid() == true) {
        console.log('form is valid')
        console.log(this['email'].getValue())
        console.log(this.password.getValue())
      }
      else {
        Ext.Msg.alert('Error', 'Form is not valid');
      }
    }

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
