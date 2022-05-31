import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) => {
	console.log('values: ', values);
};

const required = (value) => (value ? undefined : 'Required');

function FinalFormComponent() {
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field name="favoriteFood" validate={required}>
							{({ input, meta }) => (
								<div>
									<label>Favorite Food</label>
									<input {...input} type="text" placeholder="Favorite food" />
									{meta.error && meta.touched && <div>{meta.error}</div>}
								</div>
							)}
						</Field>
					</div>
					<button type="submit">submit</button>
				</form>
			)}
		/>
	);
}

export default FinalFormComponent;
