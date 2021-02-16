<script>
  import { calculateInvestment } from '../../utils/interest';
  import PrincipalSection from './sections/PrincipalSection.svelte';
  import AmountSection from './sections/AmountSection.svelte';
  import ContributionFrequencySection from './sections/ContributionFrequencySection.svelte';
  import DurationSection from './sections/DurationSection.svelte';
  import RateSection from './sections/RateSection.svelte';
  import CompoundFrequencySection from './sections/CompoundFrequencySection.svelte';

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
    <ContributionFrequencySection bind:contributionFrequency />    
    <DurationSection bind:duration />    

    <!-- Compound -->
    <RateSection bind:rate />
    <CompoundFrequencySection bind:compoundFrequency />

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
