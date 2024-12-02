export default defineNuxtRouteMiddleware((to, from) => {
    // 取得 cookie
    const auth = useCookie("auth");
    // 需要驗證的頁面
    const isNeedAuth = ["/about"];
  
    // 如果需要驗證的頁面，且 cookie 不存在，則導航到 /address
    if (isNeedAuth.includes(to.path)) {
      // 如果 cookie 不存在，則導航到 /404
      if (!auth.value) {
        return navigateTo("/404");
      }
    }
  });  