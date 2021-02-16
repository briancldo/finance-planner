<script>
  export let duration;
</script>

<label for='duration'>Contribution Duration (years)</label>
<input id='duration' type='number' min=1 bind:value={duration} required />
