# Szyfr Cezara

Alogorytm i aplikacja napisane na potrzeby rekrutacji.

Link do aplikacji: [Link](https://app.netlify.com/sites/festive-wozniak-340b15/overview)

## SAM ALGORYTM ZNAJDUJE SIĘ W PLIKU "script.js" / algorytm wykorzystany w aplikacji znajduje się w utils/utils.js

## ToDo

1. obsługiwane znaki - alfabet łaciński case sensitive, cyfry, znaki interpunkcyjne i białe znaki - minimum to spacja, tabulator, znak nowej linii
2. implementacja metod encode i decode dla wybranego algorytmu
3. testy jednostkowe
4. prosta aplikacja przeglądarkowa wykorzystująca zaimplementowane metody bazująca na dowolnym nowoczesnym frameworku JS
5. nieskomplikowana autoryzacja w powyższej aplikacji - samo hasło, tzw. master password, bez zarządzania użytkownikami etc.
6. dokumentacja kodu oraz README
7. opcjonalnie dockeryzacja rozwiązania

## Zrobione

1. Zrobione, niestety bez znaku tab i nowej linii - nie działało to w mojej metodzie, a przynajmniej nie chciało działać tak jak ja to robiłem. Rozwiązania szukałem na stacku i github, ale również nie mogłem nic znaleźć co dawałoby poprawny efekt.
2. Zrobione.
3. Póki co brak - próbowałem zrobić testy, ale problem jest taki, że nie wiem co powinno się testować :c. Chciałem napisać test do sprawdzania czy podane parametry do funkcji są stringiem i numberem, ale nie mogłem znaleźć informacji o tym jak to się robi. Być może nie ma takich testów :(
4. Zrobione, zakoduj lub odkoduj wiadomość - output widzimy w czasie rzeczywistym.
5. Zrobione - nie wiem czy chodziło o to co zrobiłem, ale w [Master Password](<https://en.wikipedia.org/wiki/Master_Password_(algorithm)>) tworzy przekierowanie (?) na podstawie podanego np. imienia i nazwiska - u mnie Route jest właśnie generowany na podstawie wpisanych danych. Podkreślam - nie wiem czy o to chodziło :c
6. Dokumentacja zrobiona w formie komentarzy.
7. Nigdy tego nie robiłem, ale zobaczę kiedy i po co to się robi :D.
