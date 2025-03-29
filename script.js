document.addEventListener('DOMContentLoaded', () => {
    // Navigation arrows
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');
    
    prevButton.addEventListener('click', () => {
        // Handle previous artwork
        console.log('Previous artwork');
    });
    
    nextButton.addEventListener('click', () => {
        // Handle next artwork
        console.log('Next artwork');
    });

    // Show All Art button
    const showAllButton = document.querySelector('.show-all');
    showAllButton.addEventListener('click', () => {
        // Handle showing all art
        console.log('Show all artwork');
    });

    // Newsletter subscription
    const subscribeForm = document.querySelector('.subscribe-form');
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.querySelector('input[type="email"]').value;
        console.log('Subscribe email:', email);
        // Here you would typically send this to your backend
        alert('Thanks for subscribing!');
        subscribeForm.reset();
    });

    // Navigation menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});

// Art gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const artGridView = document.querySelector('.art-grid-view');
    const artDetailView = document.querySelector('.art-detail-view');
    const showAllButton = document.querySelector('.show-all');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');
    const artItems = document.querySelectorAll('.art-item');

    // Art data
    const artworks = [
        {
            id: 1,
            title: 'Promise',
            description: 'Ink on paper then scanned and digitized it.',
            image: 'images/promise.png'
        },
        {
            id: 2,
            title: 'Art #2',
            description: 'Description for Art #2',
            image: 'images/art2.jpg'
        },
        {
            id: 3,
            title: 'Art #3',
            description: 'Description for Art #3',
            image: 'images/art3.jpg'
        },
        {
            id: 4,
            title: 'Art #4',
            description: 'Description for Art #4',
            image: 'images/art4.jpg'
        },
        {
            id: 5,
            title: 'Art #5',
            description: 'Description for Art #5',
            image: 'images/art5.jpg'
        },
        {
            id: 6,
            title: 'Art #6',
            description: 'Description for Art #6',
            image: 'images/art6.jpg'
        }
    ];

    let currentArtworkId = 1;

    // Show artwork detail
    function showArtworkDetail(id) {
        const artwork = artworks.find(art => art.id === id);
        if (!artwork) return;

        currentArtworkId = id;
        
        // Update detail view content
        const artworkImage = artDetailView.querySelector('.artwork-image');
        const artworkTitle = artDetailView.querySelector('.artwork-title');
        const artworkDescription = artDetailView.querySelector('.artwork-description');
        
        artworkImage.src = artwork.image;
        artworkImage.alt = artwork.title;
        artworkTitle.textContent = artwork.title;
        artworkDescription.textContent = artwork.description;

        // Show detail view, hide grid view
        artGridView.style.display = 'none';
        artDetailView.style.display = 'block';
    }

    // Show grid view
    function showGridView() {
        artDetailView.style.display = 'none';
        artGridView.style.display = 'block';
    }

    // Navigate to previous artwork
    function showPreviousArtwork() {
        let prevId = currentArtworkId - 1;
        if (prevId < 1) prevId = artworks.length;
        showArtworkDetail(prevId);
    }

    // Navigate to next artwork
    function showNextArtwork() {
        let nextId = currentArtworkId + 1;
        if (nextId > artworks.length) nextId = 1;
        showArtworkDetail(nextId);
    }

    // Event Listeners
    artItems.forEach(item => {
        item.addEventListener('click', () => {
            const artId = parseInt(item.dataset.id);
            showArtworkDetail(artId);
        });
    });

    showAllButton.addEventListener('click', showGridView);
    prevButton.addEventListener('click', showPreviousArtwork);
    nextButton.addEventListener('click', showNextArtwork);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (artDetailView.style.display === 'block') {
            if (e.key === 'ArrowLeft') showPreviousArtwork();
            if (e.key === 'ArrowRight') showNextArtwork();
            if (e.key === 'Escape') showGridView();
        }
    });
});

