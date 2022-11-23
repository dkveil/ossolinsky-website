import {
    Wrapper,
    StyledLabel,
    StyledInput,
    StyledTextArea,
    FieldWrapper,
    ErrorMessage,
    LastFields,
    Checkmark,
    Disclaimer,
} from './ContactForm.styles';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { isDesktop } from 'utils/isDesktop';
import { Link } from 'gatsby';

export const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        content: '',
        policyaccept: false,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Proszę, nie zostawiaj tego pola pustego...'),
        email: Yup.string()
            .required('Proszę, nie zostawiaj tego pola pustego...')
            .email('Coś nie tak z Twoim mailem... sprawdź ponownie format.'),
        content: Yup.string().required('Proszę, nie zostawiaj tego pola pustego...').min(4, 'Napisz coś więcej...'),
        policyaccept: Yup.bool().required('').oneOf([true]),
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
                    <LastFields>
                        <label>
                            <input type="checkbox" name="policyaccept" checked={values.policyaccept} onChange={handleChange} />
                            <Checkmark />
                            <Disclaimer error={errors.policyaccept}>
                                Przeczytałem{' '}
                                <a
                                    target="_blank"
                                    href="/polityka-prywatnosci"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    politykę prywatności
                                </a>{' '}
                                i wyrażam zgodę na przetwarzanie danych osobowych.
                            </Disclaimer>
                        </label>
                        {isDesktop() ? (
                            <Button type="submit" variant="contained" boxOverlay="bottom-left" boxOverlayColor="gray">
                                Wyślij
                            </Button>
                        ) : (
                            <Button type="submit" variant="full-contained" width="100%">
                                Wyślij
                            </Button>
                        )}
                    </LastFields>
                </Wrapper>
            )}
        </Formik>
    );
};
