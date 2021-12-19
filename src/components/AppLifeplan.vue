<template>
  <div :id="compornentId">
    Lifeplanです
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { prefixCompornentId, keyLifeplan } from '../plugins/feald'
export default {
  name: 'AppLifeplan',
  data() {
    return {
      compornentId: prefixCompornentId + keyLifeplan,
    }
  },
}
</script>
