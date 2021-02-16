<script>
  export let principal;
</script>

<label for='principal'>Principal</label>
<input id='principal' type='number' min=0 bind:value={principal} required />
