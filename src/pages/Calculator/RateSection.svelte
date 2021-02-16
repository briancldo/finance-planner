<script>
  export let rate;
</script>

<label for='rate'>Interest Rate %</label>
<input id='rate' type='number' min=0 max=100 bind:value={rate} required />
