export default defineNuxtPlugin(async (nuxtApp) => {
    await initMailer();
});
