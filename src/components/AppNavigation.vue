<template>
  <nav class="side-navigation" @transitionend="onTransitionEnd">
    <template v-if="authenticated">
      <div class="navigation-category">
        <NavigationCategoryTitle :name="$t('control')" />
        <NavigationLink :name="$t('bots')" icon="users" :to="{ name: 'bots' }" />
        <NavigationLink :name="$t('commands')" icon="laptop" :to="{ name: 'commands' }" />
        <NavigationLink :name="$t('log')" icon="file-alt" :to="{ name: 'log' }" />
        <NavigationLink :name="$t('releases')" icon="code-branch" :to="{ name: 'releases' }" />
        <NavigationLink :name="$t('plugins')" icon="puzzle-piece" :to="{ name: 'plugins' }" />
      </div>

      <div class="navigation-category">
        <NavigationCategoryTitle :name="$t('configuration')" />
        <NavigationLink :name="$t('ui-configuration')" icon="wrench" :to="{ name: 'ui-configuration' }" />
        <NavigationLink :name="$t('global-config')" icon="edit" :to="{ name: 'global-config' }" />
      </div>

      <div class="navigation-category navigation-category--pull-bottom">
        <NavigationCategoryTitle :name="$t('statistics')" />
        <NavigationBots ref="bots" />
        <NavigationStatistics />
      </div>
    </template>

    <template v-else>
      <div class="navigation-category">
        <NavigationCategoryTitle :name="$t('configuration')" />
        <NavigationLink :name="$t('setup')" icon="wrench" :to="{ name: 'setup' }" />
      </div>
    </template>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';
  import NavigationLink from './NavigationLink.vue';
  import NavigationCategoryTitle from './NavigationCategoryTitle.vue';
  import NavigationBots from './NavigationBots.vue';
  import NavigationStatistics from './NavigationStatistics.vue';

  export default {
    name: 'AppNavigation',
    components: {
      NavigationLink, NavigationCategoryTitle, NavigationStatistics, NavigationBots,
    },
    computed: mapGetters({
      authenticated: 'auth/authenticated',
      smallNavigation: 'layout/smallNavigation',
    }),
    watch: {
      smallNavigation: {
        handler(value) {
          this.onTransitionStart();
        },
      },
    },
    methods: {
      onTransitionStart() {
        if (!this.$refs.bots) return;
        this.$refs.bots.onTransitionStart();
      },
      onTransitionEnd() {
        if (!this.$refs.bots) return;
        this.$refs.bots.onTransitionEnd();
      },
    },
  };
</script>

<style lang="scss">
  .side-navigation {
    background: var(--color-navigation);
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    overflow: hidden;
    padding-top: var(--navigation-height);
    position: fixed;
    top: 0;
    transition: ease-in-out width .3s;
    width: var(--navigation-width);
    z-index: 1001;

    .app--small-navigation & {
      overflow: initial;
    }

    .app--boxed-layout & {
      @media screen and (min-width: 1250px) {
        position: absolute;
      }
    }
  }

  .navigation-category--pull-bottom {
    margin-top: auto;
  }
</style>
