<template>
	<main>
		<button @click="$Mailer.send(email)">Send Mail</button>
	</main>
</template>

<script setup lang="ts">
const email: Email = {
	to: "hello@gmail.com",
	from: "hello@gmail.com",
	subject: "This is the email",
	text: "Hello this is the content.",
}
</script>
