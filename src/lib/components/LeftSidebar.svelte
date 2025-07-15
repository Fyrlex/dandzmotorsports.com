<script>
  import Icon from '@iconify/svelte';
</script>

<div class="text-left">
  <div class="flex flex-row items-center justify-start space-x-1 text-4xl">
    <Icon icon="carbon:time" />
    <h2>Hours</h2>
  </div>
  <p class="text-lg">Mon - Fri 9 AM to 6 PM</p>
  <p class="text-lg">Closed on holidays</p>
</div>
<div>
  <div class="flex flex-row items-center justify-start space-x-1 text-4xl">
    <Icon icon="carbon:question-answering" />
    <h2>Contact Us</h2>
  </div>
  <ul class="text-xl">
    <li class="flex flex-row items-center justify-start space-x-1">
      <Icon icon="carbon:location" />
      <p>Winchester, VA</p>
    </li>
    <li class="flex flex-row items-center justify-start space-x-1">
      <Icon icon="carbon:email" />
      <a href="mailto:dandzmotorsports@gmail.com">dandzmotorsports@gmail.com</a>
    </li>
    <li class="flex flex-row items-center justify-start space-x-1">
      <Icon icon="carbon:phone" />
      <a href="tel:+15403154562">(540) 315-4562</a>
    </li>
    <li class="text-lg">*Appointment by call</li>
  </ul>
</div>
