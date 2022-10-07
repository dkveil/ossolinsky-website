import { Wrapper, StyledLabel, StyledInput, StyledTextArea, FieldWrapper, ErrorMessage } from './ContactForm.styles';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { isDesktop } from 'utils/isDesktop';

export const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        content: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string(),
        email: Yup.string()
            .required('Proszę, nie zostawiaj tego pola pustego...')
            .email('Coś nie tak z Twoim mailem... sprawdź ponownie format.'),
        content: Yup.string().required('Proszę, nie zostawiaj tego pola pustego...').min(4, 'Napisz coś więcej...'),
    });

    const handleForm = () => {
        console.log('works');
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={handleForm}
        >
            {({ handleSubmit, values, handleChange, errors }) => (
                <Wrapper onSubmit={handleSubmit}>
                    <StyledLabel htmlFor="name">Twoje imię</StyledLabel>
                    <FieldWrapper>
                        <StyledInput name="name" value={values.name} onChange={handleChange} placeholder="Mikołaj" error={errors.name} />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledInput name="email" value={values.email} onChange={handleChange} placeholder="Email" error={errors.email} />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledTextArea
                            name="content"
                            value={values.content}
                            onChange={handleChange}
                            placeholder="Napisz co mógłbym dla Ciebie zrobić :)"
                            error={errors.content}
                        />
                        {errors.content && <ErrorMessage textarea>{errors.content}</ErrorMessage>}
                    </FieldWrapper>
                    {isDesktop() ? (
                        <Button type="submit" variant="outlined" boxOverlay="bottom-left">
                            Wyślij
                        </Button>
                    ) : (
                        <Button type="submit" variant="full-contained" width="100%">
                            Wyślij
                        </Button>
                    )}
                </Wrapper>
            )}
        </Formik>
    );
};
