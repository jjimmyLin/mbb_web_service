<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userManager } from '@/auth/cognito.js'

const router = useRouter()

onMounted(async () => {
  try {
    // 处理 Cognito 登录回调，完成登录状态同步
    await userManager.signinRedirectCallback()
    // 登录成功，跳回首页
    router.push('/')
  } catch (error) {
    console.error('Login callback error:', error)
    // 你也可以跳转错误页，或者显示错误信息
  }
})
</script>

<template>
  <div>
    登录处理中，请稍候...
  </div>
</template>
