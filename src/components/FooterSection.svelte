<script>
  import FaMapMarkerAlt from "svelte-icons/fa/FaMapMarkerAlt.svelte";
  import FaPhoneAlt from "svelte-icons/fa/FaPhoneAlt.svelte";
  import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
  import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaPinterest from "svelte-icons/fa/FaPinterest.svelte";
</script>

<div class="w-full bg-slate-800">
  <div class="w-4/5 2xl:w-3/5 h-full mx-auto py-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-0">
      <div>
        <h3 class="text-white text-4xl font-brand text-center">Contact Us</h3>
        <ul class="text-white mt-4">
          <li class="flex items-center">
            <span class="h-4 w-4 mr-3"><FaMapMarkerAlt /></span>
            <span>Location</span>
          </li>
          <li class="flex items-center mt-2">
            <span class="h-4 w-4 mr-3"><FaPhoneAlt /></span>
            <span>Call 123-456-789</span>
          </li>
          <li class="flex items-center mt-2">
            <span class="h-4 w-4 mr-3"><FaEnvelope /></span>
            <span>demo@gmail.com</span>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h3 class="text-white text-4xl font-brand text-center">Feane</h3>
        <p class="text-white text-center text-sm leading-7 my-4">
          Necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with
        </p>
        <div class="flex items-center">
          <button class="w-4 h-4 mr-3 text-white">
            <FaFacebook />
          </button>
          <button class="w-4 h-4 mr-3 text-white">
            <FaTwitter />
          </button>
          <button class="w-4 h-4 mr-3 text-white">
            <FaLinkedin />
          </button>
          <button class="w-4 h-4 mr-3 text-white">
            <FaInstagram />
          </button>
          <button class="w-4 h-4 mr-3 text-white">
            <FaPinterest />
          </button>
        </div>
      </div>
      <div>
        <h3 class="text-white text-4xl font-brand text-center">
          Opening Hourse
        </h3>
        <p class="text-white text-center mt-4 mb-2">Everyday</p>
        <p class="text-white text-center">10.00 Am - 10.00 Pm</p>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center mt-8">
      <p class="text-white">
        © 2022 All Rights Reserved By Free Html Templates
      </p>
      <p class="text-white mt-4">© Distributed By ThemeWagon</p>
    </div>
  </div>
</div>
