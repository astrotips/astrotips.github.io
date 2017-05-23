---
layout: default
---

<div class="container-fluid">
	<div class="row">

		<!-- LEFT SIDE -->
		<div class="col-sm-7 offset-sm-1">
			
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
		<div class="col-sm-3">
			{%include relatedArticles.html %}
		</div>
	</div>

</div>