# Aria Attribute
## aria-expanded


<button class="toggler" aria-expanded="false" style="border: 1px solid black;">Open me</button>
<div class="hidden target">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias placeat, quasi qui ullam voluptates? Ad autem cumque distinctio eveniet! Dignissimos eos illum, maxime quisquam similique sunt ullam veniam voluptatibus.</p>
</div>
<script>
    document.addEventListener('click', function (event) {
    	if (event.target.matches('.toggler')){
    	    var el = document.querySelector('.toggler');
    	    var exp = el.getAttribute('aria-expanded');
    	    if(exp === 'false'){
    	        el.setAttribute('aria-expanded', true)
    	    } else{
    	        el.setAttribute('aria-expanded', false)
    	    }
    	    document.querySelector('.target').classList.toggle('hidden');
    	}
    }, false);
</script>
