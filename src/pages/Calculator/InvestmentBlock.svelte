<script>
  import { calculateInvestment } from '../../utils/interest';
  import PrincipalSection from './PrincipalSection.svelte';
  import AmountSection from './AmountSection.svelte';

// contribution
  let principal;
  let amount;
  let contributionFrequency = 'month';
  let duration;

  // compound
  let rate;
  $: _rate = rate/100;
  let compoundFrequency ='year';

  let result;

  function calculateResult() {
    const contribution = {
      principal,
      frequency: contributionFrequency,
      amount,
      duration,
    };
    const compound = { rate: _rate, frequency: compoundFrequency };
    result = calculateInvestment(contribution, compound);
  }

</script>

<div class='block'>
  <form on:submit|preventDefault={calculateResult}>
    <!-- Contribution -->
    <PrincipalSection bind:principal />
    <AmountSection bind:amount />

    <label for='contributionFrequency'>Contribution Frequency</label>
    <select id='contributionFrequency' bind:value={contributionFrequency}>
      <option label='Monthly' value='month' />
      <option label='Quarterly' value='quarter' />
      <option label='Annually' value='year' />
    </select>

    <label for='duration'>Contribution Duration (years)</label>
    <input id='duration' type='number' min=1 bind:value={duration} required />

    <!-- Compound -->
    <label for='rate'>Interest Rate %</label>
    <input id='rate' type='number' min=0 max=100 bind:value={rate} required />

    <label for='compoundFrequency'>Compound Frequency</label>
    <select id='compoundFrequency' bind:value={compoundFrequency}>
      <option label='Monthly' value='month' />
      <option label='Quarterly' value='quarter' />
      <option label='Annually' value='year' />
    </select>
    <br />

    <button type='submit'>Calculate</button>
  </form>
  {#if result}
    <p><b>Result:</b> {result}</p>
  {/if}
</div>

<style>
  .block {
    display: flex;
    flex-direction: column;
  }
</style>
