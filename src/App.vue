<template>
	<!-- this is using quasar itself not tabadul component libary, just to test quasar in this setup with TS -->
	<!-- the dev folder in the tabadul-ui-components is an application that is puropse is to try the components generated with tabadul-ui-components -->
	<form>
		<q-input
			outlined
			:label="t('labels.firstName')"
			:hint="t('labels.firstNameHint')"
			:hide-hint="true"
			:counter="true"
			v-model="v$.form.firstName.$model"
            :errors="v$.form.firstName.$errors"
			:error="v$.form.firstName.$errors[0] ? true : false"
			:error-message="v$.form.firstName.$errors[0] ? t(v$.form.firstName.$errors[0].$message) : null">

			<template v-slot:append>
				<q-icon
					name="cancel"
					class="cursor-pointer"
					@click.stop="form.firstName = ''"
				>
				</q-icon>
			</template>
		</q-input>
	</form>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/reactivity';
import { useI18n } from "vue-i18n/index";
import useVuelidate from "@vuelidate/core";

export default {
	name: "App",
	setup(): unknown {
		const { t } = useI18n({ useScope: 'global' });
		const state = reactive({
			form: {
				firstName: "first name"
			}
		});

		const rules = {
			form: {
				firstName: {
					required: {
						$validator: function isRequired(value: string) {
							if (value == null || value.trim().length === 0)
								return false;
							return true;
						},
						$message: "errors.required",
					},
				},
			},
		};

		const v$ = useVuelidate(rules, state);

		return {
			...toRefs(state),
			t,
			v$,
		};
	},
};
</script>
