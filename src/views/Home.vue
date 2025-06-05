<template>
  <div class="app-container">
    <!-- 未登录界面 -->
    <div v-if="!user" class="welcome-bar login-box">
      <h1 class="title">Welcome to Media Storage</h1>
      <p class="subtitle">Please log in</p>
      <div class="button-group">
        <button @click="login">Login with Cognito</button>
      </div>
    </div>

    <!-- 已登录界面 -->
    <div v-else>
      <!-- 欢迎栏 -->
      <div class="welcome-bar login-box">
        <h1 class="title">Welcome to MBB Online Storage Platform</h1>
        <p class="subtitle">Hello, {{ user.profile.email }}</p>
      </div>

      <!-- 按钮区域 -->
      <div class="button-group">
        <button
          @click="activeView = 'upload'"
          :class="{ active: activeView === 'upload' }"
        >
          Upload
        </button>
        <button
          @click="activeView = 'retrieve'"
          :class="{ active: activeView === 'retrieve' }"
        >
          Retrieve
        </button>
        <button @click="signOut" class="logout-btn">Logout</button>
      </div>

      <!-- 视图区域 -->
      <div class="view-area">
        <UploadView v-if="activeView === 'upload'" />
        <RetrieveView v-if="activeView === 'retrieve'" />
      </div>
    </div>
  </div>
</template>


<script>
import { userManager, signOutRedirect } from "../auth/cognito";
import UploadView from "./Uploadview.vue";
import RetrieveView from "./Retrieveview.vue";

export default {
  name: "Home",
  components: {
    UploadView,
    RetrieveView,
  },
  data() {
    return {
      user: null,
      activeView: "upload",
    };
  },
  async created() {
    this.user = await userManager.getUser();
  },
  methods: {
    async login() {
      await userManager.signinRedirect();
    },
    async signOut() {
      await signOutRedirect();
    },
  },
};
</script>


<style scoped>
/* 页面整体 */
.app-container {
  min-height: 100vh;
  background-color: #f3f4f6;
}

/* 欢迎栏通用 */
.welcome-bar {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.login-box {
  background-color: white;
  color: #1f2937;
  margin: 20px;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 按钮区域 */
.button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.button-group button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #333;
  background-color: #e5e7eb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.button-group button:hover {
  background-color: #d1d5db;
  transform: translateY(-2px);
}

.button-group button.active {
  background-color: #3b82f6;
  color: white;
}

.logout-btn {
  background-color: #ef4444;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #dc2626;
}

/* 视图区域 */
.view-area {
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  min-height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .welcome-bar {
    padding: 20px;
  }

  .title {
    font-size: 1.5rem;
  }

  .button-group {
    flex-direction: column;
    gap: 10px;
  }

  .button-group button {
    width: 100%;
  }
}

.welcome-bar {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.welcome-bar h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.welcome-bar p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 按钮区域 */
.button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

.button-group button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #333;
  background-color: #e5e7eb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.button-group button:hover {
  background-color: #d1d5db;
  transform: translateY(-2px);
}

.button-group button.active {
  background-color: #3b82f6;
  color: white;
}

/* 视图区域 */
.view-area {
  padding: 20px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  min-height: 300px;
}

/* 响应式设计 */
@media (max-width: 768px) {

  .welcome-bar {
    padding: 20px;
  }

  .welcome-bar h1 {
    font-size: 1.5rem;
  }

  .button-group {
    flex-direction: column;
    gap: 10px;
  }

  .button-group button {
    width: 100%;
  }
}
</style>