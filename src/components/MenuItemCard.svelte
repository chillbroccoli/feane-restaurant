<script lang="ts">
  import clsx from "clsx";

  export let title: string;
  export let text: string;
  export let image_url: string;
  export let price: number;

  let isHovered = false;
</script>

<div
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  class="flex flex-col bg-slate-800 rounded-xl overflow-hidden shadow-2xl"
>
  <div class="w-full h-[200px] bg-gray-200 p-8 rounded-bl-3xl overflow-hidden">
    <img
      src={image_url}
      alt={title}
      class={clsx(
        "w-full h-full transition-transform duration-500 ease-in-out",
        isHovered ? "scale-110" : "scale-100"
      )}
    />
  </div>

  <div class="p-4">
    <h2 class="text-xl font-medium text-white">{title}</h2>

    <p class="text-white mt-2 text-sm leading-7">{text}</p>

    <div class="text-white mt-2">
      <span>${price}</span>
    </div>
  </div>
</div>
