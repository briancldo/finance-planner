<script>
  export let contributionFrequency;
</script>

<label for='contributionFrequency'>Contribution Frequency</label>
<select id='contributionFrequency' bind:value={contributionFrequency}>
  <option label='Monthly' value='month' />
  <option label='Quarterly' value='quarter' />
  <option label='Annually' value='year' />
</select>
