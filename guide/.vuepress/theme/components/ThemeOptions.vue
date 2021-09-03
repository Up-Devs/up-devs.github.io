<template>
	<div class="theme-options">
		<ul class="color-theme-options">
			<span>Theme</span>
			<li>
				<button
					class="default-theme"
					title="Green theme"
					@click.prevent="setTheme({ persist: true })"
				></button>
			</li>
			<li>
				<button
					class="yellow-theme"
					title="Yellow theme"
					@click.prevent="setTheme({ colorTheme: 'yellow', persist: true })"
				></button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import useColorTheme from '../composables/useColorTheme';

const { setTheme } = useColorTheme();
</script>

<style lang="scss">
.theme-options {
	.color-theme-options {
		display: flex;

		> span {
			margin-right: auto;
		}

		li {
			margin-left: 0.5rem;

			button {
				color: #fff;
				display: block;
				width: 1.25rem;
				height: 1.25rem;
				border: 0;
				border-radius: 2px;
				cursor: pointer;

				&.default-theme {
					background-color: var(--green-500);

					&:hover {
						background-color: var(--green-530)
					}
				}

				&.yellow-theme {
					background-color: var(--yellow-500);

					&:hover {
						background-color: var(--yellow-530)
					}
				}
			}
		}
	}
}
</style>