// Thoughts page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only run this code if we're on the thoughts page
    const thoughtsPage = document.querySelector('.thoughts-detail-view');
    if (!thoughtsPage) return;

    const thoughtsGridView = document.querySelector('.thoughts-grid-view');
    const thoughtsDetailView = document.querySelector('.thoughts-detail-view');
    const blogPosts = document.querySelectorAll('.blog-post');
    const backButton = document.querySelector('.back-button');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');

    // Blog posts data array to help with navigation
    const posts = Array.from(blogPosts).map(post => ({
        id: parseInt(post.dataset.id)
    }));

    let currentPostId = 1;

    // Show blog post detail
    function showPostDetail(id) {
        const detailArticle = thoughtsDetailView.querySelector(`.thought-detail[data-id="${id}"]`);
        if (!detailArticle) return;

        currentPostId = id;

        // Hide all detail articles first
        thoughtsDetailView.querySelectorAll('.thought-detail').forEach(article => {
            article.style.display = 'none';
        });

        // Show the selected article
        detailArticle.style.display = 'block';
        thoughtsGridView.style.display = 'none';
        thoughtsDetailView.style.display = 'block';

        // Update URL without refreshing the page
        window.history.pushState({}, '', `thoughts.html?id=${id}`);
    }

    // Show grid view
    function showGridView() {
        thoughtsDetailView.style.display = 'none';
        thoughtsGridView.style.display = 'block';
        // Update URL to remove the post parameter
        window.history.pushState({}, '', 'thoughts.html');
    }

    // Navigate to previous post
    function showPreviousPost() {
        const currentIndex = posts.findIndex(post => post.id === currentPostId);
        const prevIndex = (currentIndex - 1 + posts.length) % posts.length;
        showPostDetail(posts[prevIndex].id);
    }

    // Navigate to next post
    function showNextPost() {
        const currentIndex = posts.findIndex(post => post.id === currentPostId);
        const nextIndex = (currentIndex + 1) % posts.length;
        showPostDetail(posts[nextIndex].id);
    }

    // Event Listeners
    blogPosts.forEach(post => {
        post.addEventListener('click', () => {
            const postId = parseInt(post.dataset.id);
            showPostDetail(postId);
        });
    });

    // Back button click handler
    backButton?.addEventListener('click', showGridView);

    // Navigation button handlers
    if (prevButton) prevButton.addEventListener('click', showPreviousPost);
    if (nextButton) nextButton.addEventListener('click', showNextPost);

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (thoughtsDetailView.style.display === 'block') {
            if (e.key === 'ArrowLeft') showPreviousPost();
            if (e.key === 'ArrowRight') showNextPost();
            if (e.key === 'Escape') showGridView();
        }
    });

    // Handle back button
    window.addEventListener('popstate', () => {
        thoughtsDetailView.style.display = 'none';
        thoughtsGridView.style.display = 'block';
    });

    // Check URL for post ID on page load
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    if (postId) {
        showPostDetail(parseInt(postId));
    }
});

// Homepage artwork navigation
document.addEventListener('DOMContentLoaded', function() {
    // Only run this code if we're on the homepage
    const isHomePage = document.querySelector('.main-content.home');
    if (!isHomePage) return;

    // Use the same artwork data as the Art page
    const artworks = [
        {
            id: 1,
            title: 'Promise',
            description: 'Ink on paper then scanned and digitized it.',
            image: 'images/promise.png'
        },
        {
            id: 2,
            title: 'Art #2',
            description: 'Description for Art #2',
            image: 'images/art2.jpg'
        },
        {
            id: 3,
            title: 'Art #3',
            description: 'Description for Art #3',
            image: 'images/art3.jpg'
        },
        {
            id: 4,
            title: 'Art #4',
            description: 'Description for Art #4',
            image: 'images/art4.jpg'
        },
        {
            id: 5,
            title: 'Art #5',
            description: 'Description for Art #5',
            image: 'images/art5.jpg'
        },
        {
            id: 6,
            title: 'Art #6',
            description: 'Description for Art #6',
            image: 'images/art6.jpg'
        }
    ];

    let currentArtworkIndex = 0;

    // Get DOM elements
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');
    const artworkImage = document.querySelector('.artwork-image');
    const artworkTitle = document.querySelector('.artwork-title');
    const artworkDescription = document.querySelector('.artwork-description');

    // Function to update artwork display with fade effect
    function updateArtworkDisplay() {
        const artwork = artworks[currentArtworkIndex];
        
        // Fade out
        artworkImage.style.opacity = '0';
        artworkTitle.style.opacity = '0';
        artworkDescription.style.opacity = '0';

        setTimeout(() => {
            // Update content
            artworkImage.src = artwork.image;
            artworkImage.alt = artwork.title;
            artworkTitle.textContent = artwork.title;
            artworkDescription.textContent = artwork.description;

            // Fade in
            artworkImage.style.opacity = '1';
            artworkTitle.style.opacity = '1';
            artworkDescription.style.opacity = '1';

            // Update URL without page reload
            window.history.replaceState({}, '', `?artwork=${artwork.id}`);
        }, 200);
    }

    // Add fade transition styles
    artworkImage.style.transition = 'opacity 0.2s ease';
    artworkTitle.style.transition = 'opacity 0.2s ease';
    artworkDescription.style.transition = 'opacity 0.2s ease';

    // Previous button click handler
    prevButton?.addEventListener('click', () => {
        currentArtworkIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
        updateArtworkDisplay();
    });

    // Next button click handler
    nextButton?.addEventListener('click', () => {
        currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
        updateArtworkDisplay();
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevButton?.click();
        } else if (e.key === 'ArrowRight') {
            nextButton?.click();
        }
    });

    // Check URL for artwork ID on page load
    const urlParams = new URLSearchParams(window.location.search);
    const artworkId = urlParams.get('artwork');
    if (artworkId) {
        const index = artworks.findIndex(art => art.id === parseInt(artworkId));
        if (index !== -1) {
            currentArtworkIndex = index;
            updateArtworkDisplay();
        }
    }
});

