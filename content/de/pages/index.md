## Introduction

---

<br />

## Tools für diesen Crash Kurs
Die Demos schaust du dir am besten mit folgenden Tools an. Einige Probleme sind nicht immer gleich auf den ersten Blick nur im Browser Fenster ersichtlich.
- [Wave Browser Extension](https://wave.webaim.org/extension/)
- [NVDA Screenreader](https://www.nvaccess.org/download/)
- [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)

Siehe auch [Steuerung Screenreader](#steuerung)

<br />

---

<br />

## Wieso ?!
- Gesetzliche Rahmenbedingungen in der Schweiz
  - [Bundesverfassung Art. 8 (BV Art. 8)](https://www.admin.ch/opc/de/classified-compilation/19995395/index.html#a8)
  - [Behindertengleichstellungsgesetz (BehiG)](https://www.admin.ch/opc/de/classified-compilation/20002658/index.html)
  - [Behindertengleichstellungsverordnung (BehiV)](https://www.admin.ch/opc/de/classified-compilation/20031813/index.html)
- [Zertifikat](https://www.access-for-all.ch/ch/zertifizierung.html) (Aushängeschild)
- Grössere Zielgruppen
- Eigennutzen

<br />

### Bund, Kantone und Gemeinden
> Bereits in der Bundesverfassung wird festgehalten, dass niemand diskriminiert werden darf aufgrund einer Behinderung. Das im Jahr 2004 in Kraft getretene Behindertengleichstellungsgesetz regelt weitergehend auch die Dienstleistungen des Gemeinweisens. Diese müssen auch zugänglich für Menschen mit Behinderungen angeboten werden. Darunter fallen auch die Internetangebote von Bund, Kantonen und Gemeinden. [...]

> [...] Bestehende Webseiten des Bundes müssen demnach bis zum 31.12.2010 den Bedingungen der WCAG 2.0 entsprechen und mindestens die Konformitätsstufe AA erreichen. Neue Websites müssen ab sofort diese Richtlinien einhalten. [...]

Quellen:
- [https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html](https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html)

<br />

### Private
> Die Verpflichtungen von privaten Dienstleistungsanbietern gehen weniger weit. Ihnen ist es untersagt, Menschen mit Behinderungen bei der Inanspruchnahme von Dienstleistungen zu diskriminieren, d.h. eine Dienstleistung allein wegen einer Behinderung zu verweigern. Anders als der Staat sind Private jedoch nicht verpflichtet, bei ihren Dienstleistungsangeboten aktiv auf die besonderen Bedürfnisse von Menschen mit Behinderungen Rücksicht zu nehmen. Es gibt damit auch keine rechtliche Verpflichtung von Privaten, ihre Internet-Angebote behindertengerecht auszugestalten.

> Dennoch zeigt das BehiG Auswirkungen auf die Privatwirtschaft auf. Private Unternehmen setzten sich vermehrt mit der Thematik auseinander und verschiedene Websites aus der Privatwirtschaft wurden barrierefrei umgesetzt. Dabei werden teilweise auch die Richtlinien des Bundes zur Gestaltung barrierefreier Websites herangezogen.

> Grösstenteils stehen bei Privatunternehmen wirtschaftliche Aspekte bei der Umsetzung von Barrierefreiheit im Vordergrund. Eine gesamtheitliche Betrachtung von Accessibility zeigt, dass wirtschaftliche Kriterien für einen «Zugang für alle» sprechen – wer verzichtet schon freiwillig auf 15-25% der User.

Quellen:
- [https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html](https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html)


Für Bund, Bundes-nahe Betriebe, Kantone und Gemeinden ist der Fall klar. Bei Privaten kann sich eine Barrierefreie Internetseite durchaus auch lohnen. Zu den Zahlen der eingeschränkten Personen kommen wir später. Jedoch sind das relativ viele. Denken wir mal an eine Home-Delivery Webseite oder einen Online-Shop, könnte durchaus sehr attraktiv sein für bspw. Blinde Personen (gehen wir mal davon aus, das Einkaufen für blind Personen nicht immer ganz einfach ist). Das Zertifikat kann als "Aushängeschild" verwendet werden. Und auch Sie selber können davon profitieren. Schon mal einen Arm oder gar beide gebrochen, nur auf einem Auge gesehen (nach einer Schlägerei), usw. ? Wie bedienen Sie dann Ihren Computer?

<br />

---

<br />

## Für wen?
In erster Linie für eingeschränkte Personen. Ja, gut ok, aber wer alles gehört zu eingeschränkten Personen? Unter anderen folgende:
- Komplett Blinde Personen
- Personen mit anderen Sehschwächen
- Taube Personen
- Gelähmte Personen
- Motorisch eingeschränkte Personen
- Analphabeten
- Stumme Personen
- Verunfallte Personen
- Und für dich!

<br />

---

<br />

## Wen betrifft das?
- Entwicklung
- UX
- Designer
- Product Owners
- Sponsoren / Budget Verantwortliche

<br />

---

<br />

## Farben

Beginnen wir mit etwas einfacherem, das sollte sicher noch für alle verständlich sein.

Farben sind nicht nur dekorativ oft helfen sie auch bei der Benutzerführung. Wir alle verbinden automatisch gewisse Farben mit gewissen Funktionen. Gewisse Farben bzw. Bedeutungen der Farben haben wir gelernt und reagieren teil intuitiv auf diese Farben (Verkehrsampel). So ist beispielsweise ein grüner Löschen-Button für uns komisch. Ein roter Löschen-Button hingegen ist für uns logisch.

Demo: 
- <a target="_blank" href="<%- config.base %>/demo/colors-button-empty">Button empty (Bad)</a>

<br>

Farben alleine reichen jedoch nicht. Beim Beispiel vom Button wird noch ein Text oder ein Icon (benötigt in aller Regel auch noch einen Text) verwendet. 

Demo: 
- <a target="_blank" href="<%- config.base %>/demo/colors-button-text">Button Color with Text</a>
- <a target="_blank" href="<%- config.base %>/demo/colors-button-icon">Button Icon</a>

Einerseits wäre die Farbe alleine nicht aussagekräftig genug. Und andererseits können nicht alle Menschen alle Farben wahr nehmen: 

- Achromasie: Vollständige Farbenblindheit, Betroffene sehen nur Schwarz, Weiss und Graustufen
- Monochromasie: Betroffene nehmen nur eine Farbe wahr
- Dichromasie: Betroffene verwechseln zwei Farben
  - Rotblindheit (Protanopie): Bei dieser Form der Rot-Grün-Blindheit fehlen L-Zapfen, sodass Betroffene die Farbe Rot nicht wahrnehmen und mit Grün verwechseln
  - Grünblindheit (Deuteranopie): Bei dieser Form der Rot-Grün-Blindheit fehlen M-Zapfen, sodass Betroffene die Farbe Grün nicht wahrnehmen und mit Rot verwechseln
  - Blaublindheit (Tritanopie): Auch Blau-Gelb-Blindheit genannt, da Betroffene die Farbe Blau nicht wahrnehmen und mit Gelb verwechseln. Es fehlen S-Zapfen
- Teilweise Blind
- Blind 


Stand 2019 gibt es rund 377'000 Menschen mit Sehbehinderungen. Für die verschiedenen Beeinträchtigungen gibt es verschiedene Dinge zu beachten:

- Ausreichende Farbkontraste
- Klare Farben 
- Farben alleine reichen nicht
- Text Beschreibungen

<br/><br/>

*Wie wird unser Speichern Button von den verschiedenen Gruppen wahrgenommen? (Colorblinding Extension)*

<br/><br/>




Links:

- [Color Checker](https://webaim.org/resources/contrastchecker/)
- [Publikation szblind.ch 2019](https://www.szblind.ch/fileadmin/pdfs/forschung/Fachheft-Sehbehinderung-Schweiz-2019-de-BF-v01.pdf)



Quellen:

- [https://www.augenaerzte-bern.ch/farbsehstoerungen/](https://www.augenaerzte-bern.ch/farbsehstoerungen/)
- [https://www.szblind.ch/fileadmin/pdfs/forschung/Fachheft-Sehbehinderung-Schweiz-2019-de-BF-v01.pdf](https://www.szblind.ch/fileadmin/pdfs/forschung/Fachheft-Sehbehinderung-Schweiz-2019-de-BF-v01.pdf)



<br />

---

<br />



## HTML Elements

| Semantic Elements | Not semantic Elements |
| ----------------- | --------------------- |
| `<article>`       | `<div>`               |
| `<aside>`         | `<span>`              |
| `<header>`        | `<bold>`              |
| `<footer>`        | `<i>`                 |
| `<a>`             |                       |
| `<h1>`            |                       |
| `<section>`       |                       |
| `<button>`        |                       |
| `<nav>`           |                       |
| `<table>`         |                       |

(Nicht abschliessende Liste)

- Semantische Elemente geben dem Element eine Bedeutung.
- Alles, was mit semantischen Elementen gemacht werden kann, ist auch mit nicht semantischen Elementen machbar (man sollte das jedoch nicht tun)



Links: 

- [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

<br />

------

<br />


## Text / Schrift

*Was ist eigentlich  alles Text?*

Wichtig zu beachten bei der Behandlung von Textinhalten ist, dass die semantischen Strukturen innerhalb von
Textinhalten in HTML explizit ausgezeichnet werden. Überschriften als Überschriften `<hx>`, Absätze als
Paragraphen `<p>`, etc. Speziell blinde Menschen, allgemein aber für die Verwendung jeglicher maschineller
Assistenztechnologien oder Suchmaschinen, sind darauf angewiesen, dass jegliche visuell sichtbare semantische
Struktur aus dem HTML-Code ersichtlich ist. Visuelle Hervorhebung umfasst Schriftgrössen, Schriftarten,
Unterstreichungen, Nummerierungen, Einfärbungen, vergrösserte Abstände aber auch spezielle
Positionierungen von Inhalten, z.B. durch Info-Kästen.

<br />
<br />

### Schriftarten

Schriften spielen eine wichtige Rolle auf Webseiten. Auch der beste Text kann mit einer unleserlichen Schrift nicht gelesen werden. Schriften sollten gut lesbar sein. 

Demo:

- [Text Font Family](/demo/text-font-family)

<br />
<br />

### Schriftgrössen

Mit der Schriftart alleine ist es allerdings nicht getan. Zu kleine Schriften können nicht von allen Menschen gelesen werden. 

Demo:

- [Text Font Size (Wave Toolbar)](/demo/text-font-size)

<br />
<br />

### Schriftfarben


Auch die Farbe der Schrift spielt eine Rolle (Siehe Farben): grauer Text mit der Farbe `#efefef` auf weissem Hintergrund `#ffffff` (Contrast Ratio 1.14:1) ist selbst für gut sehende nicht wirklich lesbar. Bei der Berechnung des Kontrastes spielen nicht nur die Hintergrund- und die Vordergrund-Farbe eine Rolle, sondern auch die Schriftgrösse.

Demo: 

- [Text Colors (Wave Toolbar)](/demo/text-colors)

Links:
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

<br />
<br />

### Headings / Überschriften

Es gibt sechs Headign Typen:

1. `<h1>`
2. `<h2>`
3. `<h3>`
4. `<h4>`
5. `<h5>`
6. `<h6>`



*Was ist dabei zu beachten?* 

- Mehrere H1 sind ok, sofern in `<main>` Element ein H1 vorhanden ist. (SEO Spezialisten und Barrierefreiheit Spezialisten sind sich dort teilweise nicht einig. Je nach Applikation bspw. bei einer Anwendung hinter einem Login, spielt SEO wohl keine allzu grosse Rolle mehr.)
- Keine Heading Levels überspringen



*Wieso ist der Einsatz von korrekten Headings wichtig?*



Mit dem Screenreader können Headings direkt angesprungen werden. So kann man sich mit dem Screenreader sofort einen Überblick der Seitenstruktur machen. Bspw. wenn man direkt zum Inhalt will und nicht noch durch alle Navigationspunkte gehen will.

Demo:

- [Text Heading (Screenreader)](/demo/text-h)
- [Text Heading Structure (Bad) (Wave Toolbar)](/demo/text-h-structure-bad)
- [Text Heading Structure (Good) (Wave Toolbar)](/demo/text-h-structure-good)

<br />
<br />

### Text / Paragraph

Leere `<p>` Elemente werden durch assistive Technologien und Suchmaschinen als leere Paragraphen
interpretiert und sind somit semantisch besetzt (Teils Screenreader abhängig). Nur visuell sind sie nicht als solche erkennbar. HTML dient nicht
der visuellen Gestaltung, sondern der semantischen Strukturierung von Inhalten.



Semantisch nicht korrekt: `<div>Ich bin ein Text in einem div</div>` 

Semantisch korrekt: `<p>Ich bin ein Text in einem p<p>`



`<p>` wird vom Browser, Screenreader etc. als Text erkannt. Ein `<div>` stellt den Text zwar dar, mehr aber auch nicht.



Demo:

- [Text Paragraph (Screenreader)](/demo/text-p)

- [Text Paragraph Empty (Screenreader)](/demo/text-p-empty)

<br />
<br />

### Link:

*Was ist ein Link / Was macht ein Link?* 

- Verlinken von Seiten
- window.location verändern

*Welche Möglichkeiten gibt es, um das zu machen?*

- `<a>`
- Java Script
    - Custom
    - Framework Handler

Semantisch nicht korrekt: `<div onclick="window.location.href='/';">Klick mich</div>` 

Semantisch korrekt: `<a href="/">Klick mich<a>`



`<a>` wird vom Browser, Screenreader etc. als Link erkannt, die Link Funktionalität wird vom Browser zur Verfügung gestellt . Ein `<div>` kann auch klickbar gemacht werden, auch das "verlinken" ist möglich. Browser und Screenreader erkennen zudem mit einem `<a>` Tag welche Links schon besucht wurde. Dazu kommen weiter Dinge wie bspw. der Maus Cursor (Pointer). Mit JavaScript und CSS alleine ist nicht alles getan. Die Verwendung, der semantisch korrekten Elemente ist wichtig und bietet oft standard Verhalten, welche wir selber bauen müssten.

Web Frameworks wie Angular oder React bieten eigene Handlers an. Diese Router Handler fügen in der Regel auch gleich ein 'href="blah"' Attribut auf dem entsprechenden Element ein. Für Screenreader ist so klar, um was es sich handelt: Ein Link mit Ziel XY. Die Browser markieren besuchte Links zusätzlich noch als besucht. Auf diese Informationen kann der Screenreader auch zugreifen.

*Wann ist es ein Link und wann ein Button?*

WIP Button

Demo: 

[Link (Screenreader & Navigieren)](/demo/link)

<br />
<br />

### Bold/Strong

- `<bold>` ist **kein** semantisches HTML Tag. 
- `<strong>` ist **ein** semantisches HTML Tag.

Leider wird die Bedeutung einiger Elemente noch nicht von allen Screenreadern unterstützt. Die HTML Spezifikation stellt dies klar.  

Demo: 

- [Text Bold / Strong](/demo/text-bold-strong)

Link: 

- [https://developer.paciellogroup.com/blog/2008/02/screen-readers-lack-emphasis/](https://developer.paciellogroup.com/blog/2008/02/screen-readers-lack-emphasis/)

<br />
<br />

### Italic/Kursiv

- `<i>` ist **kein** semantisches HTML Tag. 
- `<em>` ist **ein** semantisches HTML Tag.

Leider wird die Bedeutung einiger Elemente noch nicht von allen Screenreadern unterstützt. Die HTML Spezifikation stellt dies klar.

Demo: 

- [Text Italic / Kursiv](/demo/text-italic-cursive)

Link: 

- [https://developer.paciellogroup.com/blog/2008/02/screen-readers-lack-emphasis/](https://developer.paciellogroup.com/blog/2008/02/screen-readers-lack-emphasis/)

<br />
<br />

### Text Styling / CSS Styles

`text-decoration: underline` wird vom Screenreader nicht beachtet (text-decoration grundsätzlich).

<br />

---

<br />

## Listen

Listen werden in der Regel mit Aufzählungszeichen (Punkt, Strich, fortlaufende Nummerierung etc.) hervorgehoben. Diese Hervorhebungen könnte man grundsätzlich auch verstecken oder anders darstellen. Wichtig dabei ist, dass die Liste semantisch als Liste ausgegeben wird. Dafür stehen folgende zwei Tags zur Verfügung:

- `<ul>` ungeordnete Liste 
- `<ol>` geordnete Liste

Neben dem korrekten Listen Element benötigen wir auch noch Listenelemente:

`<ol>` und `<ul>` mit `<li>` Child Elementen.

<br />

### Orderd List `<ol>`

Mit Nummerierung. Zu verwenden beispielsweise bei einer Anleitung, bei welcher eine gewisse Reihenfolge vorausgesetzt wird.

<br />

### Unorderd List `<ul>`

Mit Bulletpoints. Zu verwenden, wenn die Reihenfolge der Listen Elemente irrelevant ist.

Navigationen und Menüs müssen neben der Navigations-Rolle oder ```<nav>``` auch als Liste ausgewiesen werden.

<br />

---

<br />


### Tabellen

Tabellen sollen immer dann verwendet werden, wenn es darum geht Daten zu vergleichen. Bspw. Preise von verschiedenen Abonnements.

Tabellen dürfen auf keinen Fall für den Aufbau bzw. Styling für Tabellen verwendet werden. Das ist ein Relikt aus der Vergangenheit (Ausnahme Newsletter)!

Einfache Tabellen werden grundsätzlich folgendermassen aufgebaut: 

```html
<table>
	<tr>
		<th>Produkt</th>
		<th>Preis</th>
	</tr>
	<tr>
		<td>Gala Apfel</td>
		<td>CHF 0.85</td>
	</tr>
	<tr>
		<td>Gala Jazz</td>
		<td>CHF 0.90</td>
	</tr>
	<tr>
		<td>Gala Diwa</td>
		<td>CHF 0.90</td>
	</tr>
</table>
```

- Eine `<table>` hat `x` Tabellenzeilen/Tablerows `<tr>`
- Jede `<tr>` kann `x` Spalten `<td>` beinhalten
- Tabellenheader werden innerhalb eines `<tr>`  als `<th>` markiert (statt `td`)



Tabellen können jedoch mehr als nur eine Zeile mit Tableheadings beinhalten. Bspw. bei Tabellen, in welchen wir die Daten "zwei Dimensional" vergleichen wollen:

```html
<table>
	<tr>
		<th>Produkt</th>
		<th>Preis</th>
	</tr>
	<tr>
		<th>Gala Apfel</th>
		<td>CHF 0.85</td>
	</tr>
	<tr>
		<th>Gala Jazz</th>
		<td>CHF 0.90</td>
	</tr>
	<tr>
		<th>Gala Diwa</th>
		<td>CHF 0.90</td>
	</tr>
</table>
```

Jede Zeile hat hier ein eigenes Heading. Das führt dazu, dass wir die Daten in der Tabelle besser vergleichen können.



Tabellen Struktur

- `<thead>` Kopfbereich einer Tabelle, kann mehrere Zeilen beinhalten
- `<tbody>` Inhaltsbereich einer Tabelle, kann mehrere Zeilen beinhalten
- `<tfoot>` Fussbereich einer Tabelle, kann mehrere Zeilen beinhalten

```html
<table>
	<thead>
  	<tr>
		<th>Produkt</th>
		<th>Preis</th>
	</tr>
  </thead>
	<tbody>
  	<tr>
		<th>Gala Apfel</th>
		<td>CHF 0.85</td>
	</tr>
	<tr>
		<th>Gala Jazz</th>
		<td>CHF 0.90</td>
	</tr>
	<tr>
		<th>Gala Diwa</th>
		<td>CHF 0.90</td>
	</tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Durchscnittspreis</th>
      <th>CHF 0.8666667</th>
    </tr>
  </tfoot>
</table>
```



Bei Tabellen ist auch noch zu beachten, dass CSS Einfluss auf die Semantik hat. Tabellen sind grundsätzlich `display: table;`. Ändert man den Display-Wert bspw. auf `display: flex;`, so handelt es sich nicht mehr um eine Tabelle (Abhängig von der Technologie). 



Demo:

- [Table Fake (Bad)](/demo/table-fake)
- [Table 1](/demo/table-1)
- [Table 2](/demo/table-2)



Links:

- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [https://www.w3.org/WAI/tutorials/tables/](https://www.w3.org/WAI/tutorials/tables/)



*Wie machen wir dann eine Tabelle responsive?!*

*Welche Möglichkeiten gibt es?*

- Tabelle so lassen wie sie ist: X Achse Scrollbar
- Spalten umbrechen, alles untereinander oder irgendwie sonst darstellen
    - Was passiert mit dem Header?
    - Wie bleibt die Semantik erhalten?
        - Tabelle
        - Spalten- und Zeilenbezeichnung
        
        
Leider keine 0815 Lösung, welche immer und überall funktioniert. Man wird Kompromisse eingehen müssen.

---

<br />


## Bilder:

"Visuelles" Bild: <br />`<div style="background-image: url('https://picsum.photos/200/300');"></div>`

Semantisches Bild: <br /> `<img src="https://picsum.photos/200/300" alt="Random Image" />`

<br />

`<img>` werden vom Browser und Screenreader effektiv als Bild und als Seiteninhalt erkannt (werden auch indexiert). CSS `background-image` kann auch Bilder darstellen, diese dienen aber eher zu dekorativen Zwecken. 

Beim Verwenden des `<img>` muss zwingen ein `alt` Attribut mit einem Wert angegeben werden. Dieses Attribut dient als Alternativtext für assitive Technologien. Da Screenreader keine Bilder bzw. Bildinhalte vorlesen, wird der Alt-Text ausgegeben.



Demo:
- <a target="_blank" href="<%- config.base %>/demo/image-bg">Background Image</a>
- <a target="_blank" href="<%- config.base %>/demo/image-tag">Img Image</a>
- <a target="_blank" href="<%- config.base %>/demo/image-no-alt">Image no Alt</a>
- <a target="_blank" href="<%- config.base %>/demo/image-with-alt">Image with Alt</a>
- <a target="_blank" href="<%- config.base %>/demo/image-alt-complex">Image Complex</a>


<br />

---

<br />


## Formulare

`<form>` zeichnet semantisch ein Formular aus. 

<br />

### Inputs and Labels

`<input>` benötigen zwingen ein `<label>`.



Label und Input können auf zwei Arten miteinander verknüpft werden:

```html
<label for="inputID">Text</label>
<input type="text" id="inputID">
```

```html
<label>
  Text
  <input type="text" >
</label>
```

Die erste Variante bietet grundsätzlich mehr Möglichkeiten. Die zweite Option wird eher selten verwendet.

Labels dienen dazu, um ein Eingabefeld zu beschreiben. Zudem wird bei einem Klick auf ein Label auch gleich ein Klick im auf dem dazugehörigen Eingabefeld ausgelöst.


Demo:

- <a target="_blank" href="<%- config.base %>/demo/form-inputs-labels">Inputs with Labels</a>


Links:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

<br />

### Fieldset (Gruppen)

Fieldset werden verwendet, um Gruppen innerhalb eines Formulars semantisch auszuweisen. 

- Ein `<fieldset>` ist nur innerhalb einer `<form>` valid.
- Ein `<fieldset>` benötigt zwingen einen `<legend>` als Child-Element.

Links:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

<br />

#### Komplexerre Inputs / Gruppen & Formularabschnitte

Es gibt verschiedene Arten von Gruppierungen innerhalb eines Formulars. Beide werden mit dem `<fieldset>` und `<legend>` ausgewiesen.

- Formularabschnitte
- Input Gruppen:

<br />

#### Formularabschnitte

Gruppieren von zusammengehörenden Inputs bspw. Benutzerdaten: E-Mail, Benutzername, Passwort und Kontaktdaten: Strasse, Hausnummer, PLZ, Ort etc. Oder bspw. bei einem Bestellformular gibt es möglicherweise zweimal ein Eingabefeld für eine Strasse, da man eine Versandadresse und eine Rechnungsadresse haben kann. Würde man diese Felder nicht gruppieren, würde der Screenreader Benutzer nur zuhören bekommen, dass er eine Strasse eingeben muss. Da er womöglich fünf Tabs vorher schon eine Strasse ausgefüllt hat, kann das irritierend sein. Mal abgesehen davon, dass er nicht weiss, ob er nun die Rechnung oder das Paket erhält.

```html
<form>
  <fieldset>
    <legend>
      Empfänder
    </legend>
    <div>
      <label for="recipientFirstName">Vorname</label>
      <input type="text" id="recipientFirstName">
    </div>
    <div>
      <label for="recipientLastName">Nachname</label>
      <input type="text" id="recipientLastName">
    </div>
  </fieldset>
  <fieldset>
    <legend>
      Rechnungsadresse
    </legend>
    <div>
      <label for="paymentFirstName">Vorname</label>
      <input type="text" id="paymentFirstName">
    </div>
    <div>
      <label for="paymentLastName">Nachname</label>
      <input type="text" id="paymentLastName">
    </div>
  </fieldset>
</form>
```

Demo:

- <a target="_blank" href="<%- config.base %>/demo/form-fieldset-section-bad">Fieldset Section - Bad (no fieldset)</a>
- <a target="_blank" href="<%- config.base %>/demo/form-fieldset-section-good">Fieldset Section - Good</a>

<br />

#### Input Gruppen

Radiobuttons oder Checkboxen setzen sich jeweils zusammen aus einem Input und einem Label. In der Praxis kommen Checkboxen oder Radiobuttons aber vor allem dann zum Einsatz, wenn man eine Auswahl machen muss. Bspw. Farbauswahl eines Smartphones.

Man könnte alle Radiobuttons und Labels einzeln ausgeben und als Label jeweils etwas in der Art wie "Farbe Blau" setzen. Besser wäre es allerdings, wenn wir alle Radiobuttons als Farbe Gruppe ausgewiesen sind:

``` html
<form>
    <fieldset>
        <legend>Jackenfarbe</legend>
        <div>
            <input type="radio" name="color" id="input1">
            <label for="input1">Grün</label>
        </div>
        <div>
            <input type="radio" name="color" id="input2">
            <label for="input2">Blau</label>
        </div>
        <div>
            <input type="radio" name="color" id="input3">
            <label for="input3">Schwarz</label>
        </div>
    </fieldset>
</form>
```



Bei einfachen Checkboxen wie bspw. AGB akzeptieren, ist dies nicht nötig - da hat es nur eine Checkbox.

Demo:

- <a target="_blank" href="<%- config.base %>/demo/form-fieldset-group-bad">Fieldset Group - Bad (no fieldset)</a>
- <a target="_blank" href="<%- config.base %>/demo/form-fieldset-group-good">Fieldset Group - Good</a>


Links: 
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

<br />

### Formular / Input Zusatz Informationen

- Tooltips
- Fehler
- Hinweise
- Erklärungen
- Pflichtfeld Angaben

Müssen alle auch Barrierefrei sein.


<br />

### Disabled

Das disabled Attribute kann auf Input Elemente gesetzt werden. Dabei ist zu beachten, sobald ein disabled Attribut gesetzt ist, diese immer als true interpretiert wird. `disabled="false"` ist ungültig!

disabled hat immer den selben Effekt:

- `disabled="false"`
- `disabled="true"`
- `disabled`

<br />

### Readonly

Das readonly Attribute kann auf Input Elemente gesetzt werden. Dabei ist zu beachten, sobald ein readonly Attribut gesetzt ist, diese immer als true interpretiert wird. `readonly="false"` ist ungültig! (Genau wie disabled)

readonly hat immer den selben Effekt:

- `readonly="false"`
- `readonly="true"`
- `readonly`

<br />

Bei readonly ist zu beachten, dass die nicht auf allen Elementen erwartungsmäss funktioniert! Checkboxen und Radiobuttons können trotz readyonly verändert werden. 

<br />

------

<br />

## Aria-Attribute, Role-Attribute und Tabindex-Attribut

Overlays / Dialoge / Modals



aria-label

Kann auf allen fokussierbaren und Text Elementen verwendet werden. Falls ein Label (mittels for Attribut) verknüpft, kann es sein, dass das Label nicht mehr vorgelesen wird. 

Links:
- [https://w3c.github.io/using-aria/#do](https://w3c.github.io/using-aria/#do)

<br />

---

<br />

### Tabindex

Mit dem `tabindex` Attribut können wir die Fokus-Reihenfolge innerhalb des Doms manipulieren. Wird verwenden, um zusätzliche Tab-Stopps im DOM hinzuzufügen oder um Elemente nicht fokussierbar zu machen.

- `tabindex="-1"` Das Element ist nicht fokussierbar
- `tabindex="0"` Das Element ist fokussierbar. Das Element behält seine Position in der Tab-Reihenfolge entsprechend seiner Position in DOM bei.
- `tabindex="1"` Das Element ist fokussierbar. Das Element verliert seine Position in der Tab-Reihenfolge und wird "hinten angehängt". Dieses Verhalten ist bei allen Werten >= 1. Der Wert des Attributes bestimmt die neue Reihenfolge. Je nachdem, wo man sich auf der Seite befindet, werden die Elemente wie folgt durchgegangen: Fokus auf einem Element in der normalen Tab-Reihenfolge: Zuerst werden alle "normal fokussierbaren" und tabindex="0" Elemente durchgegangen, anschliessen die Reihenfolge entsprechend des Attribut-Wertes. Ist man bspw. im URL-Feld, werden alle tabindex >= 1 durchgegangen.

 (Sollte man nicht verwenden, macht grundsätzlich eher mehr kaputt als es hilft).



Links:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)

<br />

---

<br />

## CSS Einfluss

CSS hat zum Teil direkten Einfluss auf die Semantik von Elementen, jedoch nicht überall.

`display: none;` Entfernt das Element für den Screenreader aus dem DOM

`display: block;` Fügt das Element für den Screenreader in dem DOM

`visibility: hidden;` Entfernt das Element für den Screenreader aus dem DOM 

`visibility: visible;` Fügt das Element für den Screenreader in dem DOM

 `opacity: 1;` -> visible for screen readers
  
  `opacity: 0;` -> visible for screen readers



Text Styling wie `text-decoration`, `font-weight`  allerdings keinen Einfluss!

<br />

---

<br />

## Screenreader

<br />

### Programme:

- [NVDA (Windows, kostenlos)](https://www.nvaccess.org/download/)
- [JAWS (40min Demo, sonst teuer)](https://support.freedomscientific.com/Downloads/JAWS)
- VoiceOver (OSX, vorinstallier)
- VoiceOver (iOS / iPasOS, vorinstallier)
- Android (vorinstallier)

<br />

### Steuerung

#### Focus Mode

Die Steuerung des Screenreaders wird via "Tab" / Tabulator ausgeführt. Der Screenreader geht durch den DOM und stoppt bzw. fokussiert jedes fokussierbare Element (Tab-Stopp). Fokussierbar sind grundsätzlich alle arten von Eingabefeldern (`<input>`, `<textarea>`, etc.) und Schaltflächen (`<button>`, `<a>`). Zusätzliche Tab-Stopp können via HTML oder JavaScript hinzugefügt werden: Setzen des `tabindex` Attributes. 

<br />

#### Browse Mode

Die Steuerung des Screenreaders wird via Pfeiltasten ausgeführt. Der Screenreader springt so von Text-Element zu Text-Element.

<br />

#### Shortcuts

##### H (Headings)

Sprint von Heading zu Heading

##### L (Links)

Sprint von Link zu Link

[https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)

### Texte nur für Screenreader

Wir müssen den Text visuelle verstecken, aber wir müssen ihn für den Screenreader zugänglich lassen. `display: none;` und `visibility: hidden;` können wir daher nicht nutzen. Dies ist eine Möglichkeit, wie man das mit einer CSS Klasse lösen könnte.

```css
.sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
      }
```

```html
<a href="#"><span class="sr-only">Zahlungs</span> Details <span class="sr-only">anzeigen</span></a>
```



Links:

https://tailwindcss.com/docs/screen-readers

Quellen:

https://tailwindcss.com/docs/screen-readers



### Texte vom Screenreader verbergen

- `tabindex="-1"` Attribut
- `aria-hidden` Attribut
- `display: none` oder `visibility: hidden`CSS (Text ist auch visuell nicht mehr sichtbar)



------



## Weitere Aspekte

- PDF 
- Multimediale Inhalte (Video)
