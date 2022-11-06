<script>
	/* By Connor Rothschild https://twitter.com/CL_Rothschild
	Scrollytelling component from Russell Goldenberg https://twitter.com/codenberg/status/1432774653139984387 */

	import Scrolly from "hydrate:lib/scrollytelling/Scrolly.svelte";
	import Scatterplot from "hydrate:lib/scrollytelling/Scatterplot.svelte";
	import First from "hydrate:lib/First.svelte";
	import Second from "lazy:lib/Second.svelte";
	import Third from "lazy:lib/Third.svelte";
	import Fourth from "lazy:lib/Fourth.svelte";
	import Fifth from "lazy:lib/Fifth.svelte";
	import Sixth from "lazy:lib/Sixth.svelte";

	const API_KEY = import.meta.env.VITE_API_KEY;

	const steps = [First, Second, Third, Fourth, Fifth, Sixth];
</script>

<section>
	<div class="section-container">
		<div class="steps-container">
			<Scrolly />
			{#each steps as text}
				<div class="step active" data-partof="scrolly">
					<div class="step-content">
						<svelte:component this={text} {API_KEY} />
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
