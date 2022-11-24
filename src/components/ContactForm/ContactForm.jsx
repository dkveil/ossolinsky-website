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
import emailjs from '@emailjs/browser';
import { LoadingScreen } from 'components/LoadingScreen';
import { Alert } from 'components/Alert';

export const ContactForm = () => {
    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const [alert, setAlert] = React.useState({ open: false, type: null, closeanimation: false });

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

    const closeAlert = () => {
        setAlert((prev) => ({ ...prev, closeanimation: true }));
        setTimeout(() => setAlert({ open: false, type: '', closeanimation: false }), 1000);
    };

    const handleForm = (values, { resetForm }) => {
        const templateparams = {
            name: values.name,
            email: values.email,
            message: values.content,
        };

        setLoadingOpen(true);

        emailjs
            .send(
                process.env.GATSBY_EMAILJS_SERVICE_ID,
                process.env.GATSBY_EMAILJS_TEMPLATE_ID,
                templateparams,
                process.env.GATSBY_EMAILJS_KEY
            )
            .then(() => {
                setLoadingOpen(false);
                resetForm();
                setAlert({ open: true, type: 'success', closeanimation: false });
                setTimeout(closeAlert, 4000);
            })
            .catch(() => {
                setLoadingOpen(false);
                setAlert({ open: true, type: 'error', closeanimation: false });
                setTimeout(closeAlert, 4000);
            });
    };

    return (
        <>
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
                            <StyledInput
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                placeholder="Mikołaj"
                                error={errors.name}
                            />
                            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                        </FieldWrapper>
                        <FieldWrapper>
                            <StyledInput
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email"
                                error={errors.email}
                            />
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
                                <Button type="button" variant="contained" boxOverlay="bottom-left" boxOverlayColor="gray">
                                    Wyślij
                                </Button>
                            ) : (
                                <Button type="button" variant="full-contained" width="100%">
                                    Wyślij
                                </Button>
                            )}
                        </LastFields>
                    </Wrapper>
                )}
            </Formik>
            <LoadingScreen isOpen={loadingOpen} />
            <Alert open={alert.open} type={alert.type} closeanimation={alert.closeanimation} handleClose={closeAlert} />
        </>
    );
};
