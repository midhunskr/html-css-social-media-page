document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") {
        alert("Post content cannot be empty");
        return;
    }

    const postSection = document.createElement('div');
    postSection.classList.add('post');

    const postTitle = document.createElement('h4');
    postTitle.innerText = 'Midhun Shankar';

    const postText = document.createElement('p');
    postText.innerText = postContent;

    postSection.appendChild(postTitle);
    postSection.appendChild(postText);

    document.getElementById('feed').appendChild(postSection);
    document.getElementById('post-content').value = "";
});
