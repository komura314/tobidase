<template>
  <div :id="compornentId">
    Desiredです
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
import { prefixCompornentId, keyDesired } from '../plugins/feald'
export default {
  name: 'AppDesired',
  data() {
    return {
      compornentId: prefixCompornentId + keyDesired,
    }
  },
}
</script>
