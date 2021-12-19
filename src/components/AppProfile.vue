<template>
  <div :id="compornentId">
    Profileです
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
import { prefixCompornentId, keyProfile } from '../plugins/feald'
export default {
  name: 'AppProfile',
  data() {
    return {
      compornentId: prefixCompornentId + keyProfile,
    }
  },
}
</script>
