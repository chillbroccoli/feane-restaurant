<div class="w-full">
  <div class="w-5/6 md:w-4/5 2xl:w-3/5 h-full mx-auto py-20">
    <h2 class="text-4xl font-brand mb-6">Book A Table</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-0">
      <form class="flex flex-col">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Your name"
          />
        </div>
        <div class="mt-3">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Phone number"
          />
        </div>
        <div class="mt-3">
          <input
            type="email"
            id="email"
            name="email"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Your email"
          />
        </div>
        <div class="mt-3">
          <select
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          >
            <option>How many persons?</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="mt-3">
          <input
            type="date"
            id="date"
            name="date"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="dd/mm/yyyy"
          />
        </div>
      </form>

      <div>
        <iframe
          title="Google Maps - Elbląg Old Town"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.244913182736!2d19.394437096601827!3d54.15802511558262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd4dcf3a7d37cb%3A0x64183412ca694d2d!2sStare%20Miasto!5e0!3m2!1spl!2spl!4v1656518659226!5m2!1spl!2spl"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-full"
        />
      </div>
    </div>

    <button
      class="px-6 py-2 mt-8 text-white bg-yellow-400 hover:bg-yellow-600 rounded-3xl transition-colors duration-700 ease-out"
      >Book Now</button
    >
  </div>
</div>
