<template lang="pug" functional>
	div.widget
		div.tools
			slot(name="tools")
		div.main
			slot(name="main")
</template>

<style lang="scss">
	@import "../../base/style.scss";

	.widget {
		width: 100%;
		padding: 0 $padding;

		.tools {
			height: 30px;
			border-bottom: $border;
			padding: 0 0 8px 0;
			@include fx-center();

			.icon {
				display: inline-block;
				margin: 0 10px;
				@include size(20px);
				cursor: pointer;
			}

			.trash {
				background: url(~@/app/ui/editor/pages/project/assets/trash.svg);
			}

			.reset {
				background: url(~@/app/ui/editor/pages/project/assets/reset.svg);
			}

			.disabled {
				opacity: 0.3;
			}
		}

		.main {
			position: relative;
			overflow: scroll;
			min-height: 500px;
		}
	}
</style>