import React from 'react';
import { Wrapper, ContentContainer, TitleWrapper, ContentWrapper } from 'layouts/PrivacyPolicyPage/PrivacyPolicyPage.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from 'components/SEO';
import { useFooterThemeContext } from 'context/footerThemeContext';
import { useTheme } from 'styled-components';

const PrivacyPolicyPage = () => {
    if (!isBrowser) return null;

    const { setMobileBackgroundColor, setDesktopBackgroundColor } = useFooterThemeContext();
    const theme = useTheme();

    React.useEffect(() => {
        setMobileBackgroundColor(theme.color.white);
        setDesktopBackgroundColor(theme.color.white);
    }, []);

    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    <TitleWrapper>
                        <Heading
                            color="black"
                            variant="subpage h1"
                            overlay
                            overlayPosition={isDesktop() ? { top: '-1rem', left: '-2rem' } : { top: '-.6rem', left: '-1rem' }}
                            overlaySize={isDesktop() ? { width: '17rem', height: '6.5rem' } : { width: '10rem', height: '4rem' }}
                            overlayColor="gray"
                        >
                            <span>Polityka</span>
                            <span>prywatności</span>
                        </Heading>
                    </TitleWrapper>
                    <ContentWrapper>
                        <div>
                            <h5>1. Informacje ogólne</h5>
                            <p>
                                Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <b>www.ossolinsky.pl</b> <br />
                                Operatorem serwisu oraz Administratorem danych osobowych jest: Mikołaj Ossoliński <br />
                                Adres kontaktowy poczty elektronicznej operatora: kontakt@ossolinsky.pl
                                <br />
                                Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
                                Serwisie.
                                <br />
                                Serwis wykorzystuje dane osobowe w następujących celach:
                                <ul>
                                    <li>Obsługa zapytań przez formularz</li>
                                </ul>
                                Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                                <ul>
                                    <li>
                                        Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów
                                        Operatora.
                                    </li>
                                    <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. &quotciasteczka&quot).</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <h5>2. Wybrane metody ochrony danych stosowane przez Operatora</h5>
                            <p>
                                Miejsca wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane
                                osobowe, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie
                                na docelowym serwerze.
                            </p>
                        </div>
                        <div>
                            <h5>3. Hosting</h5>
                            <p>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: zenbox.pl</p>
                        </div>
                        <div>
                            <h5>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h5>
                            <p>
                                W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie
                                to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
                                Administratorze. Dotyczy to takich grup odbiorców:
                            </p>
                            <ul>
                                <li>firma hostingowa</li>
                                <li>firmy obsługująca mailingi</li>
                                <li>firmy, z którymi Administrator współpracuje w zakresie marketingu własnego</li>
                                <li>ubezpieczyciele</li>
                                <li>kancelarie prawne i windykatorzy</li>
                                <li>organy publiczne</li>
                            </ul>
                            <p>
                                Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania
                                związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu
                                do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata. Przysługuje Ci prawo żądania od
                                Administratora:
                            </p>
                            <ul>
                                <li>dostępu do danych osobowych Ciebie dotyczących</li>
                                <li>ich sprostowania</li>
                                <li>usunięcia</li>
                                <li>ograniczenia przetwarzania</li>
                                <li>przenoszenia danych</li>
                            </ul>
                            <p>
                                Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu. W stosunku do Ciebie mogą być
                                podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
                                świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu
                                bezpośredniego. Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych
                                osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
                            </p>
                        </div>
                        <div>
                            <h5>5. Informacje w formularzach</h5>
                            <p>
                                Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.
                                <br />
                                Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem
                                e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz
                                adresu url strony zawierającej formularz.
                                <br />
                                Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu
                                dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo
                                kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
                            </p>
                        </div>
                        <div>
                            <h5>6. Istotne techniki marketingowe</h5>
                            <p>
                                Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w
                                USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje.
                                Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o
                                preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować
                                informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/
                            </p>
                        </div>
                        <div>
                            <h5>7. Informacja o plikach cookies</h5>
                            <p>
                                Serwis korzysta z plików cookies.
                                <br />
                                Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które
                                przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
                                internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
                                przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                                <br />
                                Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich
                                dostęp jest operator Serwisu.
                                <br />W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz
                                „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
                                końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania
                                (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez
                                czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
                                <br />
                                Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
                                przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany
                                ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także
                                automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja
                                przeglądarki internetowej.
                                <br />
                                Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
                                internetowych Serwisu.
                                <br />
                                Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez
                                współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z
                                siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
                            </p>
                        </div>
                        <div>
                            <h5>8. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h5>
                            <p>
                                Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że
                                wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
                                preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.
                            </p>
                        </div>
                    </ContentWrapper>
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};

export const Head = () => (
    <SEO
        title="Polityka prywatności - Ossolinsky.pl"
        description=" Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: www.ossolinsky.pl. Operatorem serwisu oraz Administratorem danych osobowych jest: Mikołaj Ossoliński. Adres kontaktowy poczty elektronicznej operatora: kontakt@ossolinsky.pl"
        slug="/polityka-prywatnosci"
    />
);

export default PrivacyPolicyPage;
