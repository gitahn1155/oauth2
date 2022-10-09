<template>
  <div>
    <Header />
    <!-- Hero card -->
     <div class="container">
        {{ res.user }} 내 프로필에 오신걸 환영합니다
      </div>
  <!-- Section end -->
  </div>  
</template>
<script setup>
import axios from 'axios'
//사용자 정보 가져오기.
//access가 expire되면 refresh에서 token 재발행할수 있도록 부탁드립니다. 
//refresh token이 expire된 경우 로그아웃된다.
//access token의 시간을 1분 refresh token을 1시간으로 하여 테스트해볼 수 있도록 부탁드립니다.
//token 과 사용자 정보는 localStorage나 cookie에 저장되나요?
const config={ headers:{ "content-type":"multipart/form-data" } }
  const res = await axios.get(`http://127.0.0.1:8000/api/auth/user-profile`, config);
</script>