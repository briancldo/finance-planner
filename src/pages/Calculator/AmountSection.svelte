<script>
  export let amount;
</script>

<label for='amount'>Contribution Amount</label>
<input id='amount' type='number' min=0 bind:value={amount} required />
