---
layout: default
---

<div class="container-fluid">
	<div class="row">

		<div class="col-sm-7 offset-sm-1">
			
			<div id="topStory">
				<h3 class="mb-4 pb-2 uy">Top Story</h3>
				<div class="card">

					<img src="/assets/images/2.jpg" alt="Photo of sunset">

					<!-- Text Content -->
					<div class="card-block">
						<h5 class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</h5>
					</div>

				</div>
			</div>

			<h3 class="mt-5 pb-2 uy">Latest Stories</h3>
			<div class="container-fluid">
				{% for post in site.posts%}
				<div class="row homePosts">
					<div class="col-sm-6 imageDiv">
						<img class="img-fluid" src="{{ post.image }}" alt="{{ post.title }}">
					</div>

					<div class="col-sm-6">
						<h5><small><a href="{{ post.permalink }}">{{ post.title }}</a></small></h5>
						<p><small>{{ post.date | date: "%-d %B %Y at %R"}}</small></p>
					</div>
				</div>
				{% endfor %}
			</div>
		</div>

		<div class="col-sm-3">
			{%include relatedArticles.html %}
		</div>
	</div>

</div>