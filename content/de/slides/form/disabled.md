# Forms
## Fieldset - Groups (Bad)

<form>
    <div>
        <p>Jackenfarbe</p>
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
    </div>
</form>

``` html
<form>
    <div>
        <p>Jackenfarbe</p>
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
    </div>
</form>
```

---

Demo:

- [Form Group Bad](/accessibility-crash-course/demo/form-fieldset-group-bad)
