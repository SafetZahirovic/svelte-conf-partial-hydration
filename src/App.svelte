<script>
  /* By Connor Rothschild https://twitter.com/CL_Rothschild
	Scrollytelling component from Russell Goldenberg https://twitter.com/codenberg/status/1432774653139984387 */

  import Scrolly from "hydrate:lib/scrollytelling/Scrolly.svelte";
  import Scatterplot from "hydrate:lib/scrollytelling/Scatterplot.svelte";
  import First from "hydrate:lib/First.svelte";
  import Second from "lazy:lib/Second.svelte";
  import Third from "lazy:lib/Third.svelte";
  let value;
  const steps = [First, Second, Third];
</script>

<section>
  <div class="section-container">
    <div class="steps-container">
      <Scrolly bind:value />
      {#each steps as text, i}
        <div class="step active" data-partof="scrolly">
          <div class="step-content">
            <svelte:component this={text} />
          </div>
        </div>
      {/each}
      <div class="spacer" />
    </div>
    <div class="sticky">
      <Scatterplot />
    </div>
  </div>
</section>