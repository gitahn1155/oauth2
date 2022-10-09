<template>
<NuxtLayout name="admin">
<div class="flex items-center justify-center min-h-screen bg-white" style="padding-top: 40px">
    <div class="flex flex-col">
        <!-- Error Container -->
        <div class="flex flex-col items-center">
            <div class="text-indigo-500 font-bold text-5xl">
                404
            </div>
            <div class="font-bold text-3xl xl:text-4xl lg:text-4xl md:text-3xl mt-10">
                페이지를 찾일 수 없습니다
            </div>

            <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />입력하신 주소가 정확한지 다시 확인해 주시기 바랍니다.
            </div>
        </div>
        <!-- Error Container -->
        <div class="flex flex-col items-center">
            <Nuxt-link class="mt-10 text-2xl" to="/">홈으로 가기</Nuxt-link>
        </div>
                      

      
    </div>
</div>
</NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: false,
});
</script>
