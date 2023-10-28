<template>
    <div class="relative bg-white" id="services_section">
      <img class="object-right-top h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/3" src="@/assets/trees_illustration.webp" alt="" />
      <div class="mx-auto grid max-w-7xl lg:w-2/3">
        <div class="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-xl">
            <h2 class="text-base font-semibold leading-8 text-indigo-600">Blue Pine</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</p>
            <dl class="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              <div v-for="stat in stats" :key="stat.id" class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt class="text-md leading-6 text-gray-600">{{ stat.name }}</dt>
                <dd class="order-first text-xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const stats = [
    { id: 1, name: 'Keeping your books up to date and accurate, so you can focus on growing your business.', value: 'Bookkeeping' },
    { id: 2, name: 'Managing relationships with your clients and vendors, to help you build lasting partnerships.', value: 'Client and Vendor Relations' },
    { id: 3, name: 'Managing payroll for your employees, including direct deposits, tax filings, and year-end reporting', value: 'Full-Service Payroll' },
    { id: 5, name: 'Filing sales tax reports, to help you comply with local regulations.', value: 'Sales Tax Filing' },
    { id: 6, name: 'Tracking inventory levels, monitoring reorder points, and managing the procurement process, to help you keep your business running smoothly.', value: 'Inventory Management and Procurement' },
    { id: 4, name: 'Preparing monthly, quarterly, and yearly financial reports and budgets, to help you make informed business decisions.', value: 'Financial Reporting and Budgeting' },
  ]
  </script>