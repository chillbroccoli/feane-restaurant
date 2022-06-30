<script lang="ts">
  export let text: string;
  export let fullName: string;
  export let image_url: string;
</script>

<div class="bg-slate-800 p-4 rounded-md relative">
  <div>
    <p class="text-white text-sm leading-7">{text}</p>
    <h5 class="text-white text-lg mt-4">{fullName}</h5>
  </div>

  <div
    class="absolute left-0 -bottom-36 rounded-full border-4 border-yellow-400"
  >
    <img
      src={image_url}
      alt="Person's profile"
      class="inline-block h-28 w-28 rounded-full"
    />
  </div>
</div>
