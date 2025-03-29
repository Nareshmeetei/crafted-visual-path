import { blogPosts } from './blogPosts.js';

// DOM Elements
const gridView = document.querySelector('.thoughts-grid-view');
const detailView = document.querySelector('.thoughts-detail-view');
const blogPostsContainer = document.querySelector('.blog-posts');
const thoughtDetail = document.querySelector('.thought-detail');
const backButton = document.querySelector('.back-button');
const prevButton = document.querySelector('.nav-arrow.prev');
const nextButton = document.querySelector('.nav-arrow.next');
const tagButtons = document.querySelectorAll('.tag-button');

let currentPostId = null;
let filteredPosts = [...blogPosts];

// Initialize the page
function init() {
    renderBlogPosts(blogPosts);
    setupEventListeners();
    checkUrlForPostId();
}

// Render blog posts in grid view
function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = posts.map(post => `
        <article class="blog-post" data-id="${post.id}">
            <div class="blog-content">
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
            <div class="blog-image"></div>
        </article>
    `).join('');
}

// Show post detail
function showPostDetail(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    currentPostId = postId;
    thoughtDetail.innerHTML = `
        <h1 class="thought-detail-title">${post.title}</h1>
        <div class="thought-detail-image"></div>
        <div class="thought-detail-content">
            ${post.content}
        </div>
    `;

    gridView.style.display = 'none';
    detailView.style.display = 'block';
    window.scrollTo(0, 0);
    updateUrl(postId);
    updateNavigationButtons();
}

// Show grid view
function showGridView() {
    currentPostId = null;
    gridView.style.display = 'block';
    detailView.style.display = 'none';
    updateUrl();
}

// Navigation functions
function showNextPost() {
    if (!currentPostId) return;
    const currentIndex = filteredPosts.findIndex(p => p.id === currentPostId);
    const nextPost = filteredPosts[currentIndex + 1] || filteredPosts[0];
    showPostDetail(nextPost.id);
}

function showPreviousPost() {
    if (!currentPostId) return;
    const currentIndex = filteredPosts.findIndex(p => p.id === currentPostId);
    const prevPost = filteredPosts[currentIndex - 1] || filteredPosts[filteredPosts.length - 1];
    showPostDetail(prevPost.id);
}

// Update navigation buttons visibility
function updateNavigationButtons() {
    const currentIndex = filteredPosts.findIndex(p => p.id === currentPostId);
    prevButton.style.visibility = filteredPosts.length > 1 ? 'visible' : 'hidden';
    nextButton.style.visibility = filteredPosts.length > 1 ? 'visible' : 'hidden';
}

// URL management
function updateUrl(postId = null) {
    const url = postId ? `?post=${postId}` : window.location.pathname;
    window.history.pushState({}, '', url);
}

function checkUrlForPostId() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');
    if (postId) {
        showPostDetail(parseInt(postId));
    }
}

// Filter posts by tag
function filterPosts(tag) {
    filteredPosts = tag === 'all' 
        ? [...blogPosts]
        : blogPosts.filter(post => post.tags.includes(tag));
    renderBlogPosts(filteredPosts);
}

// Setup event listeners
function setupEventListeners() {
    // Blog post clicks
    blogPostsContainer.addEventListener('click', (e) => {
        const post = e.target.closest('.blog-post');
        if (post) {
            showPostDetail(parseInt(post.dataset.id));
        }
    });

    // Back button
    backButton.addEventListener('click', showGridView);

    // Navigation buttons
    prevButton.addEventListener('click', showPreviousPost);
    nextButton.addEventListener('click', showNextPost);

    // Tag filtering
    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            tagButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPosts(button.dataset.tag);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (detailView.style.display === 'block') {
            if (e.key === 'ArrowLeft') showPreviousPost();
            if (e.key === 'ArrowRight') showNextPost();
            if (e.key === 'Escape') showGridView();
        }
    });

    // Browser back/forward navigation
    window.addEventListener('popstate', () => {
        checkUrlForPostId();
    });
}

// Initialize the page
init(); 