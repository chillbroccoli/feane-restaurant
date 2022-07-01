<script lang="ts">
  import clsx from "clsx";

  import DiscountCard from "@/components/DiscountCard.svelte";
  import MenuItemCard from "@/components/MenuItemCard.svelte";

  type MenuItem = {
    id: number;
    title: string;
    text: string;
    image_url: string;
    price: number;
  };

  let menuItemsCategories = {
    all: "all",
    pizza: "pizza",
    burger: "burger",
    pasta: "pasta",
    fries: "fries",
  };

  let tabs = [
    {
      id: 1,
      title: "All",
      value: menuItemsCategories.all,
    },
    {
      id: 2,
      title: "Burger",
      value: menuItemsCategories.burger,
    },
    {
      id: 3,
      title: "Pizza",
      value: menuItemsCategories.pizza,
    },
    {
      id: 4,
      title: "Pasta",
      value: menuItemsCategories.pasta,
    },
    {
      id: 5,
      title: "Fries",
      value: menuItemsCategories.fries,
    },
  ];

  let menuItems = [
    {
      id: 1,
      title: "Delicious Pizza",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 20,
      image_url: "/images/f1.png",
      category: menuItemsCategories.pizza,
    },
    {
      id: 2,
      title: "Delicious Burger",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 15,
      image_url: "/images/f2.png",
      category: menuItemsCategories.burger,
    },
    {
      id: 3,
      title: "Delicious Pizza",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 17,
      image_url: "/images/f3.png",
      category: menuItemsCategories.pizza,
    },
    {
      id: 4,
      title: "Delicious Pasta",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 18,
      image_url: "/images/f4.png",
      category: menuItemsCategories.pasta,
    },
    {
      id: 5,
      title: "French Fries",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 10,
      image_url: "/images/f5.png",
      category: menuItemsCategories.fries,
    },
    {
      id: 6,
      title: "Delicious Pizza",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 15,
      image_url: "/images/f6.png",
      category: menuItemsCategories.pizza,
    },
    {
      id: 7,
      title: "Tasty Burger",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 12,
      image_url: "/images/f7.png",
      category: menuItemsCategories.burger,
    },
    {
      id: 8,
      title: "Tasty Burger",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 14,
      image_url: "/images/f8.png",
      category: menuItemsCategories.burger,
    },
    {
      id: 9,
      title: "Delicious Pasta",
      text: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque`,
      price: 10,
      image_url: "/images/f9.png",
      category: menuItemsCategories.pasta,
    },
  ];

  let activeTabIndex = 0;
  let currentMenuItems: MenuItem[] = menuItems;

  $: currentMenuItems = menuItems.filter((menuItem) => {
    if (tabs[activeTabIndex].value === menuItemsCategories.all) {
      return menuItem;
    } else {
      return menuItem.category === tabs[activeTabIndex].value;
    }
  });

  const changeActiveTab = (index: number) => {
    activeTabIndex = index;
  };
</script>

<div class="w-full min-h-screen bg-gray-100">
  <div class="w-4/5 2xl:w-3/5 h-full mx-auto flex flex-col">
    <section class="grid grid-cols-2 gap-x-6 pt-20">
      <DiscountCard
        title="Tasty Thursdays"
        percentage="20% Off"
        imgUrl="/images/o1.jpg"
      />
      <DiscountCard
        title="Tasty Fridays"
        percentage="15% Off"
        imgUrl="/images/o2.jpg"
      />
    </section>

    <section class="mt-16">
      <h2 class="text-4xl font-brand text-center">Our Menu</h2>

      <div class="flex justify-center items-center mt-6">
        <div class="flex items-center">
          {#each tabs as tab, index (tab.id)}
            <button
              on:click={() => changeActiveTab(index)}
              class={clsx(
                "px-4 py-1 rounded-3xl text-lg",
                index === activeTabIndex
                  ? "bg-slate-800 text-white"
                  : "bg-transparent text-black"
              )}
            >
              <span>{tab.title}</span>
            </button>
          {/each}
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-12">
        {#each currentMenuItems as menuItem (menuItem.id)}
          <MenuItemCard
            title={menuItem.title}
            text={menuItem.text}
            price={menuItem.price}
            image_url={menuItem.image_url}
          />
        {/each}
      </div>

      <div class="w-full flex items-center justify-center mb-14">
        <button
          class="px-6 py-2 mt-4 text-white bg-yellow-400 hover:bg-yellow-600 rounded-3xl transition-colors duration-700 ease-out"
          >View More</button
        >
      </div>
    </section>
  </div>
</div>
