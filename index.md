---
layout: default
---

<div class="container-fluid">
	<div class="row">

		<!-- LEFT SIDE -->
		<div class="col-lg-7 offset-lg-1 col-md-8">
			
			<!-- Top Post -->
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

			<!-- Latest Posts -->
			<h3 class="mt-5 pb-2 uy">Latest Stories</h3>
			{% include latestPosts.html %}
			
		</div>
		
		<!-- RIGHT SIDE -->
		<div class="col-lg-3 col-md-4 col-sm-6 mt-5 mt-md-0">
			<div class="cardNewsletter mb-4">
				{% include newsletter.html %}
			</div>
			
			{%include relatedArticles.html %}
		</div>
	</div>

</div>