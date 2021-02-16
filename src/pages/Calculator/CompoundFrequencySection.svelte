<script>
  export let compoundFrequency;
</script>

<label for='compoundFrequency'>Compound Frequency</label>
<select id='compoundFrequency' bind:value={compoundFrequency}>
  <option label='Monthly' value='month' />
  <option label='Quarterly' value='quarter' />
  <option label='Annually' value='year' />
</select>
<br />
