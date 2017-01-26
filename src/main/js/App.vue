<template>
  <div id="app">

      <md-toolbar>
        <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">gate<strong>d</strong></h2>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-menu md-size="3" md-align-trigger>
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <span>Профил</span>
            </md-menu-item>

            <md-menu-item>
              <span>Изход</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-toolbar>

      <md-sidenav class="md-left" ref="sidenav">
        <md-toolbar>
          <h2 class="md-title" style="flex: 1">gate<strong>d</strong></h2>
        </md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>monetization_on</md-icon> <span>Плащания</span>
          </md-list-item>
          <md-list-item>
            <md-icon>domain</md-icon> <span>Апартаменти</span>
          </md-list-item>
          <md-list-item>
            <md-icon>location_city</md-icon> <span>Сгради</span>
          </md-list-item>
          <md-list-item>
            <md-icon>settings</md-icon> <span>Настройки</span>
          </md-list-item>
        </md-list>
      </md-sidenav>

  </div>
</template>

<script>
// export default {
//   methods: {
//     toggleLeftSidenav() {
//       this.$refs.leftSidenav.toggle();
//     }
//   }
// };
</script>