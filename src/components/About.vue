<template>
  <div id="container">
    <h1>O zadaniu</h1>
    <h3>
      Backend aplikacji stworzony jest w NodeJs za pomocą frameworka express,
      bazę danych obsługuje MongoDb przez bibliotekę mongoose, w bazie mamy dwie
      rodziny; Smith i Hope, ze swoimi członkami i własnym budżetem, dodawać $
      do budżetu mogą tylko ojcowie poszczególnych rodzin. Dane do logowania
      poszczególnych członków rodziny:
    </h3>
    <ul>
      <h2>Smith</h2>
      <li>ojciec@wydatki.pl password: ojciec@wydatki.pl</li>
      <li>matka@wydatki.pl password: matka@wydatki.pl</li>
      <li>syn@wydatki.pl password: syn@wydatki.pl</li>
      <li>corka@wydatki.pl password: corka@wydatki.pl</li>
    </ul>
    <ul>
      <h2>Hope</h2>
      <li>ojciec_hope@wydatki.pl password: ojciec@wydatki.pl</li>
      <li>matka_hope@wydatki.pl password: matka@wydatki.pl</li>
    </ul>
    <br />
    <h3>
      Uwierzytelnianie użytkowników odbywa się za pomocą wymiany JSW Token eśli
      chodzi o testy to uczę się je pisać, napotkałem tutaj trochę problemów
      skutkiem czego nie ma ich za wiele. Jest to aspekt programowania, któremu
      musze poświęcić więcej uwagi. 
      <br><br>
      Obsługę protokołu https udało mi się
      zaimplementować na serwerze w node, udało mi się wysłać poprawnie
      zapytania na tak stworzony serwer za pomocą POSTMANa, ale nie udało mi się
      tego zrobić z poziomu klienta. Koniec końców zrezygnowałem z użycia
      obsługi tego protokołu (zakomentowany kod w app.js w lini 37). 
      <br><br>
      To chyba
      tyle ode mnie, dziękuję za możliwość podjęcia się tego zadania.
      
    </h3>
    <br>
  </div>
</template>

<script>
export default {};
</script>

<style>
#container {
  margin: auto;
  padding: 50px 200px;
}
</style>