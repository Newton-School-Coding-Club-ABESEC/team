// content script
window.addEventListener('load', async () => {
  const response = await fetch('../content/current.json').then((res) =>
    res.json()
  );
  if (response) {
    const main = document.getElementById('main-content');
    const coreTeam = response.core;
    coreTeam.forEach((member) => {
      const newMember = document.createElement('div');
      newMember.innerHTML = `
      <figure class="snip1344 hover">
       <img
       src='${member.image}'
       alt="profile-sample7"
       class="background"
       loading="lazy"
       /><img
       src='${member.image}'
       alt="profile-sample7"
       class="profile"
       loading="lazy"
       />
      <figcaption>
        <h3>${member.name}</span></h3>
        <h4>${member.position}</span></h3>
        <div class="icons">
        <a href="${member.social.twitter}"><i class="ion-social-twitter-outline"></i></a>
        <a href="${member.social.instagram}"><i class="ion-social-instagram-outline"></i></a>
        <a href="${member.social.linkedin}"><i class="ion-social-linkedin-outline"></i></a>
        <a href="${member.social.github}"><i class="ion-social-github-outline"></i></a>
        </div>
      </figcaption>
    </figure>
      `;
      main.appendChild(newMember);
    });
    const members = response.members;
    for (let i in members) {
      const memberSection = document.getElementById('members-content');
      const heading = document.createElement('h2');
      heading.innerHTML = `<a href=${'/#' + i}>${i}</a>`;
      memberSection.appendChild(heading);
      const div = document.createElement('div');
      div.classList.add('flex');
      div.classList.add('f-wrap');
      div.classList.add('f-space-eve');
      div.id = i.split(' ')[0];
      members[i].forEach((member) => {
        div.innerHTML += `
          <figure class="snip1344 hover">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
            alt="profile-sample7"
            class="background"
            loading="lazy"
          /><img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
            alt="profile-sample7"
            class="profile"
            loading="lazy"
            />
          <figcaption>
            <h3>${member.name}</span></h3>
            <div class="icons">
              <a href="${member.social.twitter}"><i class="ion-social-twitter-outline"></i></a>
              <a href="${member.social.instagram}"><i class="ion-social-instagram-outline"></i></a>
              <a href="${member.social.linkedin}"><i class="ion-social-linkedin-outline"></i></a>
              <a href="${member.social.github}"><i class="ion-social-github-outline"></i></a>
            </div>
          </figcaption>
        </figure>
          `;
      });
      memberSection.appendChild(div);
    }

    // hiding loader
    document
      .querySelector('#loader .three-quarter-spinner')
      .classList.add('remove-loader');
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
    }, 300);
  } else {
  }
});
