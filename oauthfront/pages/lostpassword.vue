<template>
  <div>
    <Header />
    <!-- Hero card -->
      <div class="container">
          <section class="max-w-md text-center">
               <form>
                  <p class="mt-20">비번찾기</p>
                  <div class="mb-4">
                    <!-- phone이 아이디 -->
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="연락처 11자리"
                    />
                  </div>
                  <!-- birth가 비번 -->
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="생년월일"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="inline-block px-6 py-2.5 w-full mb-3"
                      type="button"
                     >
                      비번찾기
                    </button>
                  </div>
                </form>
          </section>
      </div>
  <!-- Section end -->
  </div>  
</template>
<script setup>
</script>