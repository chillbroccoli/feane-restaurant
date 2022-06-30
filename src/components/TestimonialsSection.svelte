<script>
  import TestimonialBox from "@/components/TestimonialBox.svelte";

  let testimonials = [
    {
      id: 1,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
      fullName: `John Doe`,
      image_url: "/images/client1.jpg",
    },
    {
      id: 2,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
      fullName: `Jane Doe`,
      image_url: "/images/client2.jpg",
    },
  ];
</script>

<div class="w-full mb-44">
  <div class="w-4/5 2xl:w-3/5 h-full mx-auto py-4">
    <h2 class="text-4xl font-brand mb-6 text-center">
      What Says Our Customers
    </h2>

    <div class="grid grid-cols-2 gap-x-8">
      {#each testimonials as testimonial (testimonial.id)}
        <TestimonialBox
          text={testimonial.text}
          fullName={testimonial.fullName}
          image_url={testimonial.image_url}
        />
      {/each}
    </div>
  </div>
</div>
