# Forms
## Fieldset - Formularabschnitte (Good)

<form>
  <fieldset>
    <legend>
      Empfänger
    </legend>
    <div>
      <label for="recipientFirstName">Vorname</label>
      <input type="text" style="border: 1px solid black;" id="recipientFirstName">
    </div>
    <div>
      <label for="recipientLastName">Nachname</label>
      <input type="text" style="border: 1px solid black;" id="recipientLastName">
    </div>
  </fieldset>
  <fieldset>
    <legend>
      Rechnungsadresse
    </legend>
    <div>
      <label for="paymentFirstName">Vorname</label>
      <input type="text" style="border: 1px solid black;" id="paymentFirstName">
    </div>
    <div>
      <label for="paymentLastName">Nachname</label>
      <input type="text" style="border: 1px solid black;" id="paymentLastName">
    </div>
  </fieldset>
</form>

```html
<form>
  <fieldset>
    <legend>
      Empfänder
    </legend>
    <div>
      <label for="recipientFirstName">Vorname</label>
      <input type="text" style="border: 1px solid black;" id="recipientFirstName">
    </div>
    <div>
      <label for="recipientLastName">Nachname</label>
      <input type="text" style="border: 1px solid black;" id="recipientLastName">
    </div>
  </fieldset>
  <fieldset>
    <legend>
      Rechnungsadresse
    </legend>
    <div>
      <label for="paymentFirstName">Vorname</label>
      <input type="text" style="border: 1px solid black;" id="paymentFirstName">
    </div>
    <div>
      <label for="paymentLastName">Nachname</label>
      <input type="text" style="border: 1px solid black;" id="paymentLastName">
    </div>
  </fieldset>
</form>
```

---

Demo:

- [Form Section Good](/accessibility-crash-course/demo/form-fieldset-section-good)
