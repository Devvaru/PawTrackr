import '../team.css';

function Team() {
  // Inspiration: https://codepen.io/dostonnabotov/pen/XWxGzWa
  const cardControllers = document.querySelectorAll('[data-card-controller]');

  cardControllers.forEach((controller) => {
    controller.addEventListener('click', (e) => {
      const card = e.currentTarget.parentElement.parentElement;
      const isVisible = card.dataset.visible;

      if (isVisible === 'false') {
        card.setAttribute('data-visible', true);
      } else {
        card.setAttribute('data-visible', false);
      }
    });
  });

  return (
    <section class='main'>
      <div class="container flow-content">
        <h2 class="section-title">Meet the Team</h2>
        <ul role="list" class="grid">
          {/* <!-- Dev 1 --> */}
          <li>
            <article class="team-card" data-visible="false">
              <div class="card__front flow-content">
                <img class="card__img mx-auto"
                  src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                  alt="Emily Williams" />
                <div class="flow-content" data-spacing="sm">
                  <p class="card__name">Emily Williams</p>
                  <p class="card__position">Full-Stack Web Developer</p>
                </div>
                <a href="" class="flow-content text-links">github.com/emily-williams</a>
                <a href="" class="flow-content text-links">linkedin.com/in/emily-williams</a>
                <q>This is an inspiring quote.</q>
                <ul role="list" class="card__social flex-group">
                  <li>
                    <a href="#" className='link'>
                      <i class="fa-brands fa-github" style={{ color: '#ffa500' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className='link'>
                      <i class="fa-brands fa-linkedin fa-xl" style={{ color: '#ffa500' }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </li>
          {/* <!-- Dev 2 --> */}
          <li>
            <article class="team-card" data-visible="false">
              <div class="card__front flow-content">
                <img class="card__img mx-auto"
                  src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                  alt="John Doe" />
                <div class="flow-content" data-spacing="sm">
                  <p class="card__name">John Doe</p>
                  <p class="card__position">Full-Stack Web Developer</p>
                </div>
                <a href="" class="flow-content text-links">github.com/john-doe</a>
                <a href="" class="flow-content text-links">linkedin.com/in/john-doe</a>
                <q>My quote is more inspiring.</q>
                <ul role="list" class="card__social flex-group">
                  <li>
                    <a href="#" className='link'>
                      <i class="fa-brands fa-github" style={{ color: '#ffa500' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className='link'>
                      <i class="fa-brands fa-linkedin fa-xl" style={{ color: '#ffa500' }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </li>
          {/* <!-- Dev 3 --> */}
          <li>
            <article class="team-card" data-visible="false">
              <div class="card__front flow-content">
                <img class="card__img mx-auto"
                  src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                  alt="Jane Smith" />
                <div class="flow-content" data-spacing="sm">
                  <p class="card__name">Jane Smith</p>
                  <p class="card__position">Full-Stack Web Developer</p>
                </div>
                <a href="" class="flow-content text-links">github.com/jane-smith</a>
                <a href="" class="flow-content text-links">linkedin.com/in/jane-smith</a>
                <q>My quote is short.</q>
                <ul role="list" class="card__social flex-group">
                  <li>
                    <a href="#" className='link'>
                      <i class="fa-brands fa-github" style={{ color: '#ffa500' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className='link'>
                      <i class="fa-brands fa-linkedin fa-xl" style={{ color: '#ffa500' }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </li>
        </ul>
        <ul role="list" class="grid">
          <li>
            <article class="team-card" data-visible="false">
              <div class="card__front flow-content">
                <div class="flow-content" data-spacing="sm">
                  <img src="qr-code-meet-the-team.svg" alt="QR Code" />
                </div>
              </div>
            </article>
          </li>
        </ul >
      </div>
    </section>
  );
}

export default Team;
