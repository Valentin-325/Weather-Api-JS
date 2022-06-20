In aceasta aplicatie mi-am dorit sa afisez pe ecran informatii utile despre vreme, unui utilizator normal.
Asa ca am considerat ca ar fi de folos ca acesta sa stie detalii despre: cate grade sunt afara, umiditate si puterea cu care sufla vantul(si daca este cerul senin sau cu nori).
Pentru a afisa aceste lucruri, am atasat cheia api-ului intr-o variabila, iar in link am folosit inca o variabila "city" pentru orasul cautat.
In url am introdus "units=metric" pentru ca informatia despre cate grade sunt sa fie afisata in grade Celsius, acesta venind by default in grade Fahrenheit. Pentru a nu aparea temperaturi de genul "25.78" am folosit ".toFixed(0)".

Apoi am folosit functia "displayWeather" cu parametru "data" pentru a putea extrage informatiile de care avem nevoie de la api pentru a le afisa.
Pentru a utiliza mai eficient aceasta aplicatie pe versiunea desktop (design-ul este responsive #mobilefirst) am creat o functie care atunci cand apasam "Enter" da search pentru a nu mai da click pe buton.
