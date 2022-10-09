<template>
  <div>
    <Header />
    <!-- Hero card -->
      <div class="container">
          <section class="max-w-md text-center">
               <form  @submit.prevent="register">
                  <p class="mt-20">로그인하기</p>
                  <div class="mb-4">
                    <!-- phone이 아이디 -->
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="연락처 11자리"
                      v-model="form.user_id"
                    />
                  </div>
                  <!-- birth가 비번 -->
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="생년월일"
                      v-model="form.password"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="inline-block px-6 py-2.5 w-full mb-3"
                      type="button"
                     >
                      로그인
                    </button>
                    <a class="text-gray-500" href="#!">비밀번호를 잊으셨나요?</a>
                  </div>
                </form>
          </section>
      </div>
  <!-- Section end -->
  </div>  
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
      form:{
        user_id: null,
        password: null,
      }
      }
    },
    methods: {
      register(){
                const config={ headers:{ "content-type":"multipart/form-data" } }
                let formData = new FormData();
                formData.append('user_id',this.form.user_id);
                formData.append('password',this.form.password);

                axios.post(`http://127.0.0.1:8000/api/auth/register`, formData, config )
                .then(res => {
                    this.$router.push({ path: '/login'})
                    
                }).catch((err) => {

                })
      }
    }
  }
</script>