
<template>
    <div class="col px-12 py-8" id="contact_section">
        <div class="mt-32 mx-auto max-w-4xl">
  <form id="contact-form">
    <div class="space-y-12 sm:space-y-16">
      <div>
        <h2 class="pb-4 text-4xl font-bold leading-7 text-gray-900">Contact</h2>
        <p class="text-indigo-700 mt-1 max-w-2xl font-semibold leading-6 text-gray-600">This message will be delivered to Blue Pine's Email.</p>

        <div class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Your Name</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                
                <input type="text" name="name" id="name" autocomplete="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Piper Palmer" />
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Your Email</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                
                <input type="text" name="email" id="email" autocomplete="email" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="email@email.com" />
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="message" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Message</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <textarea id="message" name="message" rows="3" class="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about what you need. I will get back to you shortly.</p>
            </div>
          </div>

          </div>
        </div>

        </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
    </div>
  </form>
    </div>
</div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue'

    onMounted(() => {
        const form = document.getElementById('contact-form')
        form.addEventListener('submit', handleSubmit)
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        const data = {
            'name': name,
            'email': email,
            'message': message
        }
        console.log(data)
        fetch('https://bpb-handle-contact-form-3bcmi7543q-uw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                alert(`Thank you for your message, ${data.name} A copy has been sent to you and to Stephen.`)
                //reset form
                document.getElementById('contact-form').reset()
            } else {
                alert('Message failed to send. If this problem persists, please email Stephen directly at stephen@bluepinebookkeeping.com')
            }
        })
    }




  </script>