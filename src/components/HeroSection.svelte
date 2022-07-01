<script>
  import FaUser from "svelte-icons/fa/FaUser.svelte";
  import FaShoppingCart from "svelte-icons/fa/FaShoppingCart.svelte";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import FaHamburger from "svelte-icons/fa/FaHamburger.svelte";
  import clsx from "clsx";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";

  const links = [
    {
      url: "/",
      title: "Home",
      isActive: $page.url.pathname === "/",
    },
    {
      url: "/menu",
      title: "Menu",
      isActive: $page.url.pathname === "/menu",
    },
    {
      url: "/about",
      title: "About",
      isActive: $page.url.pathname === "/about",
    },
    {
      url: "/booktable",
      title: "Booktable",

      isActive: $page.url.pathname === "/booktable",
    },
  ];

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<div
  class="w-full min-h-screen md:h-screen md:min-h-full max-h-full bg-hero bg-no-repeat bg-center"
>
  <div class="w-4/5 2xl:w-3/5 h-full mx-auto flex flex-col">
    <header class="flex justify-between items-center py-8">
      <h1 class="text-4xl font-brand text-white">Feane</h1>

      <nav class="hidden lg:block">
        <ul class="flex flex-col md:flex-row justify-center items-center">
          {#each links as link}
            <li
              class={clsx(
                "px-3 uppercase hover:text-yellow-400",
                link.isActive ? "text-yellow-400" : "text-white"
              )}
            >
              <a href={link.url}>{link.title}</a>
            </li>
          {/each}
        </ul>
      </nav>

      <div class="items-center hidden lg:flex">
        <div class="flex items-center">
          <button class="w-4 h-4 mr-3 text-white">
            <FaUser />
          </button>
          <button class="w-4 h-4 mr-3 text-white">
            <FaShoppingCart />
          </button>
          <button class="w-4 h-4 mr-6 text-white">
            <FaSearch />
          </button>
        </div>
        <button
          class="px-6 py-2 text-white bg-yellow-400 hover:bg-yellow-600 rounded-3xl transition-colors duration-700 ease-out"
          >Order Online</button
        >
      </div>

      <div class="items-center lg:hidden flex">
        <button class="w-6 h-6 mr-3 text-white" on:click={toggleMenu}>
          <FaHamburger />
        </button>
      </div>
    </header>

    {#if showMenu}
      <nav transition:fly class="flex flex-col items-center justify-center">
        <ul class="flex flex-col md:flex-row justify-center items-center">
          {#each links as link}
            <li
              class={clsx(
                "px-3 uppercase hover:text-yellow-400",
                link.isActive ? "text-yellow-400" : "text-white"
              )}
            >
              <a href={link.url}>{link.title}</a>
            </li>
          {/each}
        </ul>

        <button
          class="px-6 py-2 mt-6 text-white bg-yellow-400 hover:bg-yellow-600 rounded-3xl transition-colors duration-700 ease-out"
          >Order Online</button
        >
      </nav>
    {/if}

    <div
      class="w-full h-full flex flex-col justify-center my-auto py-14 md:py-0"
    >
      <div>
        <h2 class="text-5xl font-brand text-white">Fast Food Restaurant</h2>

        <p class="w-3/4 md:w-1/2 text-sm leading-7 text-white py-3">
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>

        <button
          class="px-6 py-2 text-white bg-yellow-400 hover:bg-yellow-600 rounded-3xl transition-colors duration-700 ease-out"
          >Order Now</button
        >
      </div>
    </div>
  </div>
</div>
