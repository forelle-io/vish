<template>
  <nav>
    <ol>
      <li v-for="subMenuItem in navigationSubMenus" :key="subMenuItem.index" class="app-navigation-sub-menu">
        <span class="app-navigation-sub-menu-label">
          {{ subMenuItem.label }}
        </span>
        <ol>
          <li
            v-for="link in subMenuItem.links"
            :key="link.index"
            class="app-navigation-item"
            @click="goToRoute(link.route)"
          >
            <span :class="isThisRouteCurrent(link.route) ? `app-navigation-icon-${link.icon}-active` : `app-navigation-icon-${link.icon}`"></span
            >
            <span :class="{
              'app-navigation-item-link': true,
              'app-navigation-item-link-active': isThisRouteCurrent(link.route)
            }">
              {{ link.label }}
            </span>
          </li>
        </ol>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      navigationSubMenus: [
        {
          index: 1,
          label: "Меню",
          links: [
            { index: 1, label: "Лента", route: "/", icon: "activity" },
            { index: 2, label: "Отчеты", route: "/reports", icon: "reports" },
            {
              index: 3,
              label: "Выезды",
              route: "/departures",
              icon: "departures"
            },
            { index: 4, label: "Водоемы", route: "/ponds", icon: "ponds" },
            {
              index: 5,
              label: "Организации",
              route: "/organizations",
              icon: "organizations"
            },
            { index: 6, label: "Пользователи", route: "/users", icon: "users" }
          ]
        },
        {
          index: 2,
          label: "Настройки",
          links: [
            { index: 1, label: "Профиль", route: "/profile", icon: "settings" }
          ]
        }
      ]
    };
  },
  methods: {
    isThisRouteCurrent (route) {
      return route === this.$route.path
    },
    goToRoute (route) {
      this.$router.push(route)
    }
  }
};
</script>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .app-navigation-sub-menu {
    margin-bottom: 8px;
  }
  .app-navigation-sub-menu-label {
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.02em;
    font-variant: small-caps;
    color: #58627A;
    margin-bottom: 16px;
    display: block;
  }
  .app-navigation-item {
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px;
  }
  .app-navigation-item:hover {
    cursor: pointer;
  }
  .app-navigation-item-link-active {
    color: #0077FF;
  }
</style>
