<template>
  <div :id="compornentId">
    Contactです
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
import { prefixCompornentId, keyContact } from '../plugins/feald'
export default {
  name: 'AppContact',
  data() {
    return {
      compornentId: prefixCompornentId + keyContact,
    }
  },
}
</script>
