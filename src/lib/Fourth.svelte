<script>
	import { onMount } from "svelte";

	let canvas;

	let width = 600;
	let height = 600;

	let margin = {
		top: 30,
		bottom: 30,
		left: 30,
		right: 30,
	};

	onMount(() => {
		const ctx = canvas.getContext("2d");
		canvas.width = "500";
		canvas.height = "500";

		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		ctx.imageSmoothingEnabled = true;
		ctx.globalCompositeOperation = "darken";

		let isDrawing = false;
		let [lastX, lastY] = [0, 0];
		let line = 0;
		let lineIncrement = true;
		let color = 0;

		function drawLine(ev) {
			if (!isDrawing) return;

			ctx.lineWidth = line;
			if (line === 100) lineIncrement = false;
			if (line === 1) lineIncrement = true;
			lineIncrement ? line++ : line--;

			ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
			color <= 360 ? color++ : (color = 0);

			ctx.beginPath();
			ctx.moveTo(lastX, lastY);
			ctx.lineTo(ev.offsetX, ev.offsetY);
			ctx.stroke();

			[lastX, lastY] = [ev.offsetX, ev.offsetY];
		}

		canvas.addEventListener("mousedown", (ev) => {
			[lastX, lastY] = [ev.offsetX, ev.offsetY];
			isDrawing = true;
		});

		canvas.addEventListener("mousemove", drawLine);

		canvas.addEventListener("mouseup", () => (isDrawing = false));
		canvas.addEventListener("mouseout", () => (isDrawing = false));
	});
</script>

<canvas bind:this={canvas} />
