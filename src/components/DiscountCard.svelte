<script lang="ts">
  import clsx from "clsx";

  export let title: string;
  export let percentage: string;
  export let imgUrl: string;

  let isHovered = false;
</script>

<div
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  class="flex bg-slate-800 px-6 py-4 rounded-md"
>
  <div
    class="h-36 w-36 overflow-hidden relative rounded-full border-4 border-yellow-400"
  >
    <img
      src={imgUrl}
      alt={title}
      class={clsx(
        "inline-block w-full h-full rounded-full overflow-hidden transition-transform duration-500 ease-in-out",
        isHovered ? "scale-125" : "scale-100"
      )}
    />
  </div>

  <div class="flex flex-col ml-4">
    <h4 class="text-2xl font-brand text-white">{title}</h4>
    <h3 class="text-3xl font-brand text-white mt-2">{percentage}</h3>
    <button
      class="px-6 py-2 mt-4 text-white bg-yellow-400 hover:bg-yellow-600 rounded-3xl transition-colors duration-700 ease-out"
      >Order Now</button
    >
  </div>
</div>
