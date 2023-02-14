<x-app-layout>
 `   {{-- <aside class="border-2 border-black max-w-xs p-4 min-h-screen grid">
      <div>
        <div class="flex place-items-center gap-4 mt-2">
          <img src="{{ asset('assets/temp.jpg') }}" alt="" class="w-16 h-16 border-2 border-neutral-400 rounded-full">
          <h3 class="font-bold">{{ Auth::user()->first_name }}</h3>
        </div>
      </div>
      
      <div class="px-8">

      </div>

      <div class="py-8 border-b-2 border-black">

        <div class="flex gap-2 place-items-center mt-6 text-neutral-400 group">
          <i class="fa-solid fa-house text-lg group-hover:text-black"></i>
          <p class="font-semibold group-hover:text-black">Dashboard</p>
        </div>

        <div class="flex gap-2 place-items-center mt-6 text-neutral-400 group">
          <i class="fa-solid fa-chart-line text-lg group-hover:text-black"></i>
          <p class="font-semibold group-hover:text-black">Activities</p>
        </div>

        <div class="flex gap-2 place-items-center mt-6 text-neutral-400 group">
          <i class="fa-solid fa-gear text-lg group-hover:text-black"></i>
          <p class="font-semibold group-hover:text-black">Settings</p>
        </div>

      </div>


      <div class="py-8 border-b-2 border-black">
        <h1 class="font-bold">Artworks</h1>
        <div class="flex gap-2 place-items-center mt-6 text-neutral-400">
          <i class="fa-solid fa-images text-lg"></i>
          <p class="font-semibold">Gallery</p>
        </div>

        <div class="flex gap-2 place-items-center mt-6 text-neutral-400">
          <i class="fa-solid fa-clock text-lg"></i>
          <p class="font-semibold">Orders</p>
        </div>

        <div class="flex gap-2 place-items-center mt-6 text-neutral-400">
          <i class="fa-solid fa-cart-shopping text-lg"></i>
          <p class="font-semibold">Shipped</p>
        </div>

      </div>


        <div class="flex gap-2 place-items-center mt-6 text-neutral-400">
          <i class="fa-solid fa-cart-shopping text-lg"></i>
          <p class="font-semibold">Logout</p>
        </div>


    </aside>
    <article class="col-span-9">

      <!-- ========== Start Section ========== -->
      
      <!-- ========== End Section ========== -->
    </article> --}}
    
<button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
  <span class="sr-only">Open sidebar</span>
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>

<aside id="separator-sidebar" class="fixed mt-16 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
    <img src="{{ asset('assets/temp.jpg') }}" class="h-10 w-10 mr-3  rounded-full" alt="Artiez Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap">{{ Auth::user()->first_name }}</span>
 </a>
  <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
     <ul class="space-y-2">
        <li>
           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100">
               <i class="fa-solid fa-house text-lg group-hover:text-black"></i>
               <span class="ml-3">Dashboard</span>
           </a>
        </li>
        <li>
           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100">
            <i class="fa-solid fa-chart-line text-lg group-hover:text-black"></i>
              <span class="flex-1 ml-3 whitespace-nowrap">Activities</span>
              {{-- <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> --}}
           </a>
        </li>
       
        
     </ul>
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
        <li>
           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i class="fa-solid fa-images text-lg"></i>
              <span class="ml-4">Gallery</span>
           </a>
        </li>
        <li>
           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i class="fa-solid fa-clipboard text-xl"></i>
              <span class="ml-5">Orders</span>
           </a>
        </li>
        <li>
           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i class="fa-solid fa-cart-shopping text-lg"></i>
              <span class="ml-4">Sold Artworks</span>
           </a>
        </li>

     </ul>
     {{-- Configuration Section --}}
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
      <li>
         <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
            <i class="fa-solid fa-user"></i>
             <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>

         </a>
      </li>
        
      <li>
         <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
            <i class="fa-solid fa-gear"></i>
            <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
            {{-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">3</span> --}}
         </a>
      </li>
        <li>
           <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group">
            <i class="fa-solid fa-right-from-bracket"></i>
              <span class="ml-3">Logout</span>
           </a>
        </li>
     </ul>
  </div>
</aside>

<div class="p-4 sm:ml-64">
  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
     <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-rose-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
     </div>
     <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
     </div>
     <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
     </div>
     <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
     </div>
     <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
           <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
     </div>
  </div>
</div>

</x-app-layout>