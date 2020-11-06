# Text Styling
## What about this?

<div class="flex flex-wrap">
<div class="w-1/6">
	<p>
		Bad
	<p>
</div>
<div class="w-2/6">
	<p>3<span style="font-size: .7em; position: relative; top: -8px;">2</span> = 9</p>
</div>
<div class="w-3/6">

``` html
	<p>3<span style="font-size: .7em; position: relative; top: -8px;">2</span> = 9</p>
```
</div>
<div class="w-1/6">
	<p>
		Bad
	<p>
</div>
<div class="w-2/6">
	<p>H<span style="font-size: .7em; position: relative; bottom: -6px;">2</span>O</p>
</div>
<div class="w-3/6">

``` html
	<p>H<span style="font-size: .7em; position: relative; bottom: -6px;">2</span>O</p>
```
</div>
<div class="w-1/6">
	<p>
		Bad
	<p>
</div>
<div class="w-2/6">
	<p>3<sup>2</sup> = 9</p>
</div>
<div class="w-3/6">

``` html
	<p>3<sup>2</sup> = 9</p>
```
</div>
<div class="w-1/6">
	<p>
		Bad
	<p>
</div>
<div class="w-2/6">
	<p>H<sub>2</sub>O</p>
</div>
<div class="w-3/6">

``` html
	<p>H<sub>2</sub>O</p>
```
</div>
<div class="w-1/6">
	<p>
		Maybe better
	<p>
</div>
<div class="w-2/6">
	<p>3^2 = 9</p>
</div>
<div class="w-3/6">

``` html
	<p>3^2 = 9</p>
```
</div>
<div class="w-1/6">
	<p>
		Maybe better
	<p>
</div>
<div class="w-2/6">
	<p>H2O</p>
</div>
<div class="w-3/6">

``` html
	<p>H2O</p>
```
</div>
<div class="w-1/6">
	<p>
		Maybe best
	<p>
</div>
<div class="w-2/6">
	<p><span aria-hidden="true">3<sup>2</sup></span><span class="sr-only">3^2</span> = 9</p>
</div>
<div class="w-3/6">

``` html
	<p><span aria-hidden="true">3<sup>2</sup></span><span class="sr-only">3^2</span> = 9</p>
```
</div>
<div class="w-1/6">
	<p>
		Maybe best
	<p>
</div>
<div class="w-2/6">
	<p><span aria-hidden="true">H<sub>2</sub>0</span><span class="sr-only"></span></p>
</div>
<div class="w-3/6">

``` html
	<p><span aria-hidden="true">H<sub>2</sub>0</span><span class="sr-only"></span></p>
```
</div>
</div>

Demo: 

- [Text SUB SUP](/demo/text-sub-sup)
