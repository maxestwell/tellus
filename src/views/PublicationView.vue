<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <header>
    <div>
      <TheTitle :title="headerTitle" />
    </div>
  </header>
  <div class="writing">
    <section>
      <div class="text-container">
        <h1 class="text">PUBLICATION CONCEPT</h1>
      </div>
      <div class="text-container">
        <h2 class="text">Title of Publication</h2>
      </div>
      <p>Tellus</p>
      <div class="text-container">
        <h2 class="text">Description</h2>
      </div>
      <p>
        A curated audio archive of micro-interviews based around the 'Would you rather…?' concept.
        The idea is that the platform will also serve as a deposit point for users to contribute
        their responses for the next issue of the publication (which would offer a different 'would
        you rather' scenario). The publication will draw from the Vox Pop concept-short for the
        Latin, 'Vox Populi'- meaning, "voice of the people". A Vox Pop seeks to gauge public opinion
        on a single, central question. The question could be connected to anything—whether it's
        something in the news, something silly, or something reflective.
      </p>
      <div class="text-container">
        <h2 class="text">Underpinning Message</h2>
      </div>
      <p>
        The publication emphasises collective knowledge-building by creating a shared "library of
        perspectives". Each contribution to the publication adds to the understanding of a central
        question. Then, by hearing varied responses, users will be encouraged to be introspective,
        reflecting on their own views and others' views. In this way, "Would you rather…?" scenarios
        will be tools for self-reflection and bridge a connection with a broader audience, leading
        to ideas and insights that wouldn't arise alone.
      </p>
      <p>
        Each question, whether light-hearted or profound, is designed to let people reconsider their
        underlying values and perspectives, which are often influenced by cultural or social factors
        that we are sometimes not aware of. Users can explore their perspectives, with challenges to
        their existing perspectives, in a safe, anonymous and communal setting.
      </p>
      <p>
        Essentially, this platform is a way to "hear" diverse voices and learn from lived
        experiences. This helps with understanding our social world by allowing users to explore
        ideas outside their comfort zone. Each response can reveal new ways of framing the world
        that users wouldn't encounter in their own daily life, encouraging empathy in an
        increasingly divided online world.
      </p>
      <p>
        Listening to others' perspectives not only sparks personal growth but also encourages users
        to examine the social influences shaping their beliefs. One user found the poll helped them
        reflect on how they exercise their own privilege through assumptions made in daily life -
        i.e. access to quality healthcare, and the ability to spend leisure time and disconnect from
        work. The audience will see that by contributing, they're taking an active role in
        co-creating a unique community dialogue. They become part of a developing conversation, that
        reflects the collective consciousness of the group.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">TARGET AUDIENCE</h1>
      </div>
      <p>This publication will appeal to a range of audience characteristics and preferences.</p>
      <p>
        Philosophical thinkers and conversationalists enjoy hypothetical questions, thought
        experiments, and moral dilemmas. They value deep questions that encourage self-reflection,
        explore different perspectives, and delve into the mechanics of knowledge generation.
      </p>
      <p>
        In contrast, pop culture fans engage with "Would you rather…?" scenarios tied to current
        events or celebrity culture, finding fun and relevance in these timely references.
      </p>
      <p>
        Nostalgia seekers are drawn to questions that evoke personal memories and stories,
        particularly those that tap into nostalgia or reflect on personal growth.
      </p>
      <p>
        Active podcast listeners, from a media consumption standpoint, are a key group. These
        consumers enjoy short-form audio content in series or conversational formats. They are drawn
        to micro-interviews that offer a cross-section of others' lives.
      </p>
      <p>
        Users who are actively engaged with social media platforms like Instagram, TikTok, or
        Twitter, who are motivated to contribute content or respond to others.
      </p>
      <p>
        People with busy lifestyles prefer bite-sized content they can consume on the go.
        Micro-interviews and short scenarios fit easily into their lives and could be drawn to these
        platforms because they are a light-hearted break from their routines.
      </p>
      <p>
        People who enjoy being part of a community and are motivated, for a variety of reasons, to
        engage with and connect to, other users. Being part of an active, community dialogue is a
        powerful motivator. They are driven by hearing others' thoughts, understanding shared
        opinions, and connecting through mutual experiences.
      </p>
      <p>
        The publication will also appeal to users who are motivated to express their own personal
        beliefs and views.
      </p>
      <p>
        Lastly, curious, open-minded users who are interested in others' perspectives. They value
        hearing opinions they might not encounter or even agree within their everyday lives. They
        seek personal growth and wisdom by exploring other perspectives on both light-hearted and
        profound questions.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">STYLISTIC APPROACH</h1>
      </div>
      <div class="text-container">
        <h2 class="text">Moodboard</h2>
      </div>
      <div class="img-container">
        <div class="photo-gallery">
          <div class="column">
            <img
              src="https://i.pinimg.com/736x/47/e3/61/47e361211751c349d12862c03ee208b4.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/736x/41/14/6f/41146f7abac4c6182891d4018a9382b6.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/736x/a6/5c/04/a65c04dddd3bcb2a61c7fdffcd31c09f.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/736x/38/2a/66/382a6686921e2179aac31bf0d523c23b.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/736x/8b/b7/1a/8bb71ab1554015fb73f897359ba5062e.jpg"
              alt="moodboard"
            />
          </div>
          <div class="column">
            <img
              src="https://i.pinimg.com/474x/d9/8f/4d/d98f4dbcb3439867001785f9731e784b.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/1f/6c/fe/1f6cfe959ea3e6d02d0d9ae327878092.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/53/20/c3/5320c3116727d66333c1191328486981.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/736x/ed/9d/56/ed9d5682a12213e71a62eb7b7901df22.jpg"
              alt="moodboard"
            />
          </div>
          <div class="column">
            <img
              src="https://i.pinimg.com/474x/70/8b/3b/708b3b3151ca06e80a900736462bb2cb.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/b0/f6/5b/b0f65ba00c9e8fc4a648843162a7a928.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/d4/e5/2a/d4e52af0e4d7b59bd5c1f759ae7527ba.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/2f/00/99/2f0099ce0f1bb049aeb18dd4c3b5b4c8.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/1e/3b/11/1e3b115ec8e3e4feb0a0b994da4ad446.jpg"
              alt="moodboard"
            />
          </div>
          <div class="column">
            <img
              src="https://i.pinimg.com/474x/4c/a8/1b/4ca81b8d35e7a4f5b64dd37acfc60ef1.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/736x/c8/92/af/c892afcec56f0d39b4e5824838b46d35.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/d3/74/38/d3743863ff0454a6cf03dd89b5aa334e.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/cb/15/9f/cb159fdc3e34709349e446aa106c8dd9.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/c6/ca/98/c6ca98ff0a317777d5fede6e341d40ad.jpg"
              alt="moodboard"
            />
          </div>
          <div class="column">
            <img
              src="https://i.pinimg.com/474x/f1/73/4d/f1734dc5627170484c55d24818657d61.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/79/0c/30/790c3029a91847b60ec190ce6a7e61ac.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/95/bc/92/95bc92deb7f464cecb29f2e582dfcaca.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/5e/df/d7/5edfd76d3c8541c2004e4efdbdfb2428.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/4b/a1/d2/4ba1d2cfa049412627ce38a9ae421b60.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/32/6e/15/326e15d933fb2d30bbc50ba66c008d63.jpg"
              alt="moodboard"
            />
          </div>
          <div class="column">
            <img
              src="https://i.pinimg.com/474x/bf/f7/a7/bff7a7a91878db80279590988311fdeb.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/55/e9/28/55e9285a54c0d1112cd5e7e3dc6a4bad.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/de/62/05/de62054da6cc0fbd081c4b59b6a722f6.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/86/2a/d7/862ad7c223fbbead2d7c982d3bc67504.jpg"
              alt="moodboard"
            />
            <img
              src="https://i.pinimg.com/474x/8e/b4/c7/8eb4c7d5eb55b9550c8893729184f965.jpg"
              alt="moodboard"
            />
          </div>
        </div>
      </div>
      <p>
        Through the use of nostalgia, the website's aesthetic reflects an early form of the
        internet, where websites were far more unique, personal and introspective.
      </p>
      <p>
        Incorporating signature elements of early websites reflects a big part of the identity of
        the publication. It Includes retro and stylistic elements featured in the 'Old Web', 'y2k',
        and 'Memphis' designs such as:
      </p>
      <ul>
        <li>Customisation (profiles, mouse cursors, boarders, colours)</li>
        <li>Early Internet Lingo</li>
        <li>Pop-Ups (windows, notifications)</li>
        <li>Easter Eggs (random "mystery" links)</li>
        <li>
          Rewards (digital stickers, collectibles, profile customisability, experience levels)
        </li>
        <li>Nostalgia-Driven Prompts (90s/2000s internet/pop culture)</li>
        <li>Quirky Sections (Splash Page Intro, About, FAQ, Polls, Forums, data visualisation)</li>
        <li>
          Pixel Art and GIFs (low-resolution graphics, pixelated icons, fonts, colours, retro
          gradients, borders/frames, and visible scrollbars)
        </li>
      </ul>
      <p>
        This will enhance the feeling of nostalgia and the way users will interact with the
        publication.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">CONTENT</h1>
      </div>
      <p>
        There are two aspects of how the publication content is viewed by the public: User upload
        content and the publication uploaded content.
      </p>
      <p>
        user uploaded content includes their response to the 'Would You Rather' question and their
        profile which can include uploaded images, a short bio and location.
      </p>
      <p>
        The publication will make original writing, curated lists, pages and data visualisation
        (filters, stats) public.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">PROTOTYPE SCOPE</h1>
      </div>
      <div class="text-container">
        <h2 class="text">Scope & Key Elements</h2>
      </div>
      <p>The website will be a static website (purely aesthetic, no functionality).</p>
      <div class="text-container">
        <h2 class="text">Limitations</h2>
      </div>
      <p>
        The implementation to record a 'Would You Rather?' question is far too complicated to
        achieve. This would involve using a backend server and keeping voice recordings of users.
        This poses a risk in terms of security and privacy. This has been visually represented as a
        page on the website.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">FUTURE DIRECTIONS</h1>
      </div>
      <div class="text-container">
        <h2 class="text">Big Picture & Evolution</h2>
      </div>
      <p>
        The plan is to have monthly editions so there is enough time for users to reflect,
        contribute and engage with the publication. A month will be enough time to get enough
        submissions. It will evolve and improve over time and adjustments can be made, for example,
        the time between editions can be shortened or made longer with relatively easily.
      </p>
      <div class="text-container">
        <h2 class="text">Physical release</h2>
      </div>
      <div>
        <h3 class="text-container">Physical Release & Expanding Reach</h3>
      </div>
      <p>
        Tellus could potentially expand its reach by utilising various social media platforms. One
        idea might involve filming bite-sized interviews in strange places incongruent with the
        topic—for instance, talking about Wall Street beside a waterfall—to create visual and
        thematic contrast. Another possibility could be organising pop-up street interviews,
        although this would require further consideration to ensure it aligns with the publication's
        philosophy.
      </p>
      <div>
        <h3 class="text-container">Interactive App or Periodic Updates</h3>
      </div>
      <p>
        In the future, the publication could evolve into an app. This could encourage users to
        engage with friends and the wider online community, fostering continuous dialogue. This
        format might become a fun and interactive way for people to stay connected.
      </p>
      <div>
        <h3 class="text-container">Artistic Exhibitions & Community Responses</h3>
      </div>
      <p>
        Going full circle back to the initial concept of Tellus in Finland, the project could
        potentially be extended into physical exhibitions, showcasing community responses to
        specific questions. Artists could create pieces inspired by these responses, providing
        visitors with an immersive and reflective experience. Visitors could also contribute by
        recording or writing their answers on-site, gradually transforming the exhibition space,
        illustrating the evolving dialogue.
      </p>
      <div>
        <h3 class="text-container">Creative AI Integration</h3>
      </div>
      <p>
        In the future, the project might explore the use of AI to add a playful and experimental
        dimension. An AI trained on the archive of user responses could generate humorous or
        unexpected outputs, such as quirky "Would you rather?" scenarios or creative interpretations
        of user input. This could provide both entertainment and an interesting commentary on how AI
        interacts with human creativity.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">ETHICAL & LEGAL OBLIGATIONS</h1>
      </div>
      <p>
        The publication will need to be moderated to avoid potential issues arising with submissions
        from anonymous users. One way to mitigate this would be to have a traditional sign-up method
        where a user is prompted to input: First/Last name, e-mail (verification), username and
        location. This will only be available to the moderators.
      </p>
      <p>
        There are no age restrictions and no third-party data collection. Community guidelines will
        be included that stress the importance of abiding by respectful content that is
        non-political and relevant.
      </p>
      <p>
        The other legal and ethical obligation is to abide by copyright legislation. Ethically, it
        is inauthentic to use other's material without referencing, but by definition, this
        publication encourages and prompts self-reflection and personal perspectives. This provides
        some protection from copyright issues, but moderating the content is also a way to screen
        for breaches of copyright.
      </p>
      <div class="text-container">
        <h2 class="text">Acknowledging Indigenous Culture</h2>
      </div>
      <p>
        These values are important when considering the indigenous people and Australian culture.
        There is a responsibility to acknowledge the traditional custodians and respect the
        traditional owners of this land. The question "Would you rather…?" is inclusive but one of
        the responsibilities of the moderation process would be to ensure that the content is
        respectful.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">PROJECT VIABILITY</h1>
      </div>
      <div class="text-container">
        <h2 class="text">Skills & Resources</h2>
      </div>
      <p>
        A few resources are needed to develop the publication further. Firstly, access to a laptop,
        computer and software such as Visual Studio Code, GitHub and open-source software as well as
        access to community and public resources such as the library and academic institutions. This
        will support the future development and evolution of Tellus.
      </p>
      <p>
        Technical skills are needed for this publication to succeed. Competence and agility in
        software skills are key and an interest in developing these further provide the scaffolding
        on which other skills rely.
      </p>
      <p>
        An innate curiosity about people and a personal interest in exploring others' perspectives
        on a range of issues comes from intrinsic motivation. This enthusiasm for the publication is
        an essential skill required to stay motivated if/when there are challenges or roadblocks in
        any stage of the publication.
      </p>
      <p>
        These skills and resources will enhance the ability to continue developing the publication
        and expand to more platforms. There is no interest in exploring this publication for
        financial gain or personal recognition and this will help protect the ethical and legal
        boundaries of Tellus.
      </p>
      <div class="text-container">
        <h2 class="text">Funding & Sponsorships</h2>
      </div>
      <p>
        Funding, sponsorships and collaborations could be arranged with institutions who are working
        to increase their online engagement. Institutions in Canberra like the Canberra Innovation
        Network could be an excellent choice to evolve this publication with funding.
      </p>
      <div class="text-container">
        <h2 class="text">Collaborations</h2>
      </div>
      <p>
        Tellus is a flexible product allowing a safe and engaging way for a relevant target audience
        to stay engaged. Potential collaborations are with museums/galleries and within learning
        institutions such as schools or universities. Tellus could be a useful asset allowing a
        museum/gallery to enhance their audience reach by promoting their exhibitions. By asking
        content related "Would You Rathers?" audience interest can be focussed on a specific
        exhibition or on the museum/gallery overall, increasing their ability to stay engaged with
        or expand their customer base and stay viable.
      </p>
      <p>
        Teachers/educators could request curriculum-relevant questions and use Tellus as a launch
        pad for class discussions, stimulating discussion, enhancing respect for diverse opinion and
        enhancing learning in a safe environment.
      </p>
    </section>
    <section>
      <div class="text-container">
        <h1 class="text">RESOURCES & REFERENCES</h1>
      </div>
      <div class="text-container">
        <h2 class="text">Research references</h2>
      </div>
      <ul>
        <li>
          <a href="https://www.kqed.org/education/vox-pop-curriculum">vox pop curriculum</a>
        </li>
        <li>
          <a href="https://voxpops.com/news/what-is-a-vox-pop/">what is a vox pop?</a>
        </li>
        <li>
          <a
            href="https://www.act.gov.au/business/get-help-and-advice/canberra-innovation-network-cbrin"
            >cbrin help & advice</a
          >
        </li>
        <li>
          <a href="https://willyoupressthebutton.com/">will you press the button?</a>
        </li>
        <li>
          <a href="https://au.pinterest.com/maxestwell/tellus-website/">Moodboard</a>
        </li>
      </ul>
      <div class="text-container">
        <h2 class="text">Development resources</h2>
      </div>
      <ul>
        <li><a href="https://www.ableton.com/en/live/what-is-live/">Ableton Live</a></li>
        <li><a href="https://chatgpt.com">ChatGPT</a></li>
      </ul>
      <div class="text-container">
        <h3 class="text">Stock photos</h3>
      </div>
      <ul class="last">
        <li>
          <a
            href="https://www.freepik.com/free-vector/realistic-rave-sticker-design_42113467.htm#fromView=search&amp;page=1&amp;position=33&amp;uuid=8a95c452-3ecc-473e-aae3-03a8ee74a84a"
          >
            sticker illustration
          </a>
        </li>
        <li>
          <a
            href="https://www.freepik.com/free-vector/set-circular-page-curl-sticker-template-design_361061246.htm#fromView=search&page=1&position=21&uuid=f5408efe-8594-4f33-b774-aa5ef428e0af"
          >
            sticker
          </a>
        </li>
        <li>
          <a
            href="https://www.freepik.com/free-vector/human-hands-set_956071.htm#fromView=search&page=1&position=11&uuid=f513a4df-5c28-4089-8cb4-7e276b6037aa"
          >
            hand
          </a>
        </li>
        <li>
          <a
            href="https://www.freepik.com/free-vector/hand-drawn-foot-cartoon-illustration_172782095.htm#fromView=search&page=1&position=20&uuid=46b34b51-ebf3-48a4-bcf9-6acf6471c5ab"
          >
            foot
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.last {
  padding-bottom: 3em;
}
.writing {
  background-color: var(--color-background-mute);
}

h1 {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.text {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 900,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  -webkit-text-stroke: 0.02rem #181818;
}

h1 {
  text-transform: uppercase;
}

h2,
h3,
h4,
h5,
h6 {
  text-transform: capitalize;
  width: fit-content;
  /* padding-bottom: 1em; */
}

p {
  font-family: 'adapter-mono-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 600,
    'slnt' -6,
    'ital' 1,
    'BORD' 300;
}

ul {
  padding-inline-start: 0;
}

ul li {
  list-style-type: none;
  font-family: 'adapter-mono-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 600,
    'slnt' 0,
    'ital' 1,
    'BORD' 300;
}

.img-container {
  width: 100%;
  margin: auto;
  padding-bottom: 1em;
}

.photo-gallery {
  display: flex;
  gap: 1em;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.column img {
  width: 100%;
  height: auto;
}
</style>