// Design gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const designGridView = document.querySelector('.design-grid-view');
    const designDetailView = document.querySelector('.design-detail-view');
    const designItems = document.querySelectorAll('.design-item');
    const backButton = document.querySelector('.design-detail-view .back-button');
    const prevButton = document.querySelector('.design-detail-view .nav-arrow.prev');
    const nextButton = document.querySelector('.design-detail-view .nav-arrow.next');

    // Design data
    const designs = [
        {
            id: 1,
            title: 'Product design for Limespot',
            subtitle: 'Brand Identity',
            description: 'Limespot is a product design agency that specializes in creating user-friendly and visually appealing products for businesses of all sizes. We use a human-centered design approach to create products that are both functional and engaging.',
            mainImage: 'images/limespot-main.jpg',
            secondaryImage: 'images/limespot-secondary.jpg'
        },
        {
            id: 2,
            title: 'Brand Identity Project',
            subtitle: 'Brand Identity',
            description: 'A comprehensive brand identity project focusing on creating a cohesive visual language.',
            mainImage: 'images/brand-main.jpg',
            secondaryImage: 'images/brand-secondary.jpg'
        },
        // Add more design data as needed
    ];

    let currentDesignId = 1;

    // Show design detail
    function showDesignDetail(id) {
        const design = designs.find(d => d.id === id);
        if (!design) return;

        currentDesignId = id;

        // Update detail view content
        const detailTitle = designDetailView.querySelector('.design-detail-title');
        const detailSubtitle = designDetailView.querySelector('.design-detail-subtitle');
        const detailDescription = designDetailView.querySelector('.design-detail-description');
        const mainImage = designDetailView.querySelector('.design-detail-image');
        const secondaryImage = designDetailView.querySelector('.secondary-image');

        // Add fade out effect
        [detailTitle, detailSubtitle, detailDescription, mainImage, secondaryImage].forEach(el => {
            if (el) {
                el.style.transition = 'opacity 0.2s ease';
                el.style.opacity = '0';
            }
        });

        setTimeout(() => {
            detailTitle.textContent = design.title;
            detailSubtitle.textContent = design.subtitle;
            detailDescription.textContent = design.description;
            mainImage.style.backgroundImage = `url(${design.mainImage})`;
            secondaryImage.style.backgroundImage = `url(${design.secondaryImage})`;

            // Fade in
            [detailTitle, detailSubtitle, detailDescription, mainImage, secondaryImage].forEach(el => {
                if (el) el.style.opacity = '1';
            });

            // Show detail view, hide grid view
            designGridView.style.display = 'none';
            designDetailView.style.display = 'block';

            // Update URL without refreshing the page
            window.history.pushState({}, '', `design.html?id=${id}`);
        }, 200);
    }

    // Show grid view
    function showGridView() {
        designDetailView.style.display = 'none';
        designGridView.style.display = 'block';
        window.history.pushState({}, '', 'design.html');
    }

    // Navigate to previous design
    function showPreviousDesign() {
        const prevId = currentDesignId > 1 ? currentDesignId - 1 : designs.length;
        showDesignDetail(prevId);
    }

    // Navigate to next design
    function showNextDesign() {
        const nextId = currentDesignId < designs.length ? currentDesignId + 1 : 1;
        showDesignDetail(nextId);
    }

    // Event Listeners
    designItems.forEach(item => {
        item.addEventListener('click', () => {
            const designId = parseInt(item.dataset.id);
            showDesignDetail(designId);
        });
    });

    // Navigation button handlers
    if (backButton) backButton.addEventListener('click', showGridView);
    if (prevButton) prevButton.addEventListener('click', showPreviousDesign);
    if (nextButton) nextButton.addEventListener('click', showNextDesign);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (designDetailView.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                showPreviousDesign();
            } else if (e.key === 'ArrowRight') {
                showNextDesign();
            } else if (e.key === 'Escape') {
                showGridView();
            }
        }
    });

    // Handle back button
    window.addEventListener('popstate', () => {
        designDetailView.style.display = 'none';
        designGridView.style.display = 'block';
    });

    // Check URL for design ID on page load
    const urlParams = new URLSearchParams(window.location.search);
    const designId = urlParams.get('id');
    if (designId) {
        showDesignDetail(parseInt(designId));
    }
}); 