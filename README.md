# Szyfr Cezara

Alogorytm i aplikacja napisane na potrzeby rekrutacji.

- Link do aplikacji: [Link](https://festive-wozniak-340b15.netlify.app/)
- Link do głównego konta GitHub: [Link](https://github.com/adrianczesnowski)  (zadanie dodaje na to konto, ponieważ tamto konto jest ogólnodostępne np. na LinkedIn - nie chciałbym żeby inne osoby wiedziały na czym polegało to zadanie, bo raczej nie powinienem mówić innym jak wygląda zadanie rekrutacyjne :D)

## SAM ALGORYTM ZNAJDUJE SIĘ W PLIKU "script.js" / algorytm wykorzystany w aplikacji znajduje się w utils/utils.js

## Do zrobienia:

1. obsługiwane znaki - alfabet łaciński case sensitive, cyfry, znaki interpunkcyjne i białe znaki - minimum to spacja, tabulator, znak nowej linii
2. implementacja metod encode i decode dla wybranego algorytmu
3. testy jednostkowe
4. prosta aplikacja przeglądarkowa wykorzystująca zaimplementowane metody bazująca na dowolnym nowoczesnym frameworku JS
5. nieskomplikowana autoryzacja w powyższej aplikacji - samo hasło, tzw. master password, bez zarządzania użytkownikami etc.
6. dokumentacja kodu oraz README
7. opcjonalnie dockeryzacja rozwiązania

## Zrobione:

1. Zrobione, niestety bez znaku tab i nowej linii - nie działało to w mojej metodzie, a przynajmniej nie chciało działać tak jak ja to robiłem. Rozwiązania szukałem na stacku i github, ale również nie mogłem nic znaleźć co dawałoby poprawny efekt.
2. Zrobione.
3. Proste testy zrobione, sprawdzające czy podaliśmy dwa argumenty do funkcji. Nie wiedziałem co więcej można przetestować w tej funkcji.
4. Zrobione, zakoduj lub odkoduj wiadomość - output widzimy w czasie rzeczywistym, możliwość skopiowania wiadomości po kliknięciu na nią.
5. Zrobione - nie wiem czy chodziło o to co zrobiłem, ale w [Master Password](<https://en.wikipedia.org/wiki/Master_Password_(algorithm)>) tworzy przekierowanie (?) na podstawie podanego np. imienia i nazwiska - u mnie Route jest właśnie generowany na podstawie wpisanych danych. Podkreślam - nie wiem czy o to chodziło :c
6. Dokumentacja zrobiona w formie komentarzy.
7. Nigdy tego nie robiłem, ale zobaczę kiedy i po co to się robi :D.

### Więcej o projekcie:

- Dodałem możliwość skopiowania zakodowanej / odkodowanej wiadomości po kliknięciu na nią.
- Na pewno mógłbym samą aplikację rozbić na więcej komponentów, ale pomyślałem, że nie ma takiej potrzeby, jeśli nie jest ona skomplikowana.
- Walidacja inputów chyba nie jest potrzebna - na pewno zrobiłbym to, gdyby zakodowana / odkodowana wiadomość pokazywałaby się dopiero po kliknięciu przycisku.
- Sam design raczej na kiepskim poziomie - ciągle nad tym pracuje. 

Jeżeli można, to proszę o napisanie co mógłbym zrobić inaczej i jakie błędy popełniłem, żeby nie popełniać tych błędów w przyszłości.
