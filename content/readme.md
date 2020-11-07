# Accessibility / Barrierefreiheit

Von Grobabrieb für Einsteiger bis zu fortegschritteneren Themen.
Fühl dich frei bekannte Theme zu überspringen.

## Tools für diesen Crash Kurs
Die Demos schaust du dir am besten mit folgenden Tools an. Einige Probleme sind nicht immer gleich auf den ersten Blick nur im Browser Fenster ersichtlich.
- [Wave Browser Extension](https://wave.webaim.org/extension/)
- [NVDA Screenreader](https://www.nvaccess.org/download/)

Siehe auch noch [Steuerung Screenreader](#steuerung)

## Wieso ?!
- Gesetzliche Rahmenbedingungen in der Schweiz
  - Bundesverfassung Art. 8 (BV Art. 8)
  - Behindertengleichstellungsgesetz (BehiG)
  - Behindertengleichstellungsverordnung (BehiV)
- Zertifikat (Aushängeschild)
- Grössere Zielgruppen
- Eigennutzen

### Bund, Kantonen und Gemeinden
Bereits in der Bundesverfassung wird festgehalten, dass niemand diskriminiert werden darf aufgrund einer Behinderung. Das im Jahr 2004 in Kraft getretene Behindertengleichstellungsgesetz regelt weitergehend auch die Dienstleistungen des Gemeinweisens. Diese müssen auch zugänglich für Menschen mit Behinderungen angeboten werden. Darunter fallen auch die Internetangebote von Bund, Kantonen und Gemeinden. [...]

[...] Bestehende Webseiten des Bundes müssen demnach bis zum 31.12.2010 den Bedingungen der WCAG 2.0 entsprechen und mindestens die Konformitätsstufe AA erreichen. Neue Websites müssen ab sofort diese Richtlinien einhalten. [...]

Quellen:
- [https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html](https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html)

### Private
Die Verpflichtungen von privaten Dienstleistungsanbietern gehen weniger weit. Ihnen ist es untersagt, Menschen mit Behinderungen bei der Inanspruchnahme von Dienstleistungen zu diskriminieren, d.h. eine Dienstleistung allein wegen einer Behinderung zu verweigern. Anders als der Staat sind Private jedoch nicht verpflichtet, bei ihren Dienstleistungsangeboten aktiv auf die besonderen Bedürfnisse von Menschen mit Behinderungen Rücksicht zu nehmen. Es gibt damit auch keine rechtliche Verpflichtung von Privaten, ihre Internet-Angebote behindertengerecht auszugestalten.

Dennoch zeigt das BehiG Auswirkungen auf die Privatwirtschaft auf. Private Unternehmen setzten sich vermehrt mit der Thematik auseinander und verschiedene Websites aus der Privatwirtschaft wurden barrierefrei umgesetzt. Dabei werden teilweise auch die Richtlinien des Bundes zur Gestaltung barrierefreier Websites herangezogen.

Grösstenteils stehen bei Privatunternehmen wirtschaftliche Aspekte bei der Umsetzung von Barrierefreiheit im Vordergrund. Eine gesamtheitliche Betrachtung von Accessibility zeigt, dass wirtschaftliche Kriterien für einen «Zugang für alle» sprechen – wer verzichtet schon freiwillig auf 15-25% der User.

Quellen:
- [https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html](https://www.access-for-all.ch/ch/richtlinien-barrierefreiheit/68-gesetz-schweiz.html)


> Für Bund, Bundesnahe Betriebe, Kantone und Gemeinden ist der Fall klar. Bei Privaten kann sich eine Barrierefreie Internetseite durchaus auch lohnen. Zu den Zahlen der Eingeschränkten Personen kommen wir später. Jedoch sind das relativ viele. Denken wir mal an eine Home-Delivery Webseite oder einen Online Shop, könnte durchaus sehr attraktiv sein für bspw. Blinde Personen (gehen wir mal davon aus, das Einkaufen für Bline Personen nicht immer ganz einfach ist). Das Zertifikat kann als "Aushängeschild" verwendet werden. Und auch Sie selber können davon profitieren. Schon mal einen Arm oder gar beide gebrochen, nur auf einem Auge gesehen (nach einer Schlägerei), usw. ? Wie bedienen Sie dann Ihren Computer?

## Für wen?
In erster Linie für Eingeschränkte Personen. Ja gut ok, aber wer alles gehört zu eingeschränkten Personen?
- Komplett Blinde Personen
- Personen mit anderen Sehschwächen
- Taube Personen
- Gelähmte Personen
- Motorisch eingeschränkte Personen
- Analphabeten
- Stummepersonen
- Verunfallte Personen
- Und für dich!

## Wen betrifft das?
- Entwicklung
- UX
- Designer
- Product Owners
- Sponsoren / Budget Verantwortliche

## Farben

Farben sind nicht nur dekorativ oft helfen sie auch bei der Benutzerfüehrung. Wir alle verbinden automatisch gewisse farben mit gewissen Funktionen. So ist beispielweise ein grüner Löschen Button für uns komisch. Ein roter Löschen Button hingegen ist für uns logisch.

Demo: 
- [Button empty (Bad)](/demo/colors-button-empty)

<br>

Farben alleine reichen jedoch nicht. Beim Beispiel vom Button wird meistens noch ein Text oder ein Icon verwendet. 

Demo: 
- [Button Color with Text](/demo/colors-button-text)
- [Button Icon](/demo/colors-button-icon)

Einerseits wäre die Farbe alleine nicht aussagekräftig genug, was dann genau passiert und andererseits können nicht alle Menschen alle Farben wahr nehmen: 

- Achromasie: Vollständige Farbenblindheit, Betroffene sehen nur Schwarz, Weiss und Graustufen
- Monochromasie: Betroffene nehmen nur eine Farbe wahr
- Dichromasie: Betroffene verwechseln zwei Farben
  - Rotblindheit (Protanopie): Bei dieser Form der Rot-Grün-Blindheit fehlen L-Zapfen, sodass Betroffene die Farbe Rot nicht wahrnehmen und mit Grün verwechseln
  - Grünblindheit (Deuteranopie): Bei dieser Form der Rot-Grün-Blindheit fehlen M-Zapfen, sodass Betroffene die Farbe Grün nicht wahrnehmen und mit Rot verwechseln
  - Blaublindheit (Tritanopie): Auch Blau-Gelb-Blindheit genannt, da Betroffene die Farbe Blau nicht wahrnehmen und mit Gelb verwechseln. Es fehlen S-Zapfen
- Teilweise Blind
- Blind 


*Stand 2019 gibt es rund 377'000 Menschen mit Sehbehinderungen. Für die verschiedenen Beeinträchtigungen gibt es verschiedene Dinge zu beachten:*

- *Ausreichende Farbkontraste*
- *Farben alleine reichen nicht*
- *Text Beschreibungen*

<br/><br/>

> Wie wird unser Speichern Button von den verschiedenen Gruppen wahrgenommen?

<br/><br/>




Links:

- [Color Checker](https://webaim.org/resources/contrastchecker/)
- [Publikation szblind.ch 2019](https://www.szblind.ch/fileadmin/pdfs/forschung/Fachheft-Sehbehinderung-Schweiz-2019-de-BF-v01.pdf)



Quellen:

- [https://www.augenaerzte-bern.ch/farbsehstoerungen/](https://www.augenaerzte-bern.ch/farbsehstoerungen/)
- [https://www.szblind.ch/fileadmin/pdfs/forschung/Fachheft-Sehbehinderung-Schweiz-2019-de-BF-v01.pdf](https://www.szblind.ch/fileadmin/pdfs/forschung/Fachheft-Sehbehinderung-Schweiz-2019-de-BF-v01.pdf)



------



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
- Alles was mit semantischen Elementen gemacht werden kann, ist auch mit nicht semantischen Elementen machbar (man sollte das jedoch nicht tun)



Links: 

- [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

------



## Texte:

> Was ist eingetlich alles Text?

Wichtig zu beachten bei der Behandlung von Textinhalten ist, dass die semantischen Strukturen innerhalb von
Textinhalten in HTML explizit ausgezeichnet werden. Überschriften als Überschriften `<hx>`, Absätze als
Paragraphen `<p>`, etc. Speziell blinde Menschen, allgemein aber für die Verwendung jeglicher maschineller
Assistenztechnologien oder Suchmaschinen, sind darauf angewiesen, dass jegliche visuell sichtbare semantische
Struktur aus dem HTML-Code ersichtlich ist. Visuelle Hervorhebung umfasst Schriftgrössen, Schriftarten,
Unterstreichungen, Nummerierungen, Einfärbungen, vergrösserte Abstände aber auch spezielle
Positionierungen von Inhalten, z.B.: durch Info-Kästen.



### Schriftarten

Schriften spielen eine wichtige Rolle auf Webseiten. Auch der beste Text kann mit einer unleserlichen Schrift nicht gelesen werden. Schriften sollten gut lesbar sein. 

Demo:

- [Text Font Family](/demo/text-font-family)

### Schriftgrössen

Mit der Schriftart alleine ist es allerdings nicht getan. Zu kleine Schriften können nicht von allen Menschen gelesen werden. 

Demo:

- [Text Font Size](/demo/text-font-size)

### Schriftfarben


Auch die Farbe der Schrift spielt eine Rolle (Siehe Farben): grauer Text mit der Farbe `#efefef` auf  weissem Hintergrund `#ffffff` (Contrast Ratio 1.14:1) ist selbst für gut sehende nicht wirklich lesbar.

Demo: 

- [Text Colors](/demo/text-colors)


### Headings / Überschriften

Es gibt sechs headign Typen:

1. `<h1>`
2. `<h2>`
3. `<h3>`
4. `<h4>`
5. `<h5>`
6. `<h6>`



Was ist dabei zu beachten? 

- Mehrere H1 sind ok, sofern in `<main>` Element ein H1 vorhanden ist
- Keine Heading Levels überspringen



> Wieso ist der Einsatz von korrekten Headings wichtig?



*Mit dem Screenreader können Headings direkt angesprungen werden. So kann man sich mit dem Screenreader sofort einen Überblick der Seitenstruktur machen. Bspw. wenn man direkt zum Inhalt will und nicht noch durch alle Navigationspunkte gehen will.* 

Demo:

- [Text Heading](/demo/text-h)
- [Text Heading Structure (Bad)](/demo/text-h-structure-bad)
- [Text Heading Structure (Good)](/demo/text-h-structure-good)



### Text / Paragraph

Leere `<p>` Elemente werden durch assistive Technologien und Suchmaschinen als leere Paragraphen
interpretiert und sind somit semantisch besetzt. Nur visuell sind sie nicht als solche erkennbar. HTML dient nicht
der visuellen Gestaltung sondern der semantischen Strukturierung von Inhalten.



Semantisch nicht korrekt: `<div>Ich bin ein Text in einem div</div>` 

Semantisch korrekt: `<p>Ich bin ein Text in einem p<p>`



`<p>` wird vom Browser, Screenreader etc. als Text erkannt. Ein `<div>` stellt den Text zwar dar, aber mehr passiert mit dem Text nicht.*



Demo:

- [Text Paragraph](/demo/text-p)

- [Text Paragraph Empty](/demo/text-p-empty)



### Link:

> Was ist ein Link? 


Semantisch nicht korrekt: `<div onclick="window.location.href='/';">Klick mich</div>` 

Semantisch korrekt: `<a href="/">Klick mich<a>`



*`<a>` wird vom Browser, Screenreader etc. als Link erkannt, die Link Funktionalität wird vom Browser zur Verfügung gestellt . Ein `<div>` kann auch klickbar gemacht werden, auch das "verlinken" ist möglich. Browser und Screenreader erkennen zudem mit einem `<a>` Tag welche Links schon besucht wurde. Dazu kommen weiter Dinge wie bspw. der Maus Cursor (Pointer). Mit JavaScript und CSS alleine ist nicht alles getan. Die Verwendung der semantisch korrekten Elemente ist wichtig und bietet oft standart Verhalten, welche wir selber bauen müssten.*



> Wann ist es ein Link und wann ein Button?



Demo: 

[Link](/demo/link)

### Bold/Strong

- `<bold>` ist **kein** semantisches HTML Tag. 
- `<strong>` ist **ein** semantisches HTML Tag.

Demo: 

- [Text Bold / Strong](/demo/text-bold-strong)

### Italic/Kursiv

- `<i>` ist **kein** semantisches HTML Tag. 
- `<em>` ist **ein** semantisches HTML Tag.

Demo: 

- [Text Italic / Kursiv](/demo/text-italic-cursive)

### Text Styling

`text-decoration: underline` wird vom Screenreader nicht beachtet (text-decoration grundsätzlich).

### Listen

Listen werden in der Regel mit Aufzählungszeichen (Punkt, Strich, fortlaufende Nummerierung etc.) hervorgeben. Diese Hervorhebungen könnte man grundsätzlich auch verstecken oder spezieller darstellen. Wichtig dabei ist, dass die Liste semantisch als Liste ausgegeben wird. Dafür stehen folgende zwei Tags zur verfügung:

- `<ul>` ungeordnete Liste 
- `<ol>` geordnete Liste

Neben dem korrekten Listen Element benötigen wir auch noch Listenelemente:

`<ol>` und `<ul>` mit `<li>` Child Elementen.

#### Orderd List `<ol>`

Mit Nummerierung. Zu verwenden beiwpielsweise bei einer Anleitung, bei welcher eine gewisse Reihenfolge vorausgesetzt wird.

#### Unorderd List `<ul>`

Mit Bulletpoints. Zu verwenden wenn die Reihenfolge der Listen Elemente irrelevant ist.

Navigationen und Menus müssen neben der Navigations-Rolle oder ```<nav>``` auch als Liste ausgewiesen werden.

------


### Tabellen

Tabellen sollen immer dann verwendet werden, wenn es darum geht Daten zu vergleichen. Bspw. Preise von verschiedenen Abbonements.

Tabellen dürfen auf keinen Fall für den Aufbau bzw. Styling für Tabellen verwendet werden. Das ist ein Relikt aus der Vergangenheit (aussnahme Newsletter)!

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

Jede Zeile hat hier ein eigenes Heading. Das führt dazu, dass wir die Daten in der Tabelle besser gergleichen können.



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



Bei Tabellen ist auch noch zu beachten das CSS Einfluss auf die semantische Bedeutung hat. Tabellen sind grundsätzlich `display: table;`. Ändert man den Display Wert bspw. auf `display: flex;`, so handelt es sich nicht mehr um eine Tabelle (Abhängig von der Technologie). 



Demo:

- [Table Fake (Bad)](/demo/table-fake)
- [Table 1](/demo/table-1)
- [Table 2](/demo/table-2)



Links:

- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [https://www.w3.org/WAI/tutorials/tables/](https://www.w3.org/WAI/tutorials/tables/)



> Wie machen wir dann eine Tabelle responsive?!




### Bilder:

"Visuelles" Bild: `<div style="background-image: url('https://picsum.photos/200/300');"></div>`

Semantisches Bild: `<img src="https://picsum.photos/200/300" alt="Random Image" />`



`<img>` werden vom Browser und Screenreader effektiv als Bild und als Seiteninhalt erkannt (werden auch indexiert). CSS `background-image` kann auch Bilder darstellen, diese dienen aber eher zu dekorativen Zwecken. 

Beim Verwenden des `<img>` muss zwingen ein `alt` Attribut mit einem Wert angegeben werden. Dieses Attribut dient als Alternativtext für assitive Technologien. Da Screenreader keinen Bilder bzw. Bildinhalte vorlesen, wir der Alt-Text ausgegeben.



Demo:

- [Table Fake (Bad)](/demo/table-fake)
- [Table 1](/demo/table-1)





## Formulare

`<form>` zeichnet semantisch ein Formular aus. 



## Inputs and Labels

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

Labels dienen dazu um ein Eingabefeld zu beschreiben. Zudem wird bei einem Klick auf ein Label auch gleich ein Klick im auf dem dazugehörigen Eingabefeld ausgelöst.


Demo:

- [Images Img Tag](/demo/form-inputs-labels)


Links:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)



### Fieldset (Gruppen)

Fieldset werden verwendet um Gruppen Innerhalb eines Formulares semantisch auszuweisen. 

- Ein `<fieldset>` ist nur innerhalb einer `<form>` valid.
- Ein `<fieldset>` benötigt zwingen einen `<legend>` als Child-Element.

Links:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)



### Komplexerre Inputs / Gruppen & Formularabschnitte

Es gibt verschiedene Arten von Gruppierungen innerhalb eines Formulares. Beide werden mit dem `<fieldset>` und `<legend>` ausgewisen.

- Formularabschnitte
- Input Gruppen:



#### Formularabschnitte

Gruppieren von zusammengehörenden Inputs bspw. Benutzerdaten: Email, Benutzername, Passwort und Kontaktdaten: Strasse, Hausnummer, PLZ, Ort etc. Oder bspw. bei einem Bestellformular gibt es möglicherweisse zweimal ein Eingabefeld für eine Strasse, da man einen Versandadresse und eine Rechnungsadresse haben kann. Würde man diese Felder nicht gruppieren, würde der Screenreader Benutzer nur zuhören bekommen, dass er eine Strasse eingeben muss. Da er womöglich fünf Tabs vorher schon eine Strasse ausgefüllt hat, kann das irritierend sein. Mal abgesehen davon, dass er nicht weiss ob er nun die Rechnung oder das Paket erhält.

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



#### Input Gruppen

Radiobuttons oder Checkboxen setzen sich jeweils zusammen aus einem Input und einem Label. In der Praxis kommen Checkboxen oder Radiobuttons aber vorallem dann zum Einsatz, wenn man eine Auswahl machen muss. Bspw. Farbauswahl eines Smartphones.

Man könnte alle Radiobuttons und Labels einzelen ausgeben und als Label jeweils etwas in der Art wie "Farbe Blau" setzen. Besser wäre es allerdings, wenn wir alle Radiobuttons als  Farbe Gruppe ausgewiesen sind:

```html
<form>
  <div>
      <label for="model">Model</label>
      <select type="text" id="model">
        <option>Bitte wählen</option>
        <option value="1">iPhone Xs</option>
        <option value="2">iPhone X</option>
        <option value="3">iPhone 5s</option>
	    </select>
    </div>
  <fieldset>
    <legend>
      Farbe
    </legend>
    <div>
      <input type="radio" value="red" id="red" name="color">
      <label for="red">Red</label>
    </div>
    <div>
      <input type="radio" value="spacegrey" id="spacegrey" name="color">
      <label for="spacegrey">Space Grey</label>
    </div>
    <div>
      <input type="radio" value="rose" id="rose" name="color">
      <label for="rose">Rose</label>
    </div>
  </fieldset>
</form>
```



Bei einfachen Checkboxen wie bspw. AGB akzeptieren, ist dies nicht nötig - da hat es ja nur eine Checkbox.



Links: 

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)



#### Disabled



------



## Aria-Attribute, Role-Attribute und Tabindex-Attribut

Overlays / Dialoge / Modals



aria-label

Kann auf allen fokussierbaren und Text Elementen verwendet werden. Falls ein Label (mittels for) verknüpft, kann es sein, dass das Label nicht mehr vorgelesen wird. 



### Tabindex

Mit dem `tabindex` Attribut können wir die Fokusreihenfolge innerhalb des Doms manipullieren. Wird verwenden um zusätzliche Tab-Stops im DOM hinzuzufügen oder um Elemente nicht fokussierbar zu machen.

- `tabindex="-1"` Das Element ist nicht fokussierbar
- `tabindex="0"` Das Element ist fokussierbar. Das Element behält seine Position in der Tabreihenfolge entsprechend seiner Position in DOM bei.
- `tabindex="1"` Das Element ist fokussierbar. Das Element verliert seine Position in der Tabreihenfolge und wird "hinten angehängt". Dieses Verhalten ist bei allen Werten >= 1. Der Wert des Attributes bestimmt die neuen Reihenfolge. Zuerst werden alle "normal fokussierbaren" und tabindex="0" Elemente durchgegangen, anschliessen die Reihenfolge entsprechend des Attributwertes. (Sollte man nicht verwenden, macht grundsätzlich eher mehr kaputt als es hilft).



Links:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)



## CSS Einfluss

CSS hat zum Teil direkten Einfluss auf die semantische Bedeutung von Elementen, jedoch nicht überall.

`display: none;` Entfernt das Element für den Screenreader aus dem DOM

`display: block;` Fügt das Element für den Screenreader in dem DOM

`visibility: hidden;` Entfernt das Element für den Screenreader aus dem DOM  

`visibility: visible;` Fügt das Element für den Screenreader in dem DOM



Text Styling wie `text-decoration`, `font-weight` haben allerdings keinen Einfluss!



## Screenreader

### Programme:

- [NVDA (Windows, kostenlos)](https://www.nvaccess.org/download/)
- [JAWS (40min Demo, sonst teuer)](https://support.freedomscientific.com/Downloads/JAWS)
- VoiceOver (OSX, vorinstallier)
- VoiceOver (iOS / iPasOS, vorinstallier)
- Android (vorinstallier)

### Steuerung

#### Focus Mode

Die Steuerung des Screenreaders wird via "Tab" / Tabulator ausgeführt. Der Screenreader geht durch den DOM und stopt bzw. fokusiert jedes fokussierbare Element (Tab-Stop). Fokussierbar sind grundsätzlich alle arten von Eingabefeldern (`<input>`, `<textarea>`, etc.) und Schaltflächen (`<button>`, `<a>`). Zusätzliche Tab-Stop können via HTML oder JavaScript hinzugefügt werden: Setzen des `tabindex` Attributes. 





#### Browse Mode

Die Steuerung des Screenreaders wird via Pfeiltasten ausgeführt. Der Screenreader sprint so von Text-Element zu Text-Element.



#### Shortcuts

##### H (Headings)

Sprint von Heading zu Heading

##### L (Links)

Sprint von Link zu Link

### Texte nur für Screenreader

Wir müssen den Text visuelle verstecken, aber wir müssen ihn für den Screenreader zugänglich lassen. `display: none;` und `visibility: hidden;` können wir daher nicht nutzen. Dies ist eine Möglichkeit, wie man das mit eine CSS Klasse lösen könnte.

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
