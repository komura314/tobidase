<template>
  <v-treeview
    :items="skills"
    :open="initiallyOpen"
    item-key="name"
    open-on-click
    transition
  >
    <template #prepend="{ item }">
      <v-icon>
        {{ files[item.file] }}
      </v-icon>
    </template>
    <template #label="{ item }">
      <v-tooltip v-if="item.star" bottom>
        <template #activator="{ on, attrs }">
          <v-row justify="center" align="center" v-bind="attrs" v-on="on">
            <v-col>{{ item.name }}</v-col>
            <v-spacer />
            <v-col>
              <v-rating
                color="orange darken-1"
                length="3"
                readonly
                :value="item.star"
              />
            </v-col>
          </v-row>
        </template>
        <span>{{ tooltip[item.star] }}</span>
      </v-tooltip>
      <v-col v-else>
        {{ item.name }}
      </v-col>
    </template>
  </v-treeview>
</template>
<script>
export default {
  data: () => ({
    initiallyOpen: ['FrontEnd'],
    tooltip: ['', '★：勉強中', '★★：経験あり', '★★★：自信あり'],
    files: {
      front: 'mdi-monitor',
      js: 'mdi-language-javascript',
      ts: 'mdi-language-typescript',
      css: 'mdi-language-css3',
      vue: 'mdi-vuejs',
      nuxt: 'mdi-nuxt',
      vuetify: 'mdi-vuetify',
      back: 'mdi-server',
      python: 'mdi-language-python',
      cloud: 'mdi-cloud',
      gcp: 'mdi-google-cloud',
      database: 'mdi-database',
      md: 'mdi-language-markdown',
      folder: 'mdi-folder',
      docker: 'mdi-docker',
      swift: 'mdi-language-swift',
      xd: 'mdi-alpha-x-box',
      asp: 'mdi-alpha-a-box',
    },
    skills: [
      {
        name: 'FrontEnd',
        star: null,
        file: 'front',
        children: [
          { name: 'JavaScript', star: 3, file: 'js' },
          { name: 'TypeScript', star: 1, file: 'ts' },
          { name: 'CSS', star: 2, file: 'css' },
          { name: 'Vue.js', star: 3, file: 'vue' },
          { name: 'Nuxt.js', star: 3, file: 'nuxt' },
          { name: 'Vuetify', star: 3, file: 'vuetify' },
        ],
      },
      {
        name: 'BackEnd',
        star: null,
        file: 'back',
        children: [
          { name: 'Python', star: 3, file: 'python' },
          { name: 'Django', star: 2, file: 'python' },
          { name: 'DRF', star: 3, file: 'python' },
          { name: 'SQL Server', star: 3, file: 'database' },
          { name: 'mySQL', star: 2, file: 'database' },
        ],
      },
      {
        name: 'Other',
        star: null,
        file: 'folder',
        children: [
          { name: 'GCP', star: 2, file: 'gcp' },
          { name: 'Docker', star: 2, file: 'docker' },
          { name: 'Swift', star: 1, file: 'swift' },
          { name: 'Markdown', star: 3, file: 'md' },
          { name: 'Adobe XD', star: 2, file: 'xd' },
          { name: 'Classic ASP', star: 3, file: 'asp' },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>
